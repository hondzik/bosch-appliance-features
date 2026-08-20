import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { boschFeatureEntitiesMap, boschEntitiesMap, EBoschEntity } from '../const/BoschEntities';
import { getDeviceEntityIds } from '../utils/deviceEntities';
import { resolveEntityPrefix } from '../utils/entityPrefix';
import type { FeatureConfig, BoschEntity } from './BoschFeaturesTypes';
import type { EBoschFeature } from '../const/BoschFeatures';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';

export abstract class BaseBoschFeature extends LitElement {
  public abstract hass?: HomeAssistant;
  public abstract context?: LovelaceCardFeatureContext;
  protected abstract _config?: FeatureConfig;
  protected abstract feature: EBoschFeature;
  protected abstract entityPrefixLength: number;

  static get applianceType(): string {
    throw new Error('Must be implemented by subclass');
  }

  private _entityPrefix?: string;
  private get entityPrefix(): string | undefined {
    if (this._entityPrefix === undefined) {
      this._entityPrefix = resolveEntityPrefix(this.context?.entity_id, this.entityPrefixLength);
      if (this._entityPrefix === undefined) {
        console.error('Cannot derive entityPrefix: context.entity_id is undefined');
      }
    }
    return this._entityPrefix;
  }

  private _entities: Map<EBoschEntity, BoschEntity> = new Map();
  private get entities(): Map<EBoschEntity, BoschEntity> {
    if (this._entities.size === 0) {
      const entityEnums = boschFeatureEntitiesMap.get(this.feature) ?? [];

      this._entities = entityEnums.reduce((mapAcc, enumKey) => {
        const entity = boschEntitiesMap.get(enumKey);
        if (entity) {
          mapAcc.set(enumKey, entity);
        }
        return mapAcc;
      }, new Map<EBoschEntity, BoschEntity>());

      if (this._entities.size === 0) {
        console.error(`No entities associated with feature ${this.feature} found`);
      }
    }

    return this._entities;
  }

  private _online?: boolean;
  protected get online(): boolean {
    if (this._online === undefined) {
      this._online = this.getLinkedEntityState(EBoschEntity.power_state)?.state === 'on';
    }
    return this._online;
  }
  protected set online(val: boolean | undefined) {
    this._online = val;
  }

  // Home Connect operation states in which a program is active enough that program/option
  // selection should be locked and a "Stop" action (rather than "Start") is the relevant one.
  private static readonly runningOperationStates = new Set([
    'BSH.Common.EnumType.OperationState.DelayedStart',
    'BSH.Common.EnumType.OperationState.Run',
    'BSH.Common.EnumType.OperationState.Pause',
    'BSH.Common.EnumType.OperationState.ActionRequired',
    'BSH.Common.EnumType.OperationState.Aborting',
  ]);

  private _running?: boolean;
  protected get running(): boolean {
    if (this._running === undefined) {
      const state = this.getLinkedEntityState(EBoschEntity.operation_state)?.state;
      this._running = !!state && BaseBoschFeature.runningOperationStates.has(state);
    }
    return this._running;
  }
  protected set running(val: boolean | undefined) {
    this._running = val;
  }

  protected getLinkedEntityState(entityRef: EBoschEntity): HassEntity | undefined {
    if (!this.hass || !this.context) return undefined;

    if (!this.entities.has(entityRef) || !this.entityPrefix) {
      console.error(`Entity ${entityRef} with prefix ${this.entityPrefix} not found in entities map`);
      return undefined;
    }

    const entityDef = this.entities.get(entityRef)!;
    const entityId = `${entityDef.type}.${this.entityPrefix}_${entityDef.suffix}`;
    const entity = this.hass?.states?.[entityId];

    if (!entity) {
      console.error(`Entity for ${entityRef} not found (entityId: ${entityId})`);
      return undefined;
    }

    // Button entities have no meaningful state beyond "last pressed" — 'unknown' is their normal
    // idle value (never pressed / just restarted), not a sign of unavailability like it is for
    // other domains.
    if (entity.state === 'unavailable' || (entity.state === 'unknown' && entityDef.type !== 'button')) {
      return undefined;
    }

    return entity;
  }

  // Unlike getLinkedEntityState(), returns the entity regardless of its current state — use for
  // static metadata (e.g. a select's reported `options` list) that's valid even while no option
  // is currently selected/known, i.e. state is 'unknown'.
  protected getLinkedEntityRaw(entityRef: EBoschEntity): HassEntity | undefined {
    if (!this.hass || !this.context || !this.entities.has(entityRef) || !this.entityPrefix) return undefined;

    const entityDef = this.entities.get(entityRef)!;
    const entityId = `${entityDef.type}.${this.entityPrefix}_${entityDef.suffix}`;
    return this.hass.states?.[entityId];
  }

  // Unlike getLinkedEntityState(), does not filter out unavailable/unknown — use this to decide
  // whether a control should render as disabled instead of silently no-op-ing on click.
  protected isLinkedEntityAvailable(entityRef: EBoschEntity): boolean {
    if (!this.hass || !this.context || !this.entities.has(entityRef) || !this.entityPrefix) return false;

    const entityDef = this.entities.get(entityRef)!;
    const entityId = `${entityDef.type}.${this.entityPrefix}_${entityDef.suffix}`;
    const entity = this.hass.states?.[entityId];

    if (!entity || entity.state === 'unavailable') return false;
    return entityDef.type === 'button' || entity.state !== 'unknown';
  }

  protected getBoolConfigVal(key: string, defaultValue: boolean): boolean {
    return this._config && key in this._config ? !!(this._config as any)[key] : defaultValue;
  }

  // Shared pending-action tracking: a feature calls setPending(key, value) right before issuing a
  // service call, then clears it (in its own updated()) once the linked entity reflects that value,
  // or after the 15s timeout below if it never does. Used to show a spinner on the button that
  // triggered the action instead of its icon.
  @state()
  private _pending: Map<string, string> = new Map();

  private _pendingTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

  protected isPending(key: string): boolean {
    return this._pending.has(key);
  }

  protected get hasPendingAction(): boolean {
    return this._pending.size > 0;
  }

  protected getPending(key: string): string | undefined {
    return this._pending.get(key);
  }

  protected get pendingEntries(): IterableIterator<[string, string]> {
    return this._pending.entries();
  }

  protected setPending(key: string, value: string): void {
    const existingTimeoutId = this._pendingTimeouts.get(key);
    if (existingTimeoutId !== undefined) {
      clearTimeout(existingTimeoutId);
    }
    const next = new Map(this._pending);
    next.set(key, value);
    this._pending = next;
    this._pendingTimeouts.set(
      key,
      setTimeout(() => this.clearPending(key), 15000),
    );
  }

  protected clearPending(key: string): void {
    const timeoutId = this._pendingTimeouts.get(key);
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      this._pendingTimeouts.delete(key);
    }
    if (this._pending.has(key)) {
      const next = new Map(this._pending);
      next.delete(key);
      this._pending = next;
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    for (const timeoutId of this._pendingTimeouts.values()) {
      clearTimeout(timeoutId);
    }
    this._pendingTimeouts.clear();
  }

  protected shouldUpdate(changedProperties: Map<PropertyKey, unknown>): boolean {
    if (changedProperties.has('context') || changedProperties.has('_config') || changedProperties.has('_pending')) {
      return true;
    }

    if (!changedProperties.has('hass')) {
      return false;
    }

    const oldHass = changedProperties.get('hass') as HomeAssistant | undefined;
    if (!oldHass) {
      return true; // first render
    }

    let linkedEntityChanged = false;
    for (const entity of this.entities.values()) {
      const entityId = `${entity.type}.${this.entityPrefix}_${entity.suffix}`;
      if (oldHass.states[entityId] !== this.hass?.states[entityId]) {
        linkedEntityChanged = true;
        break;
      }
    }

    if (linkedEntityChanged) {
      this.online = undefined;
      this.running = undefined;
    }

    return linkedEntityChanged;
  }

  // Home Connect Alt derives these object_id fragments from the Home Connect API's own
  // appliance namespace (e.g. `dishcare_dishwasher_option_ecodry`, `cooking_oven_setting_sabbathmode`),
  // not from the user-configurable friendly_name — safe to match on regardless of naming template.
  private static readonly applianceTypeEntityMarkers: Record<string, string> = {
    dishwasher: 'dishcare_dishwasher_',
    oven: 'cooking_oven_',
  };

  public static isHomeConnectAltEntity(stateObj: HassEntity): boolean {
    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || '';
    return deviceClass.startsWith('home_connect_alt_');
  }

  public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
    const entityId = context.entity_id;
    const stateObj = entityId ? hass.states[entityId] : undefined;
    if (!stateObj || !this.isHomeConnectAltEntity(stateObj)) return false;

    const marker = this.applianceTypeEntityMarkers[this.applianceType];
    if (!marker) return false;

    return getDeviceEntityIds(hass, entityId).some((id) => id.includes(marker));
  }
}
