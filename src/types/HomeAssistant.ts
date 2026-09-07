import type { HassEntities } from 'home-assistant-js-websocket';

// Minimal subset of the Home Assistant frontend's `hass` object that this bundle's
// features/editors actually read. `entities` isn't part of any published HA types package —
// it's populated directly by the HA frontend for device/entity-registry lookups (see
// getDeviceEntityIds()).
export interface HomeAssistant {
  states: HassEntities;
  entities: Record<string, { device_id?: string }>;
  locale: { language: string };
  callService: (domain: string, service: string, serviceData?: Record<string, unknown>) => Promise<void>;
}
