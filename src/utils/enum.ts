export function enumFromKey<E extends Record<string, any>>(enumObj: E, key: string): E[keyof E] | undefined {
    return enumObj[key as keyof E];
}
