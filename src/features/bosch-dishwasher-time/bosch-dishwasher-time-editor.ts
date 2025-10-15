import { HomeAssistant } from 'custom-card-helpers';
import { TemplateResult, html, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators';
import { BoschDishwasherTimeEditorStyles } from './bosch-dishwasher-time-styles';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherTimeFeatureConfig } from '../../types/BoschDishwasherFeaturesTypes';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';

@customElement('bosch-dishwasher-time-editor')
export class BoschDishwasherTimeEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherTimeFeatureConfig;

  protected feature = 'program';

  public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html` <div class="settings">${this.renderBoolHaSettingsRow('show_remaining_time', true)}</div> `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschDishwasherTimeEditorStyles];
  }
}
