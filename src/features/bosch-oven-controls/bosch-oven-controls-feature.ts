import { HomeAssistant } from 'custom-card-helpers';
import { TemplateResult, nothing, html, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { EBoschFeature } from '../../const/BoschFeatures';
import { BaseBoschFeature } from '../../types/BaseBoschFeature';
import { BoschOvenControlsFeatureStyles } from './bosch-oven-controls-styles';
import { BoschOvenControlsFeatureConfig } from '../../types/BoschFeaturesTypes';
import './bosch-oven-controls-editor';

@customElement('bosch-oven-controls-feature')
export class BoschOvenControlsFeature extends BaseBoschFeature implements LovelaceCardFeature {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @property({ attribute: false })
  public context?: LovelaceCardFeatureContext;

  @state()
  protected _config?: BoschOvenControlsFeatureConfig;

  protected feature = EBoschFeature.oven_controls;
  protected entityPrefixLength = 3;

  public setConfig(config: BoschOvenControlsFeatureConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
  }

  /*
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_childlock
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_doorstate
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_interiorilluminationactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_localcontrolactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_remotecontrolactive
binary_sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_remotecontrolstartallowed
binary_sensor.bosch_hsg636xs6_68a40e80aee4_connected
binary_sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_fastpreheat
binary_sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_setting_sabbathmode
button.bosch_hsg636xs6_68a40e80aee4_start_pause
button.bosch_hsg636xs6_68a40e80aee4_stop
number.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_alarmclock
number.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_setpointtemperature
select.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_powerstate
select.bosch_hsg636xs6_68a40e80aee4_programs
sensor.bosch_hsg636xs6_68a40e80aee4_active_program
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_duration
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_elapsedprogramtime
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_programprogress
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_option_startinrelative
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_alarmclock
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_powerstate
sensor.bosch_hsg636xs6_68a40e80aee4_bsh_common_status_operationstate
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_setpointtemperature
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_steamassistlevel
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_weight
sensor.bosch_hsg636xs6_68a40e80aee4_cooking_oven_status_currentcavitytemperature
switch.bosch_hsg636xs6_68a40e80aee4_bsh_common_setting_childlock
switch.bosch_hsg636xs6_68a40e80aee4_cooking_oven_option_fastpreheat
switch.bosch_hsg636xs6_68a40e80aee4_cooking_oven_setting_sabbathmode
*/
  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass || !this.context || !BoschOvenControlsFeature.isSupported(this.hass, this.context)) {
      return nothing;
    }

    return html`<div class="toners"><div>Not implemented</div></div>`;
  }

  public static isSupported(hass: HomeAssistant, context: LovelaceCardFeatureContext): boolean {
    return super.isSupported(hass, context, 'oven');
  }

  static get properties(): { [key: string]: any } {
    return {
      hass: { type: Object },
      config: { type: Object },
      stateObj: { type: Object },
    };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('bosch-oven-controls-editor');
  }

  static getStubConfig(): BoschOvenControlsFeatureConfig {
    return {
      type: 'custom:bosch-oven-controls-feature',
    };
  }

  static get styles(): CSSResultGroup {
    return BoschOvenControlsFeatureStyles;
  }
}

window.customCardFeatures ||= [];
window.customCardFeatures.push({
  type: 'bosch-oven-controls-feature',
  name: 'Bosch Oven Controls Panel',
  configurable: true,
});
