import { describe, expect, it } from 'vitest';
import { orderKeys } from '../src/utils/orderKeys';

describe('orderKeys', () => {
  it('returns keys in reported order, all visible, when order/hidden are empty', () => {
    expect(orderKeys(['a', 'b', 'c'])).toEqual([
      { key: 'a', hidden: false },
      { key: 'b', hidden: false },
      { key: 'c', hidden: false },
    ]);
  });

  it('applies order first, then appends any remaining keys', () => {
    const ordered = orderKeys(['a', 'b', 'c'], ['c', 'a']);
    expect(ordered.map((o) => o.key)).toEqual(['c', 'a', 'b']);
  });

  it('drops order entries no longer present in keys', () => {
    const ordered = orderKeys(['a', 'b'], ['z', 'b', 'a']);
    expect(ordered.map((o) => o.key)).toEqual(['b', 'a']);
  });

  it('marks hidden keys as hidden regardless of position', () => {
    const ordered = orderKeys(['a', 'b', 'c'], undefined, ['b']);
    expect(ordered).toEqual([
      { key: 'a', hidden: false },
      { key: 'b', hidden: true },
      { key: 'c', hidden: false },
    ]);
  });

  it('appends a newly reported key at the end, visible', () => {
    const ordered = orderKeys(['a', 'b', 'c'], ['a', 'b']);
    expect(ordered[ordered.length - 1]).toEqual({ key: 'c', hidden: false });
  });
});
