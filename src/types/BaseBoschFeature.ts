import { HomeAssistant } from 'custom-card-helpers';
import { LitElement } from 'lit';
import { FeatureConfig, BoschEntity } from './BoschFeaturesTypes';
import { EBoschEntity, boschFeatureEntitiesMap, boschEntitiesMap } from '../const/BoschEntities';
import { EBoschFeature } from '../const/BoschFeatures';
import { HassEntity } from 'home-assistant-js-websocket';
import { version } from '../../package.json';

export abstract class BaseBoschFeature extends LitElement {
  public abstract hass?: HomeAssistant;
  public abstract context?: LovelaceCardFeatureContext;
  protected abstract _config?: FeatureConfig;
  protected abstract feature: EBoschFeature;
  protected abstract entityPrefixLength: number;

  private static iconCache = new Map<string, string>();

  private _entityPrefix?: string;
  private get entityPrefix(): string | undefined {
    if (this._entityPrefix === undefined) {
      if (this.context?.entity_id) {
        this._entityPrefix = this.context.entity_id.split('.')[1]?.split('_').slice(0, this.entityPrefixLength).join('_');
      } else {
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
      // TODO: check if appliance is online, otherwise return false
      this._online = true;
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
    }

    if (entity.state === 'unavailable' || entity.state === 'unknown') {
      return undefined;
    }

    return entity;
  }

  protected getBoolConfigVal(key: string, defaultValue: boolean): boolean {
    return this._config && key in this._config ? !!(this._config as any)[key] : defaultValue;
  }

  protected static async getInlineSVG(iconName: string): Promise<string> {
    if (!this.iconCache.has(iconName)) {
      const res = await fetch(`/hacsfiles/bosch-appliance-features/icons/${iconName}.svg?v=${version}`);
      const svgText = (await res.text()).replace(/#000000|#000/g, 'currentColor');
      this.iconCache.set(iconName, svgText);
    }
    return this.iconCache.get(iconName)!;
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

  public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext, subtype: string): boolean {
    console.log('BaseBoschFeature isSupported check for subtype:', subtype);
    console.log('Context entity_id:', context.entity_id);

    const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
    if (!stateObj) return false;

    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || '';
    const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || '';

    console.log('Device class:', deviceClass);
    console.log('Friendly name:', friendlyName);  

    return deviceClass.startsWith('home_connect_alt_') && friendlyName.includes('bosch') && friendlyName.includes(subtype);
  }
}
