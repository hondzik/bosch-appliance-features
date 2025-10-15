import type { HomeAssistant } from 'custom-card-helpers';
import { html, CSSResultGroup, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
import { BoschDishwasherProgramsEditorStyles } from './bosch-dishwasher-programs-styles';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherProgramsFeatureConfig } from '../../types/BoschDishwasherFeaturesTypes';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';

@customElement('bosch-dishwasher-programs-editor')
export class BoschDishwasherProgramsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherProgramsFeatureConfig;

  protected feature = 'time';

  public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html`
      <div class="settings">
        ${this.renderBoolHaSettingsRow('show_as_button_bar', true)}
        ${this.renderBoolHaSettingsRow('show_machinecare', true)}
      </div>
    `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschDishwasherProgramsEditorStyles];
  }
}
