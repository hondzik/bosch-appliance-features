import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherProgramsFeatureStyles } from "./bosch-dishwasher-programs.styles";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { version } from "../../../package.json";
import "./bosch-dishwasher-programs-editor";


@customElement("bosch-dishwasher-programs-feature")
class BoschDishwasherProgramsFeature extends LitElement implements LovelaceCardFeature {

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

    private set program(value: string) {
        const entityId = this.getLinkedEntity(EBoschEntity.programs)?.entity_id;
        console.log(`Setting ${entityId} to ${value}`)
        if (entityId && this.hass) {
            this.hass.callService("select", "select_option", { entity_id: entityId, option: value });
        } else {
            console.error(`Cannot set ${entityId} to ${value}`)
        }
    }

    private _programs: BoschDishwasherProgram[];
    private get programs(): BoschDishwasherProgram[] {
        if (this._programs.length == 0) {
            const modelName = "SMV8YCX01E";
            const model = (Object.values(EBoschModels).includes(modelName as EBoschModels))
                ? modelName as EBoschModels
                : undefined;
            if (!model) {
                console.error(`Unsupported dishwasher model ${modelName}`);
                return [];
            }
            this._programs = (boschDishwasherModelProgramsMap.get(model) || []).map(p => boschDishwasherAllProgramsMap.get(p)!).filter(Boolean);           
            if (this._programs.length == 0) {
                console.error(`No programs associated with model ${modelName} found`);
            }
        }
        return this._programs;
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

    public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
        this._programs = [];

        this.classList.toggle("buttons", this._config.show_as_button_bar === true);
        this.classList.toggle("icons", this._config.show_as_button_bar !== true);
    }

    private get program(): string | null {
        const program = this.getLinkedEntity(EBoschEntity.programs);
        return program ? program.state : null;
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
        if (!this._config || !this.hass || !this.context || !BoschDishwasherProgramsFeature.isSupported(this.hass, this.context)) {
            return nothing;
        }

        const filteredPrograms = this.programs.filter(
            p => this.getBoolConfigVal("show_" + p.icon.toLowerCase().replace(/-/g, "_"), true)
        );
     
        return html`<ha-control-button-group>${filteredPrograms.map(p => this.renderHaControlButton(p))}</ha-control-button-group>`;
    }


    private renderHaControlButton(program: BoschDishwasherProgram): TemplateResult {
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        const disabled = !this.online || this.running;
        return html`
            <ha-control-button 
                .value=${program.program}
                .disabled=${disabled}
                class="${program.program == this.program ? 'active' : ''}"
                title=${program.name} 
                @click=${(e: CustomEvent<{ value: string }>) => this.changeProgram(e)}
            >
                <div class="icon-wrapper">${until(svg, html`<ha-spinner size="small"></ha-spinner>`)}</div>
            </ha-control-button>
        `;
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



    private getIconForProgram(program: BoschDishwasherProgram): Promise<string> {
        const iconSuffix = this.getBoolConfigVal("icons_with_text", false) ? "_text" : "";
        return BoschDishwasherProgramsFeature.getInlineSVG(`${program.icon}${iconSuffix}`);
    }


    private getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return (this._config && this._config[key] !== undefined ) ? !!this._config[key] : defaultValue;
    }

    
    private changeProgram(e: Event) {
        const target = e.currentTarget as any;
        const value = target?.value;
        if (!value) return;
        this.program = value;
    }


    private static async getInlineSVG(iconName: string): Promise<string> {
        if (!this.iconCache.has(iconName)) {
            const res = await fetch(`/hacsfiles/bosch-appliance-features/${iconName}.svg?v=${version}`);
            const svgText = (await res.text()).replace(/#000000|#000/g, 'currentColor')
            this.iconCache.set(iconName, svgText);
        }
        return this.iconCache.get(iconName)!;
    }


    static get properties(): { [key: string]: any } {
        return {
            hass: { type: Object },
            config: { type: Object },
            context: { type: Object },
        };
    }


    public static getConfigElement(): HTMLElement {
        return document.createElement('bosch-dishwasher-programs-editor');
    }


    public static getStubConfig(): BoschDishwasherProgramsFeatureConfig {
        return {
            type: 'custom:bosch-dishwasher-programs-feature',
            icons_with_text: false, 
            show_as_button_bar: true,
            show_machinecare: true
        };
    }


    public static get styles(): CSSResultGroup {
        return BoschDishwasherProgramsFeatureStyles
    }


    public static getGridOptions() {
        return {
            rows: 1,
            columns: 12,
            min_rows: 12,
        };
    }


    public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
        const stateObj = context.entity_id ? hass.states[context.entity_id] : undefined;
        if (!stateObj) return false;

        const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
        const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";

        return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
    };
}


window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-programs-feature",
    name: "Bosch Dishwasher Programs Panel",
    configurable: true
});
