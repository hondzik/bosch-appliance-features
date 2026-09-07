import type { HomeAssistant } from '../types/HomeAssistant';

export function getDeviceEntityIds(hass: HomeAssistant, entityId: string | undefined): string[] {
  const entities = hass.entities ?? {};
  const deviceId = entityId ? entities[entityId]?.device_id : undefined;
  if (!deviceId) return [];

  return Object.entries(entities)
    .filter(([, entity]) => entity.device_id === deviceId)
    .map(([id]) => id);
}
