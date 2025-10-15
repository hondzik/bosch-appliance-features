import type { HomeAssistant } from 'custom-card-helpers';
import { html, CSSResultGroup, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
import { BoschDishwasherOptionsEditorStyles } from './bosch-dishwasher-options-styles';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherOptionsFeatureConfig } from '../../types/BoschDishwasherFeaturesTypes';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';

@customElement('bosch-dishwasher-options-editor')
export class BoschDishwasherOptionsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherOptionsFeatureConfig;

  protected feature = 'options';

  public setConfig(config: BoschDishwasherOptionsFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html`
      <div class="settings">${this.renderBoolHaSettingsRow('show_as_button_bar', true)}</div>
    `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschDishwasherOptionsEditorStyles];
  }
}
