import { withIconPrefix } from '../utils/boschIcon';
import { orderKeys } from '../utils/orderKeys';
import type { BoschCatalogItem } from '../types/BoschFeaturesTypes';
import type { OrderedKey } from '../utils/orderKeys';

export const BOSCH_DISHWASHER_OPTION_MARKER = 'dishcare_dishwasher_option_';
export const BOSCH_START_IN_RELATIVE_SUFFIX = 'bsh_common_option_startinrelative';
export const BOSCH_START_IN_RELATIVE_KEY = 'startinrelative';

/**
 * None of these have a matching SVG in src/assets/icons/dishwasher/options/ yet (the catalog used
 * to reference start_time, extra_dry, hygiene_plus, intensive_zone, perfect_speed_plus, none of
 * which exist) — every option falls back to BOSCH_FALLBACK_ICON until icons are added.
 */
export const boschDishwasherAllOptionsMap: Map<string, BoschCatalogItem> = withIconPrefix<BoschCatalogItem>(
  'dishwasher/options',
  new Map([
    [BOSCH_START_IN_RELATIVE_KEY, { name: 'Start time', icon: 'startinrelative' }],
    ['brilliancedry', { name: 'BrilliantDry' }],
    ['ecodry', { name: 'EcoDry' }],
    ['extradry', { name: 'ExtraDry', icon: 'extradry' }],
    ['halfload', { name: 'Half Load', icon: 'halfload' }],
    ['hygieneplus', { name: 'Hygiene+' }],
    ['intensivzone', { name: 'IntensiveZone', icon: 'intensivezone' }],
    ['silenceondemand', { name: 'Silence on Demand' }],
    ['variospeedplus', { name: 'SpeedPerfect+' }],
    ['zeolitedry', { name: 'ZeoliteDry' }],
  ]),
);

export type DiscoveredOption = { key: string; entityId: string; kind: 'switch' | 'startInRelative' };

function isUnavailable(state: { state: string } | undefined): boolean {
  return !state || state.state === 'unavailable' || state.state === 'unknown';
}

/**
 * Scans a device's entity_ids for dishwasher option switches and the start-in-relative select.
 * A device can expose the same option under two different object_id schemes (e.g. an orphaned
 * `bosch_<id>_...` duplicate alongside the real `<id>_...` entity) — these are deduplicated by
 * key, preferring whichever entity_id is not currently unavailable/unknown.
 */
export function discoverOptions(entityIds: string[], states: Record<string, { state: string } | undefined>): DiscoveredOption[] {
  const byKey = new Map<string, DiscoveredOption>();

  for (const entityId of entityIds) {
    const [domain, objectId] = entityId.split('.', 2);
    if (!objectId) continue;

    let candidate: DiscoveredOption | undefined;
    if (domain === 'switch' && objectId.includes(BOSCH_DISHWASHER_OPTION_MARKER)) {
      const key = objectId.slice(objectId.indexOf(BOSCH_DISHWASHER_OPTION_MARKER) + BOSCH_DISHWASHER_OPTION_MARKER.length);
      candidate = { key, entityId, kind: 'switch' };
    } else if (domain === 'select' && objectId.endsWith(BOSCH_START_IN_RELATIVE_SUFFIX)) {
      candidate = { key: BOSCH_START_IN_RELATIVE_KEY, entityId, kind: 'startInRelative' };
    }
    if (!candidate) continue;

    const existing = byKey.get(candidate.key);
    if (!existing || isUnavailable(states[existing.entityId])) {
      byKey.set(candidate.key, candidate);
    }
  }

  return [...byKey.values()].sort((a, b) => {
    if (a.key === BOSCH_START_IN_RELATIVE_KEY) return -1;
    if (b.key === BOSCH_START_IN_RELATIVE_KEY) return 1;
    return a.key.localeCompare(b.key);
  });
}

export function orderOptions(keys: string[], config: { option_order?: string[]; option_hidden?: string[] }): OrderedKey[] {
  return orderKeys(keys, config.option_order, config.option_hidden);
}
