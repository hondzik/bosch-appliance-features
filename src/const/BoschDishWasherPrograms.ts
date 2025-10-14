import { EBoschModels } from "./BoschModels";

export enum EBoschDishwasherProgram {
    eco_50,
    auto_45_65,
    intensive_70,
    express_60,
    express_45,
    glass_40,
    silent_50,
    machinecare
}

export const boschDishwasherAllProgramsMap: Map<EBoschDishwasherProgram, BoschDishwasherProgram> = new Map([
    [EBoschDishwasherProgram.eco_50, { name: "Eco 50°C", icon: "Eco_50", program: "Dishcare.Dishwasher.Program.Eco50" }],
    [EBoschDishwasherProgram.auto_45_65, { name: "Auto 45-65°C", icon: "Auto_45-65", program: "Dishcare.Dishwasher.Program.Auto2" }],
    [EBoschDishwasherProgram.intensive_70, { name: "Intensive 70°C", icon: "Intensive_70", program: "Dishcare.Dishwasher.Program.Intensiv70" }],
    [EBoschDishwasherProgram.express_60, { name: "Express 60°C", icon: "Express_60", program: "Dishcare.Dishwasher.Program.Kurz60" }],
    [EBoschDishwasherProgram.express_45, { name: "Quick 45°C", icon: "Express_45", program: "Dishcare.Dishwasher.Program.Quick45" }],
    [EBoschDishwasherProgram.glass_40, { name: "Glass 40°C", icon: "Glass_40", program: "Dishcare.Dishwasher.Program.Glas40" }],
    [EBoschDishwasherProgram.silent_50, { name: "Silent 50°C", icon: "Silent_50", program: "Dishcare.Dishwasher.Program.NightWash" }],
    [EBoschDishwasherProgram.machinecare, { name: "Machine Care", icon: "MachineCare", program: "Dishcare.Dishwasher.Program.MachineCare" }]
]);

export const boschDishwasherModelProgramsMap: Map<EBoschModels, EBoschDishwasherProgram[]> = new Map([
    [EBoschModels.SMV8YCX01E, [
        EBoschDishwasherProgram.eco_50,
        EBoschDishwasherProgram.auto_45_65,
        EBoschDishwasherProgram.intensive_70,
        EBoschDishwasherProgram.express_60,
        EBoschDishwasherProgram.express_45,
        EBoschDishwasherProgram.glass_40,
        EBoschDishwasherProgram.silent_50,
        EBoschDishwasherProgram.machinecare
    ]],
]);