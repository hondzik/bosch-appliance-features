import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit-element';
import { boschDishwasherAllOptionsMap, discoverOptions, orderOptions } from '../../const/BoschDishWasherOptions';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';
import { renderBoschIcon } from '../../utils/boschIcon';
import { getDeviceEntityIds } from '../../utils/deviceEntities';
import { CommonEditorStyles } from '../common/bosch-styles';
import type { BoschSortableListItem } from '../../components/bosch-sortable-list/bosch-sortable-list';
import type { BoschDishwasherOptionsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { HomeAssistant } from 'custom-card-helpers';
import type { CSSResultGroup, TemplateResult } from 'lit-element';
import '../../components/bosch-sortable-list/bosch-sortable-list';

@customElement('bosch-dishwasher-options-editor')
export class BoschDishwasherOptionsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ attribute: false })
  context?: LovelaceCardFeatureContext;

  @property({ type: Object })
  config: BoschDishwasherOptionsFeatureConfig = { type: 'custom:bosch-dishwasher-options-feature' };

  protected feature = 'options';

  public setConfig(config: BoschDishwasherOptionsFeatureConfig): void {
    this.config = { ...config };
  }

  private get discoveredKeys(): string[] {
    if (!this.hass || !this.context?.entity_id) return [];
    return discoverOptions(getDeviceEntityIds(this.hass, this.context.entity_id), this.hass.states).map((d) => d.key);
  }

  private onReorder(e: CustomEvent<{ items: BoschSortableListItem[] }>): void {
    this._updateConfig({ ...this.config, option_order: e.detail.items.map((i) => i.id) });
  }

  private toggleHidden(key: string, e: Event): void {
    e.stopPropagation();
    const hidden = new Set(this.config.option_hidden ?? []);
    if (hidden.has(key)) {
      hidden.delete(key);
    } else {
      hidden.add(key);
    }
    this._updateConfig({ ...this.config, option_hidden: [...hidden] });
  }

  protected render(): TemplateResult {
    const keys = this.discoveredKeys;
    if (keys.length === 0) {
      return html` <div class="settings">${this.localizeEditorKey('no_entity', 'title')}</div> `;
    }

    const ordered = orderOptions(keys, this.config);
    const items: BoschSortableListItem[] = ordered.map((o) => ({
      id: o.key,
      label: boschDishwasherAllOptionsMap.get(o.key)?.name ?? o.key,
      dimmed: o.hidden,
    }));

    return html`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey('option_order', 'title')}</div>
        <div class="section-description">${this.localizeEditorKey('option_order', 'description')}</div>
        <bosch-sortable-list
          .items=${items}
          .renderLeading=${(item: BoschSortableListItem) => renderBoschIcon(boschDishwasherAllOptionsMap.get(item.id))}
          .renderTrailing=${(item: BoschSortableListItem) => html`
            <ha-icon-button .label=${item.dimmed ? 'Show' : 'Hide'} @click=${(e: Event) => this.toggleHidden(item.id, e)}>
              <ha-icon icon=${item.dimmed ? 'mdi:eye-off' : 'mdi:eye'}></ha-icon>
            </ha-icon-button>
          `}
          @reorder=${this.onReorder}
        ></bosch-sortable-list>
      </div>
    `;
  }

  public static get styles(): CSSResultGroup {
    return [CommonEditorStyles];
  }
}
