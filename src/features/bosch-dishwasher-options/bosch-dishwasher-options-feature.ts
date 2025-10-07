import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherOptionsFeatureStyles } from "./bosch-dishwasher-options.styles";
import "./bosch-dishwasher-options-editor";

const supportsBoschDishwasherOptionsFeature = (stateObj: HassEntity): boolean => {
    if (!stateObj?.attributes) return false;

    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
    const friendlyName = stateObj.attributes.friendly_name.toLowerCase() || "";

    return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("dishwasher") && friendlyName.includes("dishwasher");
};

@customElement("bosch-dishwasher-options-feature")
class BoschDishwasherOptionsFeature extends LitElement {
    @state() _hass?: HomeAssistant;
    @property({ attribute: false }) config?: any;
    @property({ attribute: false }) stateObj?: HassEntity;

    switches: HassEntities = {};

    setConfig(config: BoschDishwasherOptionsFeatureConfig) {
    // If entity_prefix is not set, try to derive it from the entity name
    if (config.entity_prefix === undefined && config.entity) {
        const entityName = config.entity.split(".")[1];
        config.entity_prefix = entityName.split("_").slice(0, -2).join("_");
    }
    this.config = config;
    if (config && config.entity) {
        this.stateObj = this.hass?.states?.[config.entity];
    } else {
        this.stateObj = undefined;
    }
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


    render(): TemplateResult {
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
    if (!this.config || !this.hass || !this.stateObj || !supportsBoschDishwasherOptionsFeature(this.stateObj)) {
        return html`
        <div class="toners">
            <div>Unsupported feature</div>
        </div>
        `;
    }

    return html``;
    }

    getEntity(type: string, suffix: string): string {
    return `${type}.${this.config?.entity_prefix}_${suffix}`;
    }

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
    supported: supportsBoschDishwasherOptionsFeature,
    configurable: true,
});
