import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { boschDishwasherAllProgramsMap, boschDishwasherModelProgramsMap } from '../../const/BoschDishWasherPrograms';
import { EBoschEntity } from '../../const/BoschEntities';
import { EBoschFeature } from '../../const/BoschFeatures';
import { boschModelGroupMap, EBoschModel } from '../../const/BoschModels';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import { enumFromKey } from '../../utils/enum';
import { BoschDishwasherProgramsFeatureStyles } from './bosch-dishwasher-programs-styles';
import type { EBoschModelGroup } from '../../const/BoschModels';
import type { BoschDishwasherProgram, BoschDishwasherProgramsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { LovelaceGridOptions } from '../../types/LovelaceGrigOptions';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { TemplateResult, CSSResultGroup } from 'lit';
import './bosch-dishwasher-programs-editor';

const supportsBoschDishwasherProgramsFeature = (stateObj: HassEntity) => {
  return BaseBoschFeature.isApplianceTypeSupported(stateObj, BoschDishwasherProgramsFeature.applianceType);
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

  private _programs: BoschDishwasherProgram[] = [];

  private get programs(): BoschDishwasherProgram[] {
    if (this._programs.length === 0) {
      const modelName = this.deviceModel;
      if (!modelName) {
        console.error('Cannot determine dishwasher model from the device registry');
        return [];
      }

      const model = enumFromKey(EBoschModel, modelName);
      if (model === undefined) {
        console.error(`Unsupported dishwasher model ${modelName}`);
        return [];
      }

      const modelGroup: EBoschModelGroup | undefined = boschModelGroupMap.get(model);
      if (modelGroup === undefined) {
        console.error(`Model group not defined for dishwasher model ${modelName}`);
        return [];
      }

      const programKeys = boschDishwasherModelProgramsMap.get(modelGroup) || [];
      this._programs = programKeys.map((p) => boschDishwasherAllProgramsMap.get(p)).filter(Boolean) as BoschDishwasherProgram[];

      if (this._programs.length === 0) {
        console.error(`No programs associated with model ${modelName} found`);
      }
    }

    return this._programs;
  }

  private set programs(programs: BoschDishwasherProgram[]) {
    this._programs = programs;
  }

  public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
    this.programs = [];
  }

  private get program(): string | null {
    const program = this.getLinkedEntityState(EBoschEntity.programs);
    return program ? program.state : null;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschDishwasherProgramsFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    const filteredPrograms = this.programs.filter((p) => this.getBoolConfigVal('show_' + p.icon, true));

    return html`<ha-control-button-group> ${filteredPrograms.map((p) => this.renderHaControlButton(p))} </ha-control-button-group>`;
  }

  private get controlsDisabled(): boolean {
    return !this.online || this.running;
  }

  private renderHaControlButton(program: BoschDishwasherProgram): TemplateResult {
    const isPending = this._pendingProgram === program.program;
    const svg = BoschDishwasherProgramsFeature.getInlineSVG(program.icon).then((svg) => unsafeHTML(svg));
    const classes = [
      program.program == this.program ? 'active' : '',
      this.controlsDisabled || (this._pendingProgram !== undefined && !isPending) ? 'unavailable' : '',
      isPending ? 'pending' : '',
    ]
      .join(' ')
      .trim();
    return html`
      <ha-control-button .value=${program.program} class=${classes} title=${program.name} @click=${(e: CustomEvent<{ value: string }>) => this.changeProgram(e)}>
        <div class="icon-wrapper">${isPending ? html`<ha-spinner size="small"></ha-spinner>` : until(svg, html`<ha-spinner size="small"></ha-spinner>`)}</div>
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
      show_machinecare: true,
    };
  }

  public static get styles(): CSSResultGroup {
    return BoschDishwasherProgramsFeatureStyles;
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
