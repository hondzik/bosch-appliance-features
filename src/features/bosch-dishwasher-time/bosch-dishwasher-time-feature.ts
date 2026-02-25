import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { EBoschEntity } from '../../const/BoschEntities';
import { EBoschFeature } from '../../const/BoschFeatures';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import { BoschDishwasherTimeFeatureStyles } from './bosch-dishwasher-time-styles';
import type { BoschDishwasherTimeFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { LovelaceGridOptions } from '../../types/LovelaceGrigOptions';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { TemplateResult, CSSResultGroup } from 'lit';
import './bosch-dishwasher-time-editor';

const supportsDishwasherTimeFeature = (stateObj: HassEntity) => {
  return BaseBoschFeature.isApplianceTypeSupported(stateObj, BoschDishwasherTimeFeature.applianceType);
};

@customElement('bosch-dishwasher-time-feature')
export class BoschDishwasherTimeFeature extends BaseBoschFeature implements LovelaceCardFeature {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @property({ attribute: false })
  public context?: LovelaceCardFeatureContext;

  @state()
  protected _config?: BoschDishwasherTimeFeatureConfig;

  protected feature = EBoschFeature.dishwasher_time;
  protected entityPrefixLength = 2;

  static override get applianceType(): string {
    return 'dishwasher';
  }

  public setConfig(config: BoschDishwasherTimeFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschDishwasherTimeFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    return html`
      <div class="bosch-dishwasher-time-feature">
        <ha-control-button .disabled=${!this.online} title=${this.running ? 'Pause' : 'Start'} @click=${this.action('start_pause')}>
          <ha-icon icon=${this.running ? 'mdi:pause' : 'mdi:play'}></ha-icon>
        </ha-control-button>
        <ha-control-button .disabled=${!this.online} title="Stop" } @click=${this.action('stop')}>
          <ha-icon icon="mdi:stop" }></ha-icon>
        </ha-control-button>
        <div class="time-graph">
          <div class="level" style="width: ${this.getLinkedEntityState(EBoschEntity.program_progress)?.state ?? '0'}%;"></div>
        </div>
        <div class="time-remaining">${this.getTimeRemaining()}</div>
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
      this.hass?.callService('button', 'press', { entity_id: 'button.xyz' });
    }
  }

  private getTimeRemaining(): string {
    const remainingTime = this.getLinkedEntityState(EBoschEntity.remaining_program_time);
    if (!remainingTime) return '0:00';

    const targetDate = new Date(remainingTime.state);

    const diffMs = Math.max(targetDate.getTime() - new Date().getTime(), 0);
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes.toString().padStart(2, '0')}`;
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

  public static getGridOptions(): LovelaceGridOptions {
    return {
      min_rows: 1,
      min_columns: 6,
    };
  }
}

// Register the feature in the global customCardFeatures array
window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'bosch-dishwasher-time-feature',
  name: 'Bosch Dishwasher Time Panel',
  supported: supportsDishwasherTimeFeature,
  configurable: true,
});
