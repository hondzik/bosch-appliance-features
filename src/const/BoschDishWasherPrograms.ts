import { orderKeys } from '../utils/orderKeys';
import type { BoschDishwasherProgram } from '../types/BoschFeaturesTypes';
import type { OrderedKey } from '../utils/orderKeys';

export const BOSCH_DISHWASHER_PROGRAM_PREFIX = 'Dishcare.Dishwasher.Program.';

/**
 * Programs without an `icon` fall back to BOSCH_PROGRAM_FALLBACK_ICON until a matching SVG is
 * added to src/assets/icons/: AutoHalfLoad, ExpressSparkle65, GlassCare, LearningDishwasher,
 * Intensiv45, IntensivPower, MagicDaily, MaximumCleaning, MixedLoad, Normal45, Normal65, PreRinse,
 * Quick65, QuickD, SteamFresh, Super60.
 */
export const boschDishwasherAllProgramsMap: Map<string, BoschDishwasherProgram> = new Map([
  ['Auto1', { name: 'Auto 43-45°C', icon: 'auto' }],
  ['Auto2', { name: 'Auto 45-65°C', icon: 'auto' }],
  ['Auto3', { name: 'Auto 65-75°C', icon: 'auto' }],
  ['AutoHalfLoad', { name: 'Auto Half Load' }],
  ['Eco50', { name: 'Eco 50°C', icon: 'eco_50' }],
  ['Kurz60', { name: 'Express 60°C', icon: 'express_60' }],
  ['ExpressSparkle65', { name: 'Express Sparkle 65°C' }],
  ['Glas40', { name: 'Glass 40°C', icon: 'glass_40' }],
  ['GlassCare', { name: 'Glass Care' }],
  ['LearningDishwasher', { name: 'Intelligent' }],
  ['Intensiv45', { name: 'Intensive 45°C' }],
  ['Intensiv70', { name: 'Intensive 70°C', icon: 'intensive_70' }],
  ['IntensivPower', { name: 'Intensive Power' }],
  ['MagicDaily', { name: 'Magic Daily' }],
  ['MachineCare', { name: 'Machine Care', icon: 'machinecare' }],
  ['MaximumCleaning', { name: 'Maximum Cleaning' }],
  ['MixedLoad', { name: 'Mixed Load' }],
  ['NightWash', { name: 'Silent 50°C', icon: 'silent_50' }],
  ['Normal45', { name: 'Normal 45°C' }],
  ['Normal65', { name: 'Normal 65°C' }],
  ['PreRinse', { name: 'Pre-rinse' }],
  ['Quick45', { name: 'Quick 45°C', icon: 'express_45' }],
  ['Quick65', { name: 'Quick 65°C' }],
  ['QuickD', { name: 'Quick Wash & Dry' }],
  ['SteamFresh', { name: 'Steam Fresh' }],
  ['Super60', { name: 'Super 60°C' }],
]);

export type OrderedProgram = OrderedKey;

/**
 * Merges the programs actually reported by the device (`options`, full option IDs) with the
 * user-configured order/visibility. Programs no longer reported drop out; new ones appear at the
 * end, visible.
 */
export function orderPrograms(options: string[], config: { program_order?: string[]; program_hidden?: string[] }): OrderedProgram[] {
  const keys = options.map((o) => o.slice(BOSCH_DISHWASHER_PROGRAM_PREFIX.length));
  return orderKeys(keys, config.program_order, config.program_hidden);
}
