import { EBoschModelGroup } from './BoschModels';
import type { BoschDishwasherProgram } from '../types/BoschFeaturesTypes';

export enum EBoschDishwasherProgram {
  auto_1,
  auto_2,
  auto_3,
  auto_half_load,
  eco_50,
  express_60,
  express_sparkle_65,
  glass_40,
  glass_care,
  intelligent,
  intensive_45,
  intensive_70,
  intensive_power,
  magic_daily,
  machinecare,
  maximum_cleaning,
  mixed_load,
  night_wash,
  normal_45,
  normal_65,
  pre_rinse,
  quick_45,
  quick_65,
  quick_n_dry,
  steam_fresh,
  super_60,
}

export const boschDishwasherAllProgramsMap: Map<EBoschDishwasherProgram, BoschDishwasherProgram> = new Map([
  [EBoschDishwasherProgram.auto_1, { name: 'Auto 43-45°C', icon: 'auto', program: 'Dishcare.Dishwasher.Program.Auto1' }],
  [EBoschDishwasherProgram.auto_2, { name: 'Auto 45-65°C', icon: 'auto', program: 'Dishcare.Dishwasher.Program.Auto2' }],
  [EBoschDishwasherProgram.auto_3, { name: 'Auto 65-75°C', icon: 'auto', program: 'Dishcare.Dishwasher.Program.Auto3' }],
  [
    EBoschDishwasherProgram.auto_half_load,
    {
      name: 'Auto Half Load',
      icon: 'auto_half_load',
      program: 'Dishcare.Dishwasher.Program.AutoHalfLoad',
    },
  ], // TODO: icon
  [EBoschDishwasherProgram.eco_50, { name: 'Eco 50°C', icon: 'eco_50', program: 'Dishcare.Dishwasher.Program.Eco50' }],
  [EBoschDishwasherProgram.express_60, { name: 'Express 60°C', icon: 'express_60', program: 'Dishcare.Dishwasher.Program.Kurz60' }],
  [
    EBoschDishwasherProgram.express_sparkle_65,
    {
      name: 'Express Sparkle 65°C',
      icon: 'express_sparkle_65',
      program: 'Dishcare.Dishwasher.Program.ExpressSparkle65',
    },
  ], // TODO: icon
  [EBoschDishwasherProgram.glass_40, { name: 'Glass 40°C', icon: 'glass_40', program: 'Dishcare.Dishwasher.Program.Glas40' }],
  [EBoschDishwasherProgram.glass_care, { name: 'Glass Care', icon: 'glass_care', program: 'Dishcare.Dishwasher.Program.GlassCare' }], // TODO: icon
  [
    EBoschDishwasherProgram.intelligent,
    {
      name: 'Intelligent',
      icon: 'intelligent',
      program: 'Dishcare.Dishwasher.Program.LearningDishwasher',
    },
  ], // TODO: icon
  [
    EBoschDishwasherProgram.intensive_45,
    {
      name: 'Intensive 45°C',
      icon: 'intensive_45',
      program: 'Dishcare.Dishwasher.Program.Intensiv45',
    },
  ], // TODO: icon
  [
    EBoschDishwasherProgram.intensive_70,
    {
      name: 'Intensive 70°C',
      icon: 'intensive_70',
      program: 'Dishcare.Dishwasher.Program.Intensiv70',
    },
  ],
  [
    EBoschDishwasherProgram.intensive_power,
    {
      name: 'Intensive Power',
      icon: 'intensive_power',
      program: 'Dishcare.Dishwasher.Program.IntensivPower',
    },
  ], // TODO: icon
  [
    EBoschDishwasherProgram.magic_daily,
    {
      name: 'Magic Daily',
      icon: 'magic_daily',
      program: 'Dishcare.Dishwasher.Program.MagicDaily',
    },
  ], // TODO: icon
  [
    EBoschDishwasherProgram.machinecare,
    {
      name: 'Machine Care',
      icon: 'machinecare',
      program: 'Dishcare.Dishwasher.Program.MachineCare',
    },
  ],
  [
    EBoschDishwasherProgram.maximum_cleaning,
    {
      name: 'Maximum Cleaning',
      icon: 'maximum_cleaning',
      program: 'Dishcare.Dishwasher.Program.MaximumCleaning',
    },
  ], // TODO: icon
  [EBoschDishwasherProgram.mixed_load, { name: 'Mixed Load', icon: 'mixed_load', program: 'Dishcare.Dishwasher.Program.MixedLoad' }], // TODO: icon
  [EBoschDishwasherProgram.night_wash, { name: 'Silent 50°C', icon: 'silent_50', program: 'Dishcare.Dishwasher.Program.NightWash' }],
  [EBoschDishwasherProgram.normal_45, { name: 'Normal 45°C', icon: 'normal_45', program: 'Dishcare.Dishwasher.Program.Normal45' }], // TODO: icon
  [EBoschDishwasherProgram.normal_65, { name: 'Normal 65°C', icon: 'normal_65', program: 'Dishcare.Dishwasher.Program.Normal65' }], // TODO: icon
  [EBoschDishwasherProgram.pre_rinse, { name: 'Pre-rinse', icon: 'pre_rinse', program: 'Dishcare.Dishwasher.Program.PreRinse' }], // TODO: icon
  [EBoschDishwasherProgram.quick_45, { name: 'Quick 45°C', icon: 'express_45', program: 'Dishcare.Dishwasher.Program.Quick45' }],
  [EBoschDishwasherProgram.quick_65, { name: 'Quick 65°C', icon: 'express_65', program: 'Dishcare.Dishwasher.Program.Quick65' }], // TODO: icon
  [
    EBoschDishwasherProgram.quick_n_dry,
    {
      name: 'Quick Wash & Dry',
      icon: 'quick_n_dry',
      program: 'Dishcare.Dishwasher.Program.QuickD',
    },
  ], // TODO: icon
  [
    EBoschDishwasherProgram.steam_fresh,
    {
      name: 'Steam Fresh',
      icon: 'steam_fresh',
      program: 'Dishcare.Dishwasher.Program.SteamFresh',
    },
  ], // TODO: icon
  [EBoschDishwasherProgram.super_60, { name: 'Super 60°C', icon: 'super_60', program: 'Dishcare.Dishwasher.Program.Super60' }], // TODO: icon
]);

export const boschDishwasherModelProgramsMap: Map<EBoschModelGroup, EBoschDishwasherProgram[]> = new Map([
  [
    EBoschModelGroup.SMV8YCX01E,
    [
      EBoschDishwasherProgram.eco_50,
      EBoschDishwasherProgram.auto_2,
      EBoschDishwasherProgram.intensive_70,
      EBoschDishwasherProgram.express_60,
      EBoschDishwasherProgram.quick_45,
      EBoschDishwasherProgram.glass_40,
      EBoschDishwasherProgram.night_wash,
      EBoschDishwasherProgram.machinecare,
    ],
  ],
  [
    EBoschModelGroup.SMV8YCX02E,
    [
      EBoschDishwasherProgram.eco_50,
      EBoschDishwasherProgram.auto_2,
      EBoschDishwasherProgram.intensive_70,
      EBoschDishwasherProgram.express_60,
      EBoschDishwasherProgram.intelligent,
      EBoschDishwasherProgram.glass_40,
      EBoschDishwasherProgram.night_wash,
      EBoschDishwasherProgram.machinecare,
    ],
  ],
]);
