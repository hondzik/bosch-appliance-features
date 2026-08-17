import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { name as appName, version } from '../../package.json';
import type { TemplateResult } from 'lit';

export const BOSCH_FALLBACK_ICON = 'mdi:block-helper';

const iconCache = new Map<string, string>();

export async function getInlineSVG(iconName: string): Promise<string> {
  if (!iconCache.has(iconName)) {
    const res = await fetch(`/hacsfiles/${appName}/icons/${iconName}.svg?v=${version}`);
    if (!res.ok) {
      return '';
    }
    const svgText = (await res.text()).replace(/#000000|#000/g, 'currentColor');
    iconCache.set(iconName, svgText);
  }
  return iconCache.get(iconName)!;
}

/**
 * Namespaces every `icon` in a catalog Map under `prefix` (e.g. `'dishwasher/programs'`), so
 * catalog entries only need to name their SVG (`'eco_50'`) rather than its full path.
 */
export function withIconPrefix<T extends { icon?: string }>(prefix: string, entries: Map<string, T>): Map<string, T> {
  return new Map([...entries].map(([key, value]) => [key, value.icon ? { ...value, icon: `${prefix}/${value.icon}` } : value]));
}

export function renderBoschIcon(item: { icon?: string } | undefined): TemplateResult {
  if (!item?.icon) {
    return html`<ha-icon .icon=${BOSCH_FALLBACK_ICON}></ha-icon>`;
  }
  const svg = getInlineSVG(item.icon).then((s) => unsafeHTML(s));
  return html`${until(svg, html`<ha-spinner size="small"></ha-spinner>`)}`;
}
