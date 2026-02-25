import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherTimeEditorStyles } from './bosch-dishwasher-time-styles';
import type { BoschDishwasherTimeFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { HomeAssistant } from 'custom-card-helpers';
import type { TemplateResult, CSSResultGroup } from 'lit';

@customElement('bosch-dishwasher-time-editor')
export class BoschDishwasherTimeEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherTimeFeatureConfig = { type: 'custom:bosch-dishwasher-time-feature' };

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
