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

    static entities: Map<string, BoschEntities> = new Map([
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
    
    setConfig(config: any) {
        console.log("setConfig:", config);
        this.config = config;
        this.setStateAndPrefix();
        this.classList.toggle("buttons", this.config.show_as_button_bar === true);
        this.classList.toggle("icons", this.config.show_as_button_bar !== true);
    }


    set hass(hass: HomeAssistant | undefined) {
        console.log("set hass:");
        this._hass = hass;
        this.setStateAndPrefix();
    }


    private setStateAndPrefix() {
        console.log("setStateAndPrefix:"); 
        if (this.config) {
            const entity = this.config?.entity || this.getParentEntity();
            console.log("Setting stateObj for", entity);
            this.stateObj = this._hass?.states?.[entity];
            // If entity_prefix is not set, derive it from the entity ID    
            if (this.config.entity_prefix === undefined) {
                this.config.entity_prefix = entity.split(".")[1].split("_").slice(0, 2).join("_");
            }
        } else {
            this.stateObj = undefined;
        }
    }

    private getParentEntity(): string | undefined {
        const tile = this.closest("hui-tile-card") as TileWithConfig | null;// || this.closest("ha-tile");
        const entityId = tile?.config?.entity;
        return entityId;
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
            ? html`<ha-control-button-group direction="row" .value=${this.selectedProgram} @value-changed=${this.setProgram}>${filteredPrograms.map(p => this.getHaControlButton(p))}</<ha-control-button-group>`
            : html`<div>${filteredPrograms.map(p => this.getHaIconButton(p))}</div>`;
    }


    /**
     * Renders a ha-icon-button for the given program.
     * @param program BoschDishwasherProgram
     * @returns TemplateResult containing a ha-icon-button with the program icon and name.
     */
    private getHaIconButton(program: BoschDishwasherProgram): TemplateResult {
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        return html`
            <ha-icon-button .label=${program.name} title=${program.name} .value=${program.program} @click=${() => this.setProgram}>
                ${until(svg, html`<span>⏳</span>`)}
            </ha-icon-button>
        `;
    }


    /**
     * Renders a button for the given program.
     * @param program BoschDishwasherProgram
     * @returns TemplateResult containing a button with the program icon
     */
    private getHaControlButton(program: BoschDishwasherProgram): TemplateResult {
        const svg = this.getIconForProgram(program).then(svg => unsafeHTML(svg));
        /*
        TODO: 
        <ha-tooltip position="top" .text=${tooltipText}>
            <ha-control-button .value=${program.program} title=${program.name} @click=${() => this.setProgram}>
          <div slot="content">
                <strong>${program.name}</strong><br />
                <small>${program.description}</small>
            </div>
        </div>
        */
        return html`
            <ha-control-button .value=${program.program} title=${program.name}>
                <div class="icon-wrapper">${until(svg, html`<span>⏳</span>`)}</div>
            </ha-control-button>
        `;
    }


    private getLinkedEntity(name: string): HassEntity | undefined {
        if (BoschDishwasherProgramsFeature.entities.has(name) && this.config && this.config.entity_prefix) {
            const entity = BoschDishwasherProgramsFeature.entities.get(name)!;
            const entityId = `${entity.type}.${this.config.entity_prefix}_${entity.suffix}`;
            return this.hass?.states?.[entityId];   
        } 
        console.error(`Entity for ${name} not found (prefix: ${this.config?.entity_prefix})`);  
        return undefined;  
    }


    private get selectedProgram(): string | null {
        if (this.getLinkedEntity("selected_program")) {
            console.log("Selected program:", this.getLinkedEntity("selected_program")?.state);
            return this.getLinkedEntity("selected_program")?.state || null;
        }
        return null;
    }

    private set selectedProgram(value: string) {
        const entity = this.getLinkedEntity("selected_program");
        if (entity && this.hass) {
            console.log("Setting selected program to", value);
            this.hass.callService("select", "select_option", { entity_id: entity.entity_id, option: value });
        }
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

    
    private setProgram(e: CustomEvent<{ value: string }>) {
        console.log("Selectiong", e.detail.value);
        this.selectedProgram = e.detail.value;
    }


    /**
     * Retrieves the inline SVG for the given icon name, using a cache to avoid redundant fetches.
     * @param iconName Name of the icon (without path and .svg extension)
     * @returns Promise<string> containing the inline SVG markup
     */
    private static async getInlineSVG(iconName: string): Promise<string> {
        if (!this.iconCache.has(iconName)) {
            const res = await fetch(`/hacsfiles/bosch-appliance-features/${iconName}.svg?v=${version}`);
            const svgText = (await res.text()).replace(/#000000|#000/g, 'currentColor')
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

