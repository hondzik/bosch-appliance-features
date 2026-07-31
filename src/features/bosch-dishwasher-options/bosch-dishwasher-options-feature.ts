import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { boschDishwasherAllOptionsMap, discoverOptions, orderOptions } from '../../const/BoschDishWasherOptions';
import { EBoschFeature } from '../../const/BoschFeatures';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import { renderBoschIcon } from '../../utils/boschIcon';
import { getDeviceEntityIds } from '../../utils/deviceEntities';
import { CommonFeatureButtonBarStyles } from '../common/bosch-styles';
import { BoschDishwasherOptionsFeatureStyles } from './bosch-dishwasher-options-styles';
import type { DiscoveredOption } from '../../const/BoschDishWasherOptions';
import type { BoschDishwasherOptionsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { LovelaceGridOptions } from '../../types/LovelaceGrigOptions';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { TemplateResult, CSSResultGroup } from 'lit';
import './bosch-dishwasher-options-editor';

const supportsBoschDishwasherOptionsFeature = (stateObj: HassEntity) => {
  return BaseBoschFeature.isHomeConnectAltEntity(stateObj);
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
  protected entityPrefixLength = 1;

  static override get applianceType(): string {
    return 'dishwasher';
  }

  public setConfig(config: BoschDishwasherOptionsFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  private get controlsDisabled(): boolean {
    return !this.online || this.running;
  }

  private get discovered(): DiscoveredOption[] {
    if (!this.hass || !this.context?.entity_id) return [];
    return discoverOptions(getDeviceEntityIds(this.hass, this.context.entity_id), this.hass.states);
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschDishwasherOptionsFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    const discovered = this.discovered;
    const byKey = new Map(discovered.map((d) => [d.key, d]));
    const visible = orderOptions(
      discovered.map((d) => d.key),
      this._config,
    )
      .filter((o) => !o.hidden)
      .map((o) => byKey.get(o.key))
      .filter((d): d is DiscoveredOption => d !== undefined);

    return html`<ha-control-button-group> ${visible.map((d) => this.renderOption(d))} </ha-control-button-group>`;
  }

  private renderOption(discovered: DiscoveredOption): TemplateResult {
    return discovered.kind === 'startInRelative' ? this.renderStartInRelative(discovered) : this.renderSwitchOption(discovered);
  }

  private renderSwitchOption(discovered: DiscoveredOption): TemplateResult {
    const option = boschDishwasherAllOptionsMap.get(discovered.key);
    const entity = this.hass?.states[discovered.entityId];
    const isActive = entity?.state === 'on';
    const isUnavailable = !entity || entity.state === 'unavailable' || entity.state === 'unknown';
    const classes = [isActive ? 'active' : '', this.controlsDisabled || isUnavailable ? 'unavailable' : ''].join(' ').trim();

    return html`
      <ha-control-button class=${classes} title=${option?.name ?? discovered.key} @click=${() => this.toggleSwitchOption(discovered)}>
        <div class="icon-wrapper">${renderBoschIcon(option)}</div>
      </ha-control-button>
    `;
  }

  private renderStartInRelative(discovered: DiscoveredOption): TemplateResult {
    const option = boschDishwasherAllOptionsMap.get(discovered.key);
    const entity = this.hass?.states[discovered.entityId];
    const value = entity?.state ?? '0:00';
    const options: string[] = entity?.attributes.options ?? [];
    const isActive = value !== '0:00';
    const isUnavailable = !entity || entity.state === 'unavailable' || entity.state === 'unknown';
    const classes = [isActive ? 'active' : '', this.controlsDisabled || isUnavailable ? 'unavailable' : ''].join(' ').trim();

    return html`
      <div class="start-in-relative">
        <ha-control-button class=${classes} title=${option?.name ?? discovered.key} @click=${() => this.toggleDelayedStart(discovered, value)}>
          <div class="icon-wrapper">${renderBoschIcon(option)}</div>
        </ha-control-button>
        <select class="start-in-relative-select" ?disabled=${this.controlsDisabled || isUnavailable} .value=${value} @change=${(e: Event) => this.changeDelayedStartValue(discovered, e)}>
          ${options.map((time) => html`<option value=${time}>${time}</option>`)}
        </select>
      </div>
    `;
  }

  private toggleSwitchOption(discovered: DiscoveredOption): void {
    if (this.controlsDisabled || !this.hass) return;
    const entity = this.hass.states[discovered.entityId];
    if (!entity) return;

    this.hass.callService('switch', entity.state === 'on' ? 'turn_off' : 'turn_on', { entity_id: discovered.entityId });
  }

  private toggleDelayedStart(discovered: DiscoveredOption, currentValue: string): void {
    if (this.controlsDisabled || !this.hass) return;
    this.hass.callService('select', 'select_option', { entity_id: discovered.entityId, option: currentValue === '0:00' ? '0:30' : '0:00' });
  }

  private changeDelayedStartValue(discovered: DiscoveredOption, e: Event): void {
    if (!this.hass) return;
    const target = e.target as HTMLSelectElement;
    this.hass.callService('select', 'select_option', { entity_id: discovered.entityId, option: target.value });
  }

  protected shouldUpdate(changedProperties: Map<PropertyKey, unknown>): boolean {
    if (super.shouldUpdate(changedProperties)) {
      return true;
    }

    if (!changedProperties.has('hass') || !this.hass || !this.context?.entity_id) {
      return false;
    }

    const oldHass = changedProperties.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return false;

    return this.discovered.some((d) => oldHass.states[d.entityId] !== this.hass?.states[d.entityId]);
  }

  static get properties(): { [key: string]: any } {
    return {
      hass: { type: Object },
      config: { type: Object },
      context: { type: Object },
    };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('bosch-dishwasher-options-editor');
  }

  static getStubConfig(): BoschDishwasherOptionsFeatureConfig {
    return {
      type: 'custom:bosch-dishwasher-options-feature',
    };
  }

  static get styles(): CSSResultGroup {
    return [CommonFeatureButtonBarStyles, BoschDishwasherOptionsFeatureStyles];
  }

  public static getGridOptions(): LovelaceGridOptions {
    return {
      min_rows: 1,
      min_columns: 12,
    };
  }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'bosch-dishwasher-options-feature',
  name: 'Bosch Dishwasher Program Options Panel',
  supported: supportsBoschDishwasherOptionsFeature,
  configurable: true,
});
