import type { HomeAssistant } from "custom-card-helpers";
import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import setupCustomLocalize from "../../localize";
import { BoschDishwasherProgramsEditorStyles } from "./bosch-dishwasher-programs.styles";

@customElement("bosch-dishwasher-programs-editor")
export class BoschDishwasherProgramsEditor extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ type: Object }) config: any = {};

    setConfig(config: any) {
        this.config = { ...config };
    }

    render(): TemplateResult {
        const customLocalize = setupCustomLocalize(this.hass);
        return html`
            <ha-settings-row>
                <span slot="heading" data-for="icons_with_text">
                    ${customLocalize("dishwasher.programs.editor.icons_with_text.title")}
                </span>
                <span slot="description" data-for="icons_with_text">
                    ${customLocalize("dishwasher.programs.editor.icons_with_text.description")}
                    
                </span>
                <ha-switch
                    id="icons_with_text" 
                    @change=${this._onSettingChange}
                    .checked=${this.getBoolConfigVal("icons_with_text", false)} 
                    name="icons_with_text"
                ></ha-switch>
            </ha-settings-row>

            <ha-settings-row>
                <span slot="heading" data-for="show_machine_care">
                    ${customLocalize("dishwasher.programs.editor.show_machine_care.title")}
                </span>
                <span slot="description" data-for="show_machine_care">
                    ${customLocalize("dishwasher.programs.editor.show_machine_care.description")}
                </span>
                <ha-switch
                    id="show_machine_care" 
                    @change=${this._onSettingChange}
                    .checked=${this.getBoolConfigVal("show_machine_care", true)} 
                    name="show_machine_care"
                ></ha-switch>
            </ha-settings-row>
        `;
    }

    private _onSettingChange(e: Event) {
        const target = e.target as HTMLInputElement;
        const key = target.id;
        const value = target.checked ?? target.value;

        this._updateConfig({ ...this.config, [key]: value});
    }    

    private getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }

    private _updateConfig(newConfig: any) {
        this.config = newConfig;
        this.dispatchEvent(
            new CustomEvent(
                "config-changed",
                {
                    detail: { config: this.config },
                    bubbles: true,
                    composed: true,
                }
            )
        );
    }

    static get styles(): CSSResultGroup {
        return BoschDishwasherProgramsEditorStyles
    }
}
