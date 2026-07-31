import { LitElement } from 'lit';
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

  private _running?: boolean;
  protected get running(): boolean {
    if (this._running === undefined) {
      // TODO: check if appliance is running, otherwise return false
      this._running = false;
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

    if (entity.state === 'unavailable' || entity.state === 'unknown') {
      return undefined;
    }

    return entity;
  }

  protected getBoolConfigVal(key: string, defaultValue: boolean): boolean {
    return this._config && key in this._config ? !!(this._config as any)[key] : defaultValue;
  }

  protected shouldUpdate(changedProperties: Map<PropertyKey, unknown>): boolean {
    if (changedProperties.has('context') || changedProperties.has('_config')) {
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
