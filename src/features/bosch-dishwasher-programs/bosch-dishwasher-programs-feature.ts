import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherProgramsFeatureStyles } from "./bosch-dishwasher-programs.styles";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import "./bosch-dishwasher-programs-editor";

const supportsBoschDishwasherProgramsFeature = (stateObj: HassEntity): boolean => {
    if (!stateObj?.attributes) return false;

    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
    const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";

    return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
};

@customElement("bosch-dishwasher-programs-feature")
class BoschDishwasherProgramsFeature extends LitElement {
    @state() _hass?: HomeAssistant;
    @property({ attribute: false }) config?: any;
    @property({ attribute: false }) stateObj?: HassEntity;

    static iconCache = new Map<string, string>();

    switches: HassEntities = {};

    setConfig(config: BoschDishwasherProgramsFeatureConfig) {
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

    /**
     * Programs
     * - Eco 50°C: Dishcare.Dishwasher.Program.Eco50
     * - Auto 45-65°C: Dishcare.Dishwasher.Program.Auto2
     * - Intensive 70°C: Dishcare.Dishwasher.Program.Intensiv70
     * - Express 60°C Dishcare.Dishwasher.Program.Kurz60
     * - Quick 45°C: Dishcare.Dishwasher.Program.Quick45
     * - Glass 40°C: Dishcare.Dishwasher.Program.Glas40
     * - Silent 50°C: Dishcare.Dishwasher.Program.NightWash
     * - Machine Care: Dishcare.Dishwasher.Program.MachineCare
     */
    render(): TemplateResult {
        if (!this.config || !this.hass || !this.stateObj || !supportsBoschDishwasherProgramsFeature(this.stateObj)) {
            return html`
                <div class="toners">
                    <div>Unsupported feature</div>
                </div>
            `;
        }

        const showMachineCare = this.getBoolConfigVal("show_machine_care", true);
        return html`
            <div class="switches">
                ${this.getHaIconButton("Eco 50°C", "Eco_50", "Dishcare.Dishwasher.Program.Eco50")}
                ${this.getHaIconButton("Auto 45-65°C", "Auto_45-65", "Dishcare.Dishwasher.Program.Auto2")}
                ${this.getHaIconButton("Intensive 70°C", "Intensive_70", "Dishcare.Dishwasher.Program.Intensiv70")}
                ${this.getHaIconButton("Express 60°C", "Express_60", "Dishcare.Dishwasher.Program.Kurz60")}
                ${this.getHaIconButton("Quick 45°C", "Express_45", "Dishcare.Dishwasher.Program.Quick45")}
                ${this.getHaIconButton("Glass 40°C", "Glass_40", "Dishcare.Dishwasher.Program.Glas40")}
                ${this.getHaIconButton("Silent 50°C", "Silent_50", "Dishcare.Dishwasher.Program.NightWash")}
                ${showMachineCare ? this.getHaIconButton("Machine Care", "MachineCare", "Dishcare.Dishwasher.Program.MachineCare") : nothing}
            </div>
        `;
    }

    getHaIconButton(label: string, iconName: string, programName: string): TemplateResult {
        const iconSuffix = this.getBoolConfigVal("icons_with_text", false) ? "_text" : "";
        const svgPromise = BoschDishwasherProgramsFeature.getInlineSVG(iconName, iconSuffix).then(svg => unsafeHTML(svg));
        return html`
            <ha-icon-button .label=${label} title=${label} @click=${() => this.setProgram(programName)}>
            ${until(svgPromise, html`<span>⏳</span>`)}
            </ha-icon-button>
        `;
    }

    private getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    
    private setProgram(programName: string) {
        console.log("Selectiong", programName);
        // this.hass?.callService("switch", "toggle", { entity_id: entityId });
    }

    private static async getInlineSVG(iconName: string, iconSuffix: string): Promise<string> {
        if (!this.iconCache.has(iconName)) {
            const iconPath = `/hacsfiles/bosch-appliance-features/${iconName}${iconSuffix}.svg`;
            console.log("Loading icon:", iconPath);
            const res = await fetch(iconPath);
            const svgText = (await res.text())
                .replace(/(["'\s:])#000000(["'\s;>])/gi, '$1currentColor$2')
                .replace(/(["'\s:])#000(["'\s;>])/gi, '$1currentColor$2')

            this.iconCache.set(iconName, svgText);
        }
        return this.iconCache.get(iconName)!;
    }    

    static get properties(): { [key: string]: any } {
        return {
            hass: { type: Object },
            config: { type: Object },
            stateObj: { type: Object },
        };
    }

    static getConfigElement(): HTMLElement {
        return document.createElement('bosch-dishwasher-programs-editor');
    }

    static getStubConfig(): any {
        return {
            type: 'custom:bosch-dishwasher-programs-feature'
        };
    }

    static get styles(): CSSResultGroup {
        return BoschDishwasherProgramsFeatureStyles
    }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-programs-feature",
    name: "Bosch Dishwasher Programs Panel",
    supported: supportsBoschDishwasherProgramsFeature,
    configurable: true,
});

