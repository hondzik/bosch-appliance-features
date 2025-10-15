import { html, LitElement, TemplateResult } from 'lit';
import setupCustomLocalize from '../localize';
import { HomeAssistant } from 'custom-card-helpers/dist/types';
import { FeatureConfig } from './BoschDishwasherFeaturesTypes';

export abstract class BoschBaseEditor extends LitElement {
  protected abstract config: FeatureConfig;
  protected abstract hass?: HomeAssistant;
  protected abstract feature: string;

  protected renderBoolHaSettingsRow(key: string, defaultVal: boolean): TemplateResult {
    const customLocalize = setupCustomLocalize(this.hass);
    return html`
      <ha-settings-row>
        <div slot="heading" data-for="${key}">${customLocalize(`dishwasher.${this.feature}.editor.${key}.title`)}</div>
        <div slot="description" data-for="${key}">${customLocalize(`dishwasher.${this.feature}.editor.${key}.description`)}</div>
        <ha-switch id="${key}" name="${key}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(key, defaultVal)} />
      </ha-settings-row>
    `;
  }

  protected _onSettingChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const key = target.id || target.name;
    const value = target.checked ?? target.value;
    this._updateConfig({ ...this.config, [key]: value });
  }

  protected getBoolConfigVal(key: string, defaultValue: boolean): boolean {
    return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
  }

  protected _updateConfig(newConfig: any): void {
    this.config = newConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
