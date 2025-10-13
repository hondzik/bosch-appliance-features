import { HomeAssistant } from "custom-card-helpers";
import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";

@customElement("bosch-dishwasher-time-feature")
class BoschDishwasherTimeFeature extends LitElement implements LovelaceCardFeature {
    @property({ attribute: false })
    public hass?: HomeAssistant;

    @property({ attribute: false })
    public context?: LovelaceCardFeatureContext;

    @state() 
    private _config?: BoschDishwasherTimeFeatureConfig;

    public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
    }

    protected render(): TemplateResult | typeof nothing {
        if (!this._config || !this.hass || !this.context || !BoschDishwasherTimeFeature.isSupported(this.hass, this.context)) {
            return nothing;
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