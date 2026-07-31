import { describe, expect, it } from 'vitest';
import {
  BOSCH_START_IN_RELATIVE_KEY,
  boschDishwasherAllOptionsMap,
  discoverOptions,
  orderOptions,
} from '../src/const/BoschDishWasherOptions';

describe('boschDishwasherAllOptionsMap', () => {
  it('has an entry for the start-in-relative key', () => {
    expect(boschDishwasherAllOptionsMap.get(BOSCH_START_IN_RELATIVE_KEY)?.name).toBe('Start time');
  });
});

describe('discoverOptions', () => {
  it('finds option switches and the start-in-relative select', () => {
    const entityIds = [
      'switch.012_dishcare_dishwasher_option_extradry',
      'select.012_bsh_common_option_startinrelative',
    ];
    const states = {
      'switch.012_dishcare_dishwasher_option_extradry': { state: 'off' },
      'select.012_bsh_common_option_startinrelative': { state: '0:00' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([
      { key: 'startinrelative', entityId: 'select.012_bsh_common_option_startinrelative', kind: 'startInRelative' },
      { key: 'extradry', entityId: 'switch.012_dishcare_dishwasher_option_extradry', kind: 'switch' },
    ]);
  });

  it('ignores binary_sensor mirrors and other domains', () => {
    const entityIds = ['binary_sensor.012_dishcare_dishwasher_option_extradry', 'sensor.012_bsh_common_option_startinrelative'];
    const states = {
      'binary_sensor.012_dishcare_dishwasher_option_extradry': { state: 'off' },
      'sensor.012_bsh_common_option_startinrelative': { state: '0:00' },
    };
    expect(discoverOptions(entityIds, states)).toEqual([]);
  });

  it('dedupes a key exposed under two entity_id schemes, preferring the available one', () => {
    const entityIds = [
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand',
      'switch.012_dishcare_dishwasher_option_silenceondemand',
    ];
    const states = {
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand': { state: 'unavailable' },
      'switch.012_dishcare_dishwasher_option_silenceondemand': { state: 'off' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([{ key: 'silenceondemand', entityId: 'switch.012_dishcare_dishwasher_option_silenceondemand', kind: 'switch' }]);
  });

  it('keeps the last candidate when both duplicate entity_ids are unavailable', () => {
    const entityIds = [
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand',
      'switch.012_dishcare_dishwasher_option_silenceondemand',
    ];
    const states = {
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand': { state: 'unavailable' },
      'switch.012_dishcare_dishwasher_option_silenceondemand': { state: 'unavailable' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([{ key: 'silenceondemand', entityId: 'switch.012_dishcare_dishwasher_option_silenceondemand', kind: 'switch' }]);
  });

  it('passes through a key the catalog does not know', () => {
    const entityIds = ['switch.012_dishcare_dishwasher_option_futureoption'];
    const states = { 'switch.012_dishcare_dishwasher_option_futureoption': { state: 'off' } };
    expect(discoverOptions(entityIds, states)).toEqual([{ key: 'futureoption', entityId: 'switch.012_dishcare_dishwasher_option_futureoption', kind: 'switch' }]);
  });

  it('orders startinrelative first, then the rest alphabetically by key', () => {
    const entityIds = [
      'switch.012_dishcare_dishwasher_option_variospeedplus',
      'switch.012_dishcare_dishwasher_option_extradry',
      'select.012_bsh_common_option_startinrelative',
      'switch.012_dishcare_dishwasher_option_hygieneplus',
    ];
    const states = Object.fromEntries(entityIds.map((id) => [id, { state: 'off' }]));
    const discovered = discoverOptions(entityIds, states);
    expect(discovered.map((d) => d.key)).toEqual(['startinrelative', 'extradry', 'hygieneplus', 'variospeedplus']);
  });

  it('sorts startinrelative first even when the comparator is called with it as the second argument', () => {
    const entityIds = ['select.012_bsh_common_option_startinrelative', 'switch.012_dishcare_dishwasher_option_extradry'];
    const states = Object.fromEntries(entityIds.map((id) => [id, { state: 'off' }]));
    const discovered = discoverOptions(entityIds, states);
    expect(discovered.map((d) => d.key)).toEqual(['startinrelative', 'extradry']);
  });

  it('skips an entity_id with no domain separator', () => {
    expect(discoverOptions(['no_domain_here'], {})).toEqual([]);
  });

  it('treats an unknown state as unavailable when deduping', () => {
    const entityIds = [
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand',
      'switch.012_dishcare_dishwasher_option_silenceondemand',
    ];
    const states = {
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand': { state: 'unknown' },
      'switch.012_dishcare_dishwasher_option_silenceondemand': { state: 'off' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([{ key: 'silenceondemand', entityId: 'switch.012_dishcare_dishwasher_option_silenceondemand', kind: 'switch' }]);
  });

  it('treats a missing state entry as unavailable when deduping', () => {
    const entityIds = [
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand',
      'switch.012_dishcare_dishwasher_option_silenceondemand',
    ];
    const states = {
      'switch.012_dishcare_dishwasher_option_silenceondemand': { state: 'off' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([{ key: 'silenceondemand', entityId: 'switch.012_dishcare_dishwasher_option_silenceondemand', kind: 'switch' }]);
  });

  it('keeps the existing candidate when it is already available', () => {
    const entityIds = [
      'switch.012_dishcare_dishwasher_option_silenceondemand',
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand',
    ];
    const states = {
      'switch.012_dishcare_dishwasher_option_silenceondemand': { state: 'off' },
      'switch.bosch_012_dishcare_dishwasher_option_silenceondemand': { state: 'unavailable' },
    };
    const discovered = discoverOptions(entityIds, states);
    expect(discovered).toEqual([{ key: 'silenceondemand', entityId: 'switch.012_dishcare_dishwasher_option_silenceondemand', kind: 'switch' }]);
  });
});

describe('orderOptions', () => {
  it('returns keys in reported order, all visible, when config is empty', () => {
    expect(orderOptions(['extradry', 'hygieneplus'], {})).toEqual([
      { key: 'extradry', hidden: false },
      { key: 'hygieneplus', hidden: false },
    ]);
  });

  it('drops option_order entries the device no longer reports', () => {
    const ordered = orderOptions(['extradry', 'hygieneplus'], { option_order: ['silenceondemand', 'hygieneplus', 'extradry'] });
    expect(ordered.map((o) => o.key)).toEqual(['hygieneplus', 'extradry']);
  });

  it('appends a newly reported option at the end, visible', () => {
    const ordered = orderOptions(['extradry', 'hygieneplus', 'variospeedplus'], { option_order: ['extradry', 'hygieneplus'] });
    expect(ordered[ordered.length - 1]).toEqual({ key: 'variospeedplus', hidden: false });
  });

  it('marks option_hidden keys as hidden regardless of position', () => {
    const ordered = orderOptions(['extradry', 'hygieneplus'], { option_hidden: ['extradry'] });
    expect(ordered).toEqual([
      { key: 'extradry', hidden: true },
      { key: 'hygieneplus', hidden: false },
    ]);
  });
});
