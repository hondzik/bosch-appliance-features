import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherOptionsFeatureStyles } from "./bosch-dishwasher-options-styles";
import "./bosch-dishwasher-options-editor";
import { boschEntitiesMap, boschFeatureEntitiesMap, EBoschEntity } from "../../const/BoschEntities";
import { EBoschFeature } from "../../const/BoschFeatures";

@customElement("bosch-dishwasher-options-feature")
export class BoschDishwasherOptionsFeature extends LitElement implements LovelaceCardFeature {

    @property({ attribute: false })
    public hass?: HomeAssistant;

    @property({ attribute: false })
    public context?: LovelaceCardFeatureContext;

    @state() 
    private _config?: BoschDishwasherProgramsFeatureConfig;

    private static iconCache = new Map<string, string>();

    private _entityPrefix?: string;
    private get entityPrefix(): string | undefined {
        if (this._entityPrefix === undefined) {
            if (this.context?.entity_id) {
                this._entityPrefix = this.context.entity_id.split(".")[1]?.split("_").slice(0, 2).join("_")
            } else {
                console.error("Cannot derive entityPrefix: context.entity_id is undefined");
            }
        }
        return this._entityPrefix;
    }

    private _entities: Map<EBoschEntity, BoschEntity> = new Map();

    private get entities(): Map<EBoschEntity, BoschEntity> {
        if (this._entities.size === 0) {
            const feature = EBoschFeature.dishwasher_options;
            const entityEnums = boschFeatureEntitiesMap.get(feature) ?? [];

            this._entities = entityEnums.reduce((mapAcc, enumKey) => {
                const entity = boschEntitiesMap.get(enumKey);
                if (entity) {
                    mapAcc.set(enumKey, entity);
                }
                return mapAcc;
            }, new Map<EBoschEntity, BoschEntity>());

            if (this._entities.size === 0) {
                console.error(`No entities associated with feature ${feature} found`);
            }
        }

        return this._entities;
    }

    private _online?: boolean;

    private get online(): boolean {
        if (this._online === undefined) {
            // TODO: check if appliance is online, otherwise return false
            this._online = true;
        }
        return this._online;
    }

    private set online(val: boolean | undefined) {
        this._online = val
    }

    private _running?: boolean;

    private get running(): boolean {
        if (this._running === undefined) {
            // TODO: check if appliance is running, otherwise return false
            this._running = false;
        }
        return this._running;
    }

    private set running(val: boolean | undefined) {
        this._running = val
    }

    public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
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

        var linkedEntityChanged = false;
        for (const entity of this.entities.values()) {
            const entityId = `${entity.type}.${this.entityPrefix}_${entity.suffix}`;
            if (oldHass.states[entityId] !== this.hass.states[entityId]) {
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

    protected render(): TemplateResult | typeof nothing {
        if (!this._config || !this.hass || !this.context || !BoschDishwasherOptionsFeature.isSupported(this.hass, this.context)) {
            return nothing;
        }

        return html`<div class="toners"><div>Not implemented</div></div>`;
    }

    public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
        const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
        if (!stateObj) return false;

        const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
        const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";

        return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
    };

    static get properties(): { [key: string]: any } {
        return {
            hass: { type: Object },
            config: { type: Object },
            stateObj: { type: Object },
        };
    }

    static getConfigElement(): HTMLElement {
        return document.createElement('bosch-dishwasher-options-editor');
    }

    static getStubConfig(): any {
        return {
            type: 'custom:bosch-dishwasher-options-feature'
        };
    }

    static get styles(): CSSResultGroup {
        return BoschDishwasherOptionsFeatureStyles
    }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-options-feature",
    name: "Bosch Dishwasher Program Options Panel",
    configurable: true,
});
