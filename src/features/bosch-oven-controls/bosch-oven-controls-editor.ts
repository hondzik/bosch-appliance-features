import { HomeAssistant } from 'custom-card-helpers';
import { TemplateResult, html, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators';
import { BoschOvenControlsEditorStyles } from './bosch-oven-controls-styles';
import { CommonEditorStyles } from '../common/bosch-styles';
import { BoschOvenControlsFeatureConfig } from '../../types/BoschFeaturesTypes';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';

@customElement('bosch-oven-controls-editor')
export class BoschOvenControlsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ type: Object })
  config: BoschOvenControlsFeatureConfig = { type: 'custom:bosch-oven-controls-feature' };

  protected feature = 'program';

  public setConfig(config: BoschOvenControlsFeatureConfig): void {
    this.config = { ...config };
  }

  protected render(): TemplateResult {
    return html` <div class="settings">Nothing to configure</div> `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles, BoschOvenControlsEditorStyles];
  }
}
