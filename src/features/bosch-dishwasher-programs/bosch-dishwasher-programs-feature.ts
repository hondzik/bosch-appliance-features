import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BOSCH_DISHWASHER_PROGRAM_PREFIX, boschDishwasherAllProgramsMap, orderPrograms } from '../../const/BoschDishWasherPrograms';
import { EBoschEntity } from '../../const/BoschEntities';
import { EBoschFeature } from '../../const/BoschFeatures';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import { renderBoschIcon } from '../../utils/boschIcon';
import { CommonFeatureButtonBarStyles } from '../common/bosch-styles';
import { BoschDishwasherProgramsFeatureStyles } from './bosch-dishwasher-programs-styles';
import type { BoschDishwasherProgramsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { LovelaceGridOptions } from '../../types/LovelaceGrigOptions';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { TemplateResult, CSSResultGroup } from 'lit';
import './bosch-dishwasher-programs-editor';

const supportsBoschDishwasherProgramsFeature = (stateObj: HassEntity) => {
  return BaseBoschFeature.isHomeConnectAltEntity(stateObj);
};

@customElement('bosch-dishwasher-programs-feature')
export class BoschDishwasherProgramsFeature extends BaseBoschFeature implements LovelaceCardFeature {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @property({ attribute: false })
  public context?: LovelaceCardFeatureContext;

  @state()
  protected _config?: BoschDishwasherProgramsFeatureConfig;

  @state()
  private _pendingProgram?: string;

  private _pendingTimeoutId?: ReturnType<typeof setTimeout>;

  protected feature = EBoschFeature.dishwasher_programs;
  protected entityPrefixLength = 1;

  static override get applianceType(): string {
    return 'dishwasher';
  }

  private set program(value: string) {
    const entityId = this.getLinkedEntityState(EBoschEntity.programs)?.entity_id;
    console.log(`Setting ${entityId} to ${value}`);
    if (entityId && this.hass) {
      this.hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    } else {
      console.error(`Cannot set ${entityId} to ${value}`);
    }
  }

  public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  private get program(): string | null {
    const program = this.getLinkedEntityState(EBoschEntity.programs);
    return program ? program.state : null;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschDishwasherProgramsFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    const options: string[] = this.getLinkedEntityState(EBoschEntity.programs)?.attributes.options ?? [];
    const visiblePrograms = orderPrograms(options, this._config)
      .filter((p) => !p.hidden)
      .map((p) => p.key);

    return html`<ha-control-button-group> ${visiblePrograms.map((key) => this.renderHaControlButton(key))} </ha-control-button-group>`;
  }

  private get controlsDisabled(): boolean {
    return !this.online || this.running;
  }

  private renderHaControlButton(key: string): TemplateResult {
    const fullProgram = `${BOSCH_DISHWASHER_PROGRAM_PREFIX}${key}`;
    const isPending = this._pendingProgram === fullProgram;
    const program = boschDishwasherAllProgramsMap.get(key);
    const stateObj = this.getLinkedEntityState(EBoschEntity.programs);
    const hass = this.hass as unknown as { formatEntityState?: (s: HassEntity, v: string) => string };
    const title = (stateObj && hass.formatEntityState?.(stateObj, fullProgram)) || program?.name || key;
    const classes = [fullProgram == this.program ? 'active' : '', this.controlsDisabled || (this._pendingProgram !== undefined && !isPending) ? 'unavailable' : '', isPending ? 'pending' : '']
      .join(' ')
      .trim();
    return html`
      <ha-control-button .value=${fullProgram} class=${classes} title=${title} @click=${(e: CustomEvent<{ value: string }>) => this.changeProgram(e)}>
        <div class="icon-wrapper">${isPending ? html`<ha-spinner size="small"></ha-spinner>` : renderBoschIcon(program)}</div>
      </ha-control-button>
    `;
  }

  private changeProgram(e: Event) {
    if (this.controlsDisabled || this._pendingProgram !== undefined) return;
    const target = e.currentTarget as any;
    const value = target?.value;
    if (!value) return;
    this._pendingProgram = value;
    this.program = value;
    this._pendingTimeoutId = setTimeout(() => this.clearPending(), 15000);
  }

  private clearPending(): void {
    if (this._pendingTimeoutId !== undefined) {
      clearTimeout(this._pendingTimeoutId);
      this._pendingTimeoutId = undefined;
    }
    this._pendingProgram = undefined;
  }

  protected shouldUpdate(changedProperties: Map<PropertyKey, unknown>): boolean {
    if (changedProperties.has('_pendingProgram')) {
      return true;
    }
    return super.shouldUpdate(changedProperties);
  }

  protected updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (this._pendingProgram !== undefined && this.program === this._pendingProgram) {
      this.clearPending();
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._pendingTimeoutId !== undefined) {
      clearTimeout(this._pendingTimeoutId);
    }
  }

  static get properties(): { [key: string]: any } {
    return {
      hass: { type: Object },
      config: { type: Object },
      context: { type: Object },
    };
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement('bosch-dishwasher-programs-editor');
  }

  public static getStubConfig(): BoschDishwasherProgramsFeatureConfig {
    return {
      type: 'custom:bosch-dishwasher-programs-feature',
    };
  }

  public static get styles(): CSSResultGroup {
    return [CommonFeatureButtonBarStyles, BoschDishwasherProgramsFeatureStyles];
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
  type: 'bosch-dishwasher-programs-feature',
  name: 'Bosch Dishwasher Programs Panel',
  supported: supportsBoschDishwasherProgramsFeature,
  configurable: true,
});
