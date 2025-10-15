import type { HomeAssistant } from "custom-card-helpers";
import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import setupCustomLocalize from "../../localize";
import { BoschDishwasherProgramsEditorStyles } from "./bosch-dishwasher-programs-styles";
import { CommonEditorStyles } from "../common/bosch-styles";

@customElement("bosch-dishwasher-programs-editor")
export class BoschDishwasherProgramsEditor extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ type: Object }) config: BoschDishwasherProgramsFeatureConfig;

    public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
        this.config = { ...config };
    }

    protected render(): TemplateResult {
        return html`
            <div class="settings">
                ${this.renderBoolHaSettingsRow("show_as_button_bar", true)}
                ${this.renderBoolHaSettingsRow("show_machinecare", true)}
            </div>
        `;
    }

    private renderBoolHaSettingsRow(key: string, defaultVal: boolean): TemplateResult {
        const customLocalize = setupCustomLocalize(this.hass);
        return html`
            <ha-settings-row>
                <div slot="heading" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.title`)}</div>
                <div slot="description" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.description`)}</div>
                <ha-switch id="${key}" name="${key}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(key, defaultVal)} />
            </ha-settings-row>
        `;
    }

    private _onSettingChange(e: Event): void {
        const target = e.target as HTMLInputElement;
        const key = target.id || target.name;
        const value = target.checked ?? target.value;

        this._updateConfig({ ...this.config, [key]: value});
    }    

    private getBoolConfigVal(key: string, defaultValue: boolean): boolean  {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }

    private _updateConfig(newConfig: any): void {
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

    public static get styles(): CSSResultGroup {
        return [
            CommonEditorStyles,
            BoschDishwasherProgramsEditorStyles
        ]
    }
}
