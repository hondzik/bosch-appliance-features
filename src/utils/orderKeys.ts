export type OrderedKey = { key: string; hidden: boolean };

/**
 * Merges the keys actually reported by a device with the user-configured order/visibility. Keys
 * no longer reported drop out; new ones appear at the end, visible.
 */
export function orderKeys(keys: string[], order?: string[], hidden?: string[]): OrderedKey[] {
  const hiddenSet = new Set(hidden ?? []);
  const ordered = (order ?? []).filter((k) => keys.includes(k));
  const rest = keys.filter((k) => !ordered.includes(k));
  return [...ordered, ...rest].map((key) => ({ key, hidden: hiddenSet.has(key) }));
}
