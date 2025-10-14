import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherOptionsFeatureStyles } from "./bosch-dishwasher-options.styles";
import "./bosch-dishwasher-options-editor";

@customElement("bosch-dishwasher-options-feature")
export class BoschDishwasherOptionsFeature extends LitElement {
    @state() _hass?: HomeAssistant;
    @property({ attribute: false }) config?: any;
    @property({ attribute: false }) stateObj?: HassEntity;

    @state() 
    private _config?: BoschDishwasherOptionsFeatureConfig;

    @property({ attribute: false })
    public context?: LovelaceCardFeatureContext;

    private static entities: Map<string, BoschEntity> = new Map([
        ["remaining_program_time_is_estimated", { type: "binary_sensor", suffix: "bsh_common_option_remainingprogramtimeisestimated" }],
        ["door_state", { type: "binary_sensor", suffix: "bsh_common_status_doorstate" }],
        ["remote_control_active", { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolactive" }],
        ["remote_control_start_allowed", { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolstartallowed" }],
        ["connected", { type: "binary_sensor", suffix: "connected" }],

        ["start_pause", { type: "button", suffix: "start_pause" }],
        ["stop", { type: "button", suffix: "stop" }],

        ["start_in_relative", { type: "select", suffix: "bsh_common_option_startinrelative" }],
        ["programs", { type: "select", suffix: "programs" }],

        ["active_program", { type: "sensor", suffix: "active_program" }],
        ["base_program", { type: "sensor", suffix: "bsh_common_option_baseprogram" }],
        ["program_name", { type: "sensor", suffix: "bsh_common_option_programname" }],
        ["program_progress", { type: "sensor", suffix: "bsh_common_option_programprogress" }],
        ["remaining_program_time", { type: "sensor", suffix: "bsh_common_option_remainingprogramtime" }],
        ["operation_state", { type: "sensor", suffix: "bsh_common_status_operationstate" }],
        ["selected_program", { type: "sensor", suffix: "selected_program" }],

        ["power_state", { type: "switch", suffix: "bsh_common_setting_powerstate" }],
        ["extra_dry", { type: "switch", suffix: "dishcare_dishwasher_option_extradry" }],
        ["hygiene_plus", { type: "switch", suffix: "dishcare_dishwasher_option_hygieneplus" }],
        ["intensive_zone", { type: "switch", suffix: "dishcare_dishwasher_option_intensivzone" }],
        ["silence_on_demand", { type: "switch", suffix: "dishcare_dishwasher_option_silenceondemand" }],
        ["vario_speed_plus", { type: "switch", suffix: "dishcare_dishwasher_option_variospeedplus" }],
    ]);    

    switches: HassEntities = {};
    private _entityPrefix?: string;

    setConfig(config: BoschDishwasherOptionsFeatureConfig) {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
    }

    set hass(hass: HomeAssistant | undefined) {
        this._hass = hass;
        if (this.config && this.config.entity) {
            this.stateObj = hass?.states?.[this.config.entity];
            const entityPrefix = this.stateObj?.attributes?.common_prefix;
            if (entityPrefix) {
                this.switches = Object.values(hass?.states || {}).reduce((acc, entity) => {
                    if (entity.entity_id.startsWith(`switch.${entityPrefix}_`)) {
                    acc[entity.entity_id] = entity;
                    }
                    return acc;
                }, {} as HassEntities);
            } else {
                this.switches = {};
            }

        }
    }

    get hass(): HomeAssistant | undefined {
        return this._hass;
    }


    /**
     * Programs
     * - Eco 50°C: Dishcare.Dishwasher.Program.Eco50
     * - Auto 45-65°C: Dishcare.Dishwasher.Program.Auto2
     * - Intensive 70°C: Dishcare.Dishwasher.Program.Intensiv70
     * - Dishcare.Dishwasher.Program.Kurz60
     * - Quick 45°C: Dishcare.Dishwasher.Program.Quick45
     * - Glass 40°C: Dishcare.Dishwasher.Program.Glas40
     * - Night Wash 50°C: Dishcare.Dishwasher.Program.NightWash
     * - Machine Care: Dishcare.Dishwasher.Program.MachineCare
     * Options:
     * - Delayed Start
     * - Remote Start
     * - Extra Dry: switch.*_dishcare_dishwasher_option_extradry
     * - Intensive Zone: switch.*_dishcare_dishwasher_option_intensivzone
     * - HygienePlus: switch.*_dishcare_dishwasher_option_hygieneplus
     * - PerfectSpeed+: switch.*_dishcare_dishwasher_option_variospeedplus
     */
    render(): TemplateResult {
        if (!this.config || !this.hass || !this.stateObj || !BoschDishwasherOptionsFeature.isSupported(this.hass, this.context)) {
            return html`
                <div class="toners">
                    <div>Unsupported feature</div>
                </div>
            `;
        }

        return html``;
    }

    getEntity(type: string, suffix: string): string {
        return `${type}.${this.entityPrefix}_${suffix}`;
    }

    private get entityPrefix(): string | undefined {
        if (this._entityPrefix === undefined) {
            if (this.context?.entity_id) {
                this._entityPrefix = this.context.entity_id.split(".")[1]?.split("_").slice(0, 2).join("_")
                console.log("Derived entityPrefix: ", this._entityPrefix);
            } else {
                console.warn("Cannot derive entityPrefix: context.entity_id is undefined");
            }
        }
        return this._entityPrefix;
    }

    /**
     * Check if the given entity supports the Bosch Dishwasher Programs feature.
     * The check is based on the entity's device_class and friendly_name attributes.
     * @param hass HomeAssistant instance
     * @param context LovelaceCardFeatureContext containing the entity_id to check  
     * @returns Boolean indicating whether the given entity supports the Bosch Dishwasher Programs feature.
     */
    public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
        console.log("Checking support for Bosch Dishwasher Programs feature with context:", context);

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
            type: 'bosch-dishwasher-options-feature'
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
