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

export function renderBoschIcon(item: { icon?: string } | undefined): TemplateResult {
  if (!item?.icon) {
    return html`<ha-icon .icon=${BOSCH_FALLBACK_ICON}></ha-icon>`;
  }
  const svg = getInlineSVG(item.icon).then((s) => unsafeHTML(s));
  return html`${until(svg, html`<ha-spinner size="small"></ha-spinner>`)}`;
}
