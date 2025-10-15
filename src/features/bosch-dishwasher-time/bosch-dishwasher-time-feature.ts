import { HomeAssistant } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, html, TemplateResult, nothing, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators";
import { EBoschEntity, boschFeatureEntitiesMap, boschEntitiesMap } from "../../const/BoschEntities";
import { EBoschFeature } from "../../const/BoschFeatures";
import { BoschDishwasherTimeFeatureStyles } from "./bosch-dishwasher-time-styles";

@customElement("bosch-dishwasher-time-feature")
class BoschDishwasherTimeFeature extends LitElement implements LovelaceCardFeature {
    @property({ attribute: false })
    public hass?: HomeAssistant;

    @property({ attribute: false })
    public context?: LovelaceCardFeatureContext;

    @state()
    private _config?: BoschDishwasherTimeFeatureConfig;

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
            const feature = EBoschFeature.dishwasher_programs;
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

    public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
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
        if (!this._config || !this.hass || !this.context || !BoschDishwasherTimeFeature.isSupported(this.hass, this.context)) {
            return nothing;
        }

        return html`
            <div class="bosh-dishwasher-time-feature">
                <ha-control-button .disabled=${!this.online} title=${this.running ? "Pause" : "Start"} @click=${this.action('start_pause')}>
                    <ha-icon icon=${this.running ? "mdi:pause" : "mdi:play"}></ha-icon>
                </ha-control-button>
                <ha-control-button .disabled=${!this.online} title="Stop"} @click=${this.action('stop')}>
                    <ha-icon icon="mdi:stop"}></ha-icon>
                </ha-control-button>
                <div class="time-graph">
                    <div class="background">
                        <div class="level" style="width: ${this.getLinkedEntity(EBoschEntity.program_progress)?.state ?? "0"}%;"></div>
                    </div>
                </div>
                <div class="time-remaining">${this.getLinkedEntity(EBoschEntity.remaining_program_time)?.state ?? "0:00"}</div>
            </div>
        `;
    }

    private action(action: string): void {
        var entity = undefined;
        switch(action) {
            case "start_pause":
                entity = this.getLinkedEntity(EBoschEntity.start_pause);
                break;
            case "stop":
                entity = this.getLinkedEntity(EBoschEntity.stop);
                break;
        }
        if (entity){
            this.hass.callService("button", "press", { entity_id: "button.xyz" });
        }
    }

    private getLinkedEntity(entity: EBoschEntity): HassEntity | undefined {
        if (this.entities.has(entity) && this._config && this.entityPrefix) {
            const entityDef = this.entities.get(entity)!;
            const entityId = `${entityDef.type}.${this.entityPrefix}_${entityDef.suffix}`;
            return this.hass?.states?.[entityId] || undefined;   
        } 
        console.error(`Entity for ${name} not found (prefix: ${this.entityPrefix})`);  
        return undefined;  
    }    

    public static getStubConfig(): BoschDishwasherTimeFeatureConfig {
        return {
            type: 'custom:bosch-dishwasher-time-feature',
        };
    }

    public static get styles(): CSSResultGroup {
        return BoschDishwasherTimeFeatureStyles
    }

    public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
        const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
        if (!stateObj) return false;

        const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
        const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";

        return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
    };    
}

// Register the feature in the global customCardFeatures array
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-time-feature",
    name: "Bosch Dishwasher Time Panel",
    configurable: true
});