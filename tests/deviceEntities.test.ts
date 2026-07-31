import { describe, expect, it } from 'vitest';
import { getDeviceEntityIds } from '../src/utils/deviceEntities';
import type { HomeAssistant } from 'custom-card-helpers';

function makeHass(entities: Record<string, { device_id?: string }>): HomeAssistant {
  return { entities } as unknown as HomeAssistant;
}

describe('getDeviceEntityIds', () => {
  it('returns an empty array when hass.entities is missing', () => {
    const hass = {} as unknown as HomeAssistant;
    expect(getDeviceEntityIds(hass, 'switch.foo_bar')).toEqual([]);
  });

  it('returns an empty array when entityId is undefined', () => {
    const hass = makeHass({ 'switch.foo_bar': { device_id: 'device-1' } });
    expect(getDeviceEntityIds(hass, undefined)).toEqual([]);
  });

  it('returns an empty array when entityId is not found in hass.entities', () => {
    const hass = makeHass({ 'switch.foo_bar': { device_id: 'device-1' } });
    expect(getDeviceEntityIds(hass, 'switch.unknown')).toEqual([]);
  });

  it('returns an empty array when the matched entity has no device_id', () => {
    const hass = makeHass({ 'switch.foo_bar': {} });
    expect(getDeviceEntityIds(hass, 'switch.foo_bar')).toEqual([]);
  });

  it('returns all entity_ids sharing the same device_id, excluding other devices', () => {
    const hass = makeHass({
      'switch.foo_bar': { device_id: 'device-1' },
      'select.foo_baz': { device_id: 'device-1' },
      'sensor.other_device': { device_id: 'device-2' },
    });
    expect(getDeviceEntityIds(hass, 'switch.foo_bar').sort()).toEqual(['select.foo_baz', 'switch.foo_bar']);
  });
});
