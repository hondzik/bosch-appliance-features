import { describe, expect, it } from 'vitest';
import { resolveEntityPrefix } from '../src/utils/entityPrefix';

describe('resolveEntityPrefix', () => {
  it('returns undefined when entityId is undefined', () => {
    expect(resolveEntityPrefix(undefined, 1)).toBeUndefined();
  });

  it('returns the first N underscore-separated segments of the object_id', () => {
    expect(resolveEntityPrefix('switch.012020517384003994_bsh_common_setting_powerstate', 1)).toBe('012020517384003994');
  });

  it('joins multiple segments when prefixLength > 1', () => {
    expect(resolveEntityPrefix('sensor.bosch_hsg636xs6_aabbccddeeff_program_name', 3)).toBe('bosch_hsg636xs6_aabbccddeeff');
  });

  it('returns undefined when entityId has no domain separator', () => {
    expect(resolveEntityPrefix('not_a_valid_entity_id', 1)).toBeUndefined();
  });

  it('returns all available segments when prefixLength exceeds the object_id length', () => {
    expect(resolveEntityPrefix('switch.foo_bar', 5)).toBe('foo_bar');
  });
});
