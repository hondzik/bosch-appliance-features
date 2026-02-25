import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit-element';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherOptionsEditorStyles } from './bosch-dishwasher-options-styles';
import type { BoschDishwasherOptionsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { HomeAssistant } from 'custom-card-helpers';
import type { CSSResultGroup, TemplateResult } from 'lit-element';

@customElement('bosch-dishwasher-options-editor')
export class BoschDishwasherOptionsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherOptionsFeatureConfig = { type: 'custom:bosch-dishwasher-options-feature' };

  protected feature = 'options';

  public setConfig(config: BoschDishwasherOptionsFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html` <div class="settings">${this.renderBoolHaSettingsRow('show_as_button_bar', true)}</div> `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschDishwasherOptionsEditorStyles];
  }
}
