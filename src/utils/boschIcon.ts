import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { BOSCH_ICONS } from '../generated/icons';
import type { TemplateResult } from 'lit';

export const BOSCH_FALLBACK_ICON = 'mdi:block-helper';

/**
 * Looks an icon up in the build-time-generated `BOSCH_ICONS` map (see scripts/optimize-icons.mjs).
 * The SVGs are inlined into the bundle rather than fetched from `icons/` at runtime, because a
 * HACS plugin install only ever delivers the single file named in hacs.json's `filename` — nested
 * subdirectories never arrive, so there is nothing to fetch. Returns an empty string for an
 * unknown name; callers fall back to BOSCH_FALLBACK_ICON.
 */
export function getInlineSVG(iconName: string): string {
  return BOSCH_ICONS[iconName] ?? '';
}

/**
 * Namespaces every `icon` in a catalog Map under `prefix` (e.g. `'dishwasher/programs'`), so
 * catalog entries only need to name their SVG (`'eco_50'`) rather than its full path.
 */
export function withIconPrefix<T extends { icon?: string }>(prefix: string, entries: Map<string, T>): Map<string, T> {
  return new Map([...entries].map(([key, value]) => [key, value.icon ? { ...value, icon: `${prefix}/${value.icon}` } : value]));
}

export function renderBoschIcon(item: { icon?: string } | undefined): TemplateResult {
  const svg = item?.icon ? getInlineSVG(item.icon) : '';
  if (!svg) {
    return html`<ha-icon .icon=${BOSCH_FALLBACK_ICON}></ha-icon>`;
  }
  return html`${unsafeHTML(svg)}`;
}
