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
  return BaseBoschFeature.isHomeConnectAltEntity(stateObj);
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
  protected entityPrefixLength = 1;

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

    const running = this.running;
    const startPausePending = this.isPending('start_pause');
    const stopPending = this.isPending('stop');
    const startPauseAvailable = this.isLinkedEntityAvailable(EBoschEntity.start_pause);
    const stopAvailable = this.isLinkedEntityAvailable(EBoschEntity.stop);

    return html`
      <div class="bosch-dishwasher-time-feature">
        <ha-control-button ?hidden=${running} class=${this.online && startPauseAvailable ? '' : 'unavailable'} title="Start" @click=${() => this.action('start_pause')}>
          <div class="icon-wrapper">${startPausePending ? html`<ha-spinner size="small"></ha-spinner>` : html`<ha-icon icon="mdi:play"></ha-icon>`}</div>
        </ha-control-button>
        <ha-control-button ?hidden=${!running} class=${this.online && startPauseAvailable ? '' : 'unavailable'} title="Pause" @click=${() => this.action('start_pause')}>
          <div class="icon-wrapper">${startPausePending ? html`<ha-spinner size="small"></ha-spinner>` : html`<ha-icon icon="mdi:pause"></ha-icon>`}</div>
        </ha-control-button>
        <ha-control-button class=${this.online && running && stopAvailable ? '' : 'unavailable'} title="Stop" @click=${() => this.action('stop')}>
          <div class="icon-wrapper">${stopPending ? html`<ha-spinner size="small"></ha-spinner>` : html`<ha-icon icon="mdi:stop"></ha-icon>`}</div>
        </ha-control-button>
        <div class="time-graph">
          <div class="level" style="width: ${this.getProgress()}%;"></div>
        </div>
        <div class="time-remaining">${this.getDisplayTime()}</div>
      </div>
    `;
  }

  private action(action: 'start_pause' | 'stop'): void {
    if (!this.online) return;
    if (action === 'stop' && !this.running) return;
    if (this.isPending(action)) return;
    if (!this.isLinkedEntityAvailable(action === 'start_pause' ? EBoschEntity.start_pause : EBoschEntity.stop)) return;

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
      const currentOperationState = this.getLinkedEntityState(EBoschEntity.operation_state)?.state ?? '';
      this.setPending(action, currentOperationState);
      this.hass?.callService('button', 'press', { entity_id: entity.entity_id });
    }
  }

  protected updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (!this.hasPendingAction) return;

    const currentOperationState = this.getLinkedEntityState(EBoschEntity.operation_state)?.state ?? '';
    for (const [key, previousOperationState] of this.pendingEntries) {
      if (currentOperationState !== previousOperationState) {
        this.clearPending(key);
      }
    }
  }

  // Some dishwashers never report program_progress over Home Connect (permanently unavailable
  // even mid-run) — fall back to estimating it from elapsed vs. remaining time, since that's
  // self-correcting as the remaining-time estimate itself gets revised.
  private getProgress(): number {
    const reported = this.getLinkedEntityState(EBoschEntity.program_progress)?.state;
    if (reported !== undefined) {
      const parsed = Number(reported);
      if (!Number.isNaN(parsed)) return Math.min(Math.max(parsed, 0), 100);
    }

    if (!this.running) return 0;

    const remainingTime = this.getLinkedEntityState(EBoschEntity.remaining_program_time);
    const operationState = this.getLinkedEntityState(EBoschEntity.operation_state);
    if (!remainingTime || !operationState) return 0;

    const now = new Date().getTime();
    const remainingMs = Math.max(new Date(remainingTime.state).getTime() - now, 0);
    const elapsedMs = Math.max(now - new Date(operationState.last_changed).getTime(), 0);
    if (elapsedMs + remainingMs === 0) return 0;

    return Math.min(Math.max((elapsedMs / (elapsedMs + remainingMs)) * 100, 0), 100);
  }

  private getDisplayTime(): string {
    const remainingTime = this.getLinkedEntityState(EBoschEntity.remaining_program_time);
    if (!remainingTime) return '0:00';

    const targetDate = new Date(remainingTime.state);

    if (!this.getBoolConfigVal('show_remaining_time', true)) {
      return targetDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }

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
