import type { HomeAssistant } from 'custom-card-helpers';

// hass.entities is populated by the HA frontend but not declared on custom-card-helpers' HomeAssistant type.
export function getDeviceEntityIds(hass: HomeAssistant, entityId: string | undefined): string[] {
  const entities = (hass as unknown as { entities?: Record<string, { device_id?: string }> }).entities ?? {};
  const deviceId = entityId ? entities[entityId]?.device_id : undefined;
  if (!deviceId) return [];

  return Object.entries(entities)
    .filter(([, entity]) => entity.device_id === deviceId)
    .map(([id]) => id);
}
