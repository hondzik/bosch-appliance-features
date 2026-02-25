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

  protected feature = EBoschFeature.dishwasher_programs;
  protected entityPrefixLength = 2;

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
      const modelName = 'SMV8YCX01E'; // TODO: get from cfg?

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

    this.classList.toggle('buttons', this._config.show_as_button_bar === true);
    this.classList.toggle('icons', this._config.show_as_button_bar !== true);
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

    return this._config.show_as_button_bar === true
      ? html`<ha-control-button-group> ${filteredPrograms.map((p) => this.renderHaControlButton(p))} </ha-control-button-group>`
      : html`<div>${filteredPrograms.map((p) => this.renderHaIconButton(p))}</div>`;
  }

  private renderHaControlButton(program: BoschDishwasherProgram): TemplateResult {
    const svg = BoschDishwasherProgramsFeature.getInlineSVG(program.icon).then((svg) => unsafeHTML(svg));
    const disabled = !this.online || this.running;
    return html`
      <ha-control-button
        .value=${program.program}
        .disabled=${disabled}
        class="${program.program == this.program ? 'active' : ''}"
        title=${program.name}
        @click=${(e: CustomEvent<{ value: string }>) => this.changeProgram(e)}
      >
        <div class="icon-wrapper">${until(svg, html`<ha-spinner size="small"></ha-spinner>`)}</div>
      </ha-control-button>
    `;
  }

  private renderHaIconButton(program: BoschDishwasherProgram): TemplateResult {
    const svg = BoschDishwasherProgramsFeature.getInlineSVG(program.icon).then((svg) => unsafeHTML(svg));
    return html`
      <ha-icon-button .label=${program.name} title=${program.name} value=${program.program} @click=${() => this.changeProgram}>
        ${until(svg, html`<ha-spinner size="small"></ha-spinner>`)}
      </ha-icon-button>
    `;
  }

  private changeProgram(e: Event) {
    const target = e.currentTarget as any;
    const value = target?.value;
    if (!value) return;
    this.program = value;
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
      show_as_button_bar: true,
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
