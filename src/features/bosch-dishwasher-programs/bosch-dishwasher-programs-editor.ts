import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit-element';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschDishwasherProgramsEditorStyles } from './bosch-dishwasher-programs-styles';
import type { BoschDishwasherProgramsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { HomeAssistant } from 'custom-card-helpers';
import type { CSSResultGroup, TemplateResult } from 'lit-element';

@customElement('bosch-dishwasher-programs-editor')
export class BoschDishwasherProgramsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschDishwasherProgramsFeatureConfig = { type: 'custom:bosch-dishwasher-programs-feature' };

  protected feature = 'time';

  public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html` <div class="settings">${this.renderBoolHaSettingsRow('show_as_button_bar', true)} ${this.renderBoolHaSettingsRow('show_machinecare', true)}</div> `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschDishwasherProgramsEditorStyles];
  }
}
