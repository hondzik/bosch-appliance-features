export function resolveEntityPrefix(entityId: string | undefined, prefixLength: number): string | undefined {
  return entityId?.split('.')[1]?.split('_').slice(0, prefixLength).join('_');
}
