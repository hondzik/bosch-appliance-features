import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { version } from '../../package.json';
import type { TemplateResult } from 'lit';

export const BOSCH_FALLBACK_ICON = 'mdi:block-helper';

/**
 * Base URL of the shipped `icons/` directory, derived from this module's own location instead of
 * being hardcoded: HACS serves the bundle from `/hacsfiles/<repo>/`, a manual install from
 * `/local/<wherever>/`, and both keep `icons/` as a sibling of the bundle — so resolving relative
 * to `import.meta.url` works for either without knowing which one we're in.
 */
const ICONS_BASE_URL = new URL('./icons/', import.meta.url).href;

const iconCache = new Map<string, string>();

export async function getInlineSVG(iconName: string): Promise<string> {
  if (!iconCache.has(iconName)) {
    const res = await fetch(`${ICONS_BASE_URL}${iconName}.svg?v=${version}`);
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
