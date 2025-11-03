import { html, TemplateResult, CSSResultGroup, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import type { HomeAssistant } from 'custom-card-helpers';
import { BoschDishwasherOptionsFeatureStyles } from './bosch-dishwasher-options-styles';
import { BoschDishwasherOptionsFeatureConfig } from '../../types/BoschFeaturesTypes';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import './bosch-dishwasher-options-editor';
import { EBoschFeature } from '../../const/BoschFeatures';
import { HassEntity } from 'home-assistant-js-websocket';

const supportsBoschDishwasherOptionsFeature = (stateObj: HassEntity) => {
  return BaseBoschFeature.isApplianceTypeSupported(stateObj, BoschDishwasherOptionsFeature.applianceType);
};

@customElement('bosch-dishwasher-options-feature')
export class BoschDishwasherOptionsFeature extends BaseBoschFeature implements LovelaceCardFeature {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @property({ attribute: false })
  public context?: LovelaceCardFeatureContext;

  @state()
  protected _config?: BoschDishwasherOptionsFeatureConfig;

  protected feature = EBoschFeature.dishwasher_options;
  protected entityPrefixLength = 2;

  static override get applianceType(): string {
    return 'dishwasher';
  }

  public setConfig(config: BoschDishwasherOptionsFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschDishwasherOptionsFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    return html`<div class="toners"><div>Not implemented</div></div>`;
  }

  static get properties(): { [key: string]: any } {
    return {
      hass: { type: Object },
      config: { type: Object },
      stateObj: { type: Object },
    };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('bosch-dishwasher-options-editor');
  }

  static getStubConfig(): BoschDishwasherOptionsFeatureConfig {
    return {
      type: 'custom:bosch-dishwasher-options-feature',
      show_as_button_bar: true,
    };
  }

  static get styles(): CSSResultGroup {
    return BoschDishwasherOptionsFeatureStyles;
  }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'bosch-dishwasher-options-feature',
  name: 'Bosch Dishwasher Program Options Panel',
  supported: supportsBoschDishwasherOptionsFeature,
  configurable: true,
});
