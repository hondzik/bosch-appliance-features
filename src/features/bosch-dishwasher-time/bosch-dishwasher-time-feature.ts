import { HomeAssistant } from "custom-card-helpers";
import { LitElement, html, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";

@customElement("bosch-dishwasher-time-feature")
class BoschDishwasherTimeFeature extends LitElement implements LovelaceCardFeature {
    @property({ attribute: false })
    public hass?: HomeAssistant;

    @property({ attribute: false })
    public context?: LovelaceCardFeatureContext;

    @property({ attribute: false })
    private config?: BoschDishwasherTimeFeatureConfig;

    private static entities: Map<string, BoschEntity> = new Map([
        ["remaining_program_time_is_estimated", { type: "binary_sensor", suffix: "bsh_common_option_remainingprogramtimeisestimated" }],
        ["remote_control_active", { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolactive" }],
        ["remote_control_start_allowed", { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolstartallowed" }],
        ["connected", { type: "binary_sensor", suffix: "connected" }],

        ["start_pause", { type: "button", suffix: "start_pause" }],
        ["stop", { type: "button", suffix: "stop" }],

        ["start_in_relative", { type: "select", suffix: "bsh_common_option_startinrelative" }],
    ]);     

    public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this.config = config;
    }

    protected render(): TemplateResult | typeof nothing {
        console.log("Rendering Bosch Dishwasher Time feature with config:", this.config, "and context:", this.context);
        if (!this.config || !this.hass || !this.context || !BoschDishwasherTimeFeature.isSupported(this.hass, this.context)) {
            html`<div>something is missing</div>`;
        }
        return html`<div>TIME</div>`;
    }

    public static getStubConfig(): BoschDishwasherTimeFeatureConfig {
        return {
            type: 'custom:bosch-dishwasher-time-feature',
        };
    }

    /**
     * Check if the given entity supports the Bosch Dishwasher Programs feature.
     * The check is based on the entity's device_class and friendly_name attributes.
     * @param hass HomeAssistant instance
     * @param context LovelaceCardFeatureContext containing the entity_id to check  
     * @returns Boolean indicating whether the given entity supports the Bosch Dishwasher Programs feature.
     */
    public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
        console.log("Checking support for Bosch Dishwasher Times feature with context:", context);

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