/**
Bosch SMV4HVX03E – Plně vestavná myčka s Wi-Fi připojením. 
Bosch SMV2ITX09E – Vestavná myčka s Wi-Fi připojením a funkcí Home Connect. 
Bosch SMV2HVX02E – Plně vestavná myčka s Wi-Fi připojením. 
Bosch SPU2HKS41E – Vestavná myčka s panelem 45 cm a podporou Wi-Fi připojení. 
Bosch SPV4EMX25E – Vestavná myčka s Wi-Fi připojením. 
Bosch SMS8YCI03E: Volně stojící myčka s Wi-Fi připojením a funkcí Home Connect. 
Bosch SMS8ECI02Z: Volně stojící myčka s Wi-Fi připojením a funkcí Home Connect.
 */

export enum EBoschModelGroup {
    // dishwashers
    SMV8YCX01E = "SMV8YCX01E",
    SMV8YCX02E = "SMV8YCX02E",
}

export enum EBoschModel {
    // dishwashers
    SMV8YCX01E = "SMV8YCX01E",
    SMV8YCX02E = "SMV8YCX02E",
}

export const boschModelGroupMap: Map<EBoschModel, EBoschModelGroup> = new Map([
    [EBoschModel.SMV8YCX01E, EBoschModelGroup.SMV8YCX01E],
    [EBoschModel.SMV8YCX02E, EBoschModelGroup.SMV8YCX02E],
])