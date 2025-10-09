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
        return html`
            <div class="settings">
                ${this.getBoolHaSettingsRow("icons_with_text", false)}
                ${this.getBoolHaSettingsRow("show_machine_care", true)}
            </div>
        `;
    }

    private getBoolHaSettingsRow(key: string, defaultVal: boolean): TemplateResult {
        const customLocalize = setupCustomLocalize(this.hass);
        return html`
            <ha-settings-row>
                <div slot="heading" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.title`)}</div>
                <div slot="description" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.description`)}</div>
                <ha-switch id="${key}" name="${key}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(key, defaultVal)} />
            </ha-settings-row>
        `;
    }

    private _onSettingChange(e: Event) {
        const target = e.target as HTMLInputElement;
        const key = target.id || target.name;
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
