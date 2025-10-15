import { HomeAssistant } from 'custom-card-helpers';
import { html, TemplateResult, nothing, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { EBoschEntity } from '../../const/BoschEntities';
import { BoschDishwasherTimeFeatureStyles } from './bosch-dishwasher-time-styles';
import { BoschDishwasherTimeFeatureConfig } from '../../types/BoschDishwasherFeaturesTypes';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import './bosch-dishwasher-time-editor';

@customElement('bosch-dishwasher-time-feature')
export class BoschDishwasherTimeFeature extends BaseBoschFeature implements LovelaceCardFeature {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @property({ attribute: false })
  public context?: LovelaceCardFeatureContext;

  @state()
  protected _config?: BoschDishwasherTimeFeatureConfig;

  public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  protected render(): TemplateResult | typeof nothing {
    if (
      !this._config ||
      !this.hass ||
      !this.context ||
      !BoschDishwasherTimeFeature.isSupported(this.hass, this.context)
    ) {
      return nothing;
    }

    return html`
      <div class="bosh-dishwasher-time-feature">
        <ha-control-button
          .disabled=${!this.online}
          title=${this.running ? 'Pause' : 'Start'}
          @click=${this.action('start_pause')}
        >
          <ha-icon icon=${this.running ? 'mdi:pause' : 'mdi:play'}></ha-icon>
        </ha-control-button>
        <ha-control-button .disabled=${!this.online} title="Stop" } @click=${this.action('stop')}>
          <ha-icon icon="mdi:stop" }></ha-icon>
        </ha-control-button>
        <div class="time-graph">
          <div class="background">
            <div
              class="level"
              style="width: ${this.getLinkedEntityState(EBoschEntity.program_progress)?.state ?? '0'}%;"
            ></div>
          </div>
        </div>
        <div class="time-remaining">
          ${this.getLinkedEntityState(EBoschEntity.remaining_program_time)?.state ?? '0:00'}
        </div>
      </div>
    `;
  }

  private action(action: string): void {
    let entity = undefined;
    switch (action) {
      case 'start_pause':
        entity = this.getLinkedEntityState(EBoschEntity.start_pause);
        break;
      case 'stop':
        entity = this.getLinkedEntityState(EBoschEntity.stop);
        break;
    }
    if (entity) {
      this.hass.callService('button', 'press', { entity_id: 'button.xyz' });
    }
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('bosch-dishwasher-time-editor');
  }

  public static getStubConfig(): BoschDishwasherTimeFeatureConfig {
    return {
      type: 'custom:bosch-dishwasher-time-feature',
      show_remaining_time: true,
    };
  }

  public static get styles(): CSSResultGroup {
    return BoschDishwasherTimeFeatureStyles;
  }

  public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
    return super.isSupported(hass, context, 'dishwasher');
  }
}

// Register the feature in the global customCardFeatures array
window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'bosch-dishwasher-time-feature',
  name: 'Bosch Dishwasher Time Panel',
  configurable: true,
});
