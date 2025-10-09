import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators";
import type { HomeAssistant } from "custom-card-helpers";
import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import { BoschDishwasherProgramsFeatureStyles } from "./bosch-dishwasher-programs.styles";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { version } from "../../../package.json";
import "./bosch-dishwasher-programs-editor";


/**
 * Check if the given entity supports the Bosch Dishwasher Programs feature.
 * The check is based on the entity's device_class and friendly_name attributes.
 * @param stateObj HassEntity
 * @returns Boolean indicating whether the given entity supports the Bosch Dishwasher Programs feature.
 */
const supportsBoschDishwasherProgramsFeature = (stateObj: HassEntity): boolean => {
    if (!stateObj?.attributes) return false;

    const deviceClass = stateObj.attributes.device_class?.toLowerCase() || "";
    const friendlyName = stateObj.attributes.friendly_name?.toLowerCase() || "";

    return deviceClass.startsWith("home_connect_alt_") && friendlyName.includes("bosch") && friendlyName.includes("dishwasher");
};


@customElement("bosch-dishwasher-programs-feature")
class BoschDishwasherProgramsFeature extends LitElement {
    @state() _hass?: HomeAssistant;
    @property({ attribute: false }) config?: BoschDishwasherProgramsFeatureConfig;
    @property({ attribute: false }) stateObj?: HassEntity;

    static iconCache = new Map<string, string>();

    static programs: BoschDishwasherProgram[] = [
        { name: "Eco 50°C", icon: "Eco_50", program: "Dishcare.Dishwasher.Program.Eco50" },
        { name: "Auto 45-65°C", icon: "Auto_45-65", program: "Dishcare.Dishwasher.Program.Auto2" },
        { name: "Intensive 70°C", icon: "Intensive_70", program: "Dishcare.Dishwasher.Program.Intensiv70" },
        { name: "Express 60°C", icon: "Express_60", program: "Dishcare.Dishwasher.Program.Kurz60" },
        { name: "Quick 45°C", icon: "Express_45", program: "Dishcare.Dishwasher.Program.Quick45" },
        { name: "Glass 40°C", icon: "Glass_40", program: "Dishcare.Dishwasher.Program.Glas40" },
        { name: "Silent 50°C", icon: "Silent_50", program: "Dishcare.Dishwasher.Program.NightWash" },
        { name: "Machine Care", icon: "MachineCare", program: "Dishcare.Dishwasher.Program.MachineCare" }
    ];
    
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


    render(): TemplateResult {
        if (!this.config || !this.hass || !this.stateObj || !supportsBoschDishwasherProgramsFeature(this.stateObj)) {
            return html`<div>Unsupported card feature</div>`;
        }

        // Filter programs based on config
        // expect config keys like "show_eco_50", "show_auto_45_65", etc.
        // if key is missing, default to true (show the program)
        // keys are derived from program names by lowercasing and replacing spaces and special chars with underscores
        const filteredPrograms = BoschDishwasherProgramsFeature.programs.filter(
            p => this.getBoolConfigVal("show_"+p.name.toLowerCase().replace(/-/g, "_"), true)
        );

        return this.config.show_as_button_bar === true 
            ? html`<div class="programs-list">${filteredPrograms.map(p => this.getHaControlButton(p))}</div>`
            : html`<div class="switches">${filteredPrograms.map(p => this.getHaIconButton(p))}</div>`;
    }


    /**
     * Renders a ha-icon-button for the given program.
     * @param program BoschDishwasherProgram
     * @returns TemplateResult containing a ha-icon-button with the program icon and name.
     */
    private getHaIconButton(program: BoschDishwasherProgram): TemplateResult {
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        return html`
            <ha-icon-button .label=${program.name} title=${program.name} @click=${() => this.setProgram(program.program)}>
                ${until(svg, html`<span>⏳</span>`)}
            </ha-icon-button>
        `;
    }


    /**
     * Renders a button for the given program.
     * @param program BoschDishwasherProgram
     * @returns TemplateResult containing a button with the program icon and name.
     * @obsolete Use getHaControlButton() instead (for consistency with other features).
     */
    private renderProgramButton(program: BoschDishwasherProgram): TemplateResult {
        const isActive = this.isProgramActive(program);
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        return html`
            <button class="program-btn ${isActive ? "active" : ""}" title=${program.name} @click=${() => this.setProgram(program.program)}>
                ${until(svg, html`<span>⏳</span>`)}
            </button>
        `;
    }


    private getHaControlButton(program: BoschDishwasherProgram): TemplateResult {
        const isActive = this.isProgramActive(program);
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        return html`
            <ha-control-button .value=${program.program} ?active=${isActive} @click=${() => this.setProgram(program.program)}>
                <div class="icon-wrapper${isActive ? " active" : ""}">${until(svg, html`<span>⏳</span>`)}</div>
                <span class="label">${program.name}</span>
            </ha-control-button>
        `;
    }


    /**
     * Checks if the given program is currently active (selected) on the dishwasher.
     * @param program BoschDishwasherProgram
     * @returns True if the given program is currently active (selected) on the dishwasher.
     */
    private isProgramActive(program: BoschDishwasherProgram): boolean {
        return this.selectedProgram === program.program;
    }


    private get selectedProgram(): string | null {
        return this.stateObj?.attributes?.selected_program || null;
    }


    /**
     * Retrieves the inline SVG for the given program icon.
     * Takes into account the "icons_with_text" configuration option.
     * @param program BoschDishwasherProgram
     * @returns Promise<string> containing the SVG markup.
     */
    private getIconForProgram(program: BoschDishwasherProgram): Promise<string> {
        const iconSuffix = this.getBoolConfigVal("icons_with_text", false) ? "_text" : "";
        return BoschDishwasherProgramsFeature.getInlineSVG(`${program.icon}${iconSuffix}`);
    }


    /**
     * Retrieves a boolean configuration value, with a default if not set.
     * @param key Config key to look for
     * @param defaultValue Default value if key is not set
     * @returns Boolean value of the config key, or defaultValue if not set
     */
    private getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }

    
    private setProgram(programName: string) {
        console.log("Selectiong", programName);
        // this.hass?.callService("switch", "toggle", { entity_id: entityId });
    }


    /**
     * Retrieves the inline SVG for the given icon name, using a cache to avoid redundant fetches.
     * @param iconName Name of the icon (without path and .svg extension)
     * @returns Promise<string> containing the inline SVG markup
     */
    private static async getInlineSVG(iconName: string): Promise<string> {
        if (!this.iconCache.has(iconName)) {
            const iconPath = `/hacsfiles/bosch-appliance-features/${iconName}.svg?v=${version}`;
            console.log("Loading icon:", iconPath);
            const res = await fetch(iconPath);
            const svgText = (await res.text())
                .replace(/(["'\s:])#000000(["'\s;>])/gi, '$1currentColor$2')
                .replace(/(["'\s:])#000(["'\s;>])/gi, '$1currentColor$2')

            this.iconCache.set(iconName, svgText);
        }
        return this.iconCache.get(iconName)!;
    }


    /**
     * Implements the LitElement method.
     * Returns component properties (observed attributes).
     */
    static get properties(): { [key: string]: any } {
        return {
            hass: { type: Object },
            config: { type: Object },
            stateObj: { type: Object },
        };
    }


    /**
     * Implements the CustomCardFeature interface method.
     * @returns HTMLElement for configuring this feature (used in Lovelace UI editor).
     */
    static getConfigElement(): HTMLElement {
        return document.createElement('bosch-dishwasher-programs-editor');
    }


    /**
     * Implements the CustomCardFeature interface method.
     * @returns Default configuration for this feature (used in Lovelace UI editor).
     */
    static getStubConfig(): any {
        return {
            type: 'custom:bosch-dishwasher-programs-feature'
        };
    }


    /**
     * Component styles (CSS-in-JS).
     */
    static get styles(): CSSResultGroup {
        return BoschDishwasherProgramsFeatureStyles
    }
}


// Register the feature in the global customCardFeatures array
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "bosch-dishwasher-programs-feature",
    name: "Bosch Dishwasher Programs Panel",
    supported: supportsBoschDishwasherProgramsFeature,
    configurable: true,
});

