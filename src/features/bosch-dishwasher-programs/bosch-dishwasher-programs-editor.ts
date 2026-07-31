import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit-element';
import { BOSCH_DISHWASHER_PROGRAM_PREFIX, boschDishwasherAllProgramsMap, orderPrograms } from '../../const/BoschDishWasherPrograms';
import { boschEntitiesMap, EBoschEntity } from '../../const/BoschEntities';
import { BoschBaseEditor } from '../../types/BaseBoschFeatureEditor';
import { renderBoschIcon } from '../../utils/boschIcon';
import { resolveEntityPrefix } from '../../utils/entityPrefix';
import { CommonEditorStyles } from '../common/bosch-styles';
import type { BoschSortableListItem } from '../../components/bosch-sortable-list/bosch-sortable-list';
import type { BoschDishwasherProgramsFeatureConfig } from '../../types/BoschFeaturesTypes';
import type { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import type { CSSResultGroup, TemplateResult } from 'lit-element';
import '../../components/bosch-sortable-list/bosch-sortable-list';

@customElement('bosch-dishwasher-programs-editor')
export class BoschDishwasherProgramsEditor extends BoschBaseEditor {
  @property({ attribute: false })
  hass?: HomeAssistant;

  @property({ attribute: false })
  context?: LovelaceCardFeatureContext;

  @property({ type: Object })
  config: BoschDishwasherProgramsFeatureConfig = { type: 'custom:bosch-dishwasher-programs-feature' };

  protected feature = 'programs';

  // Must match bosch-dishwasher-programs-feature's entityPrefixLength — both resolve the same
  // `programs` select entity from the same context.entity_id.
  private readonly entityPrefixLength = 1;

  public setConfig(config: BoschDishwasherProgramsFeatureConfig): void {
    this.config = { ...config };
  }

  private get programsStateObj(): HassEntity | undefined {
    const entityId = this.context?.entity_id;
    const prefix = resolveEntityPrefix(entityId, this.entityPrefixLength);
    const entityDef = boschEntitiesMap.get(EBoschEntity.programs);
    if (!prefix || !entityDef || !this.hass) {
      return undefined;
    }
    return this.hass.states[`${entityDef.type}.${prefix}_${entityDef.suffix}`];
  }

  private label(fullOptionId: string, key: string): string {
    const stateObj = this.programsStateObj;
    const hass = this.hass as unknown as { formatEntityState?: (s: HassEntity, v: string) => string };
    const translated = stateObj && hass.formatEntityState ? hass.formatEntityState(stateObj, fullOptionId) : undefined;
    return translated || boschDishwasherAllProgramsMap.get(key)?.name || key;
  }

  private onReorder(e: CustomEvent<{ items: BoschSortableListItem[] }>): void {
    this._updateConfig({ ...this.config, program_order: e.detail.items.map((i) => i.id) });
  }

  private toggleHidden(key: string, e: Event): void {
    e.stopPropagation();
    const hidden = new Set(this.config.program_hidden ?? []);
    if (hidden.has(key)) {
      hidden.delete(key);
    } else {
      hidden.add(key);
    }
    this._updateConfig({ ...this.config, program_hidden: [...hidden] });
  }

  protected render(): TemplateResult {
    const stateObj = this.programsStateObj;
    if (!stateObj) {
      return html` <div class="settings">${this.localizeEditorKey('no_entity', 'title')}</div> `;
    }

    const options: string[] = stateObj.attributes.options ?? [];
    const ordered = orderPrograms(options, this.config);
    const items: BoschSortableListItem[] = ordered.map((p) => ({
      id: p.key,
      label: this.label(`${BOSCH_DISHWASHER_PROGRAM_PREFIX}${p.key}`, p.key),
      dimmed: p.hidden,
    }));

    return html`
      <div class="settings">
        <div class="section-heading">${this.localizeEditorKey('program_order', 'title')}</div>
        <div class="section-description">${this.localizeEditorKey('program_order', 'description')}</div>
        <bosch-sortable-list
          .items=${items}
          .renderLeading=${(item: BoschSortableListItem) => renderBoschIcon(boschDishwasherAllProgramsMap.get(item.id))}
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
