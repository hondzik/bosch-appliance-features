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
        return html`config editor not implemented yet`;
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
