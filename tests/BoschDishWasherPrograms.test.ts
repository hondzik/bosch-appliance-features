import { describe, expect, it } from 'vitest';
import { BOSCH_DISHWASHER_PROGRAM_PREFIX, boschDishwasherAllProgramsMap, orderPrograms } from '../src/const/BoschDishWasherPrograms';

const opt = (key: string) => `${BOSCH_DISHWASHER_PROGRAM_PREFIX}${key}`;

describe('boschDishwasherAllProgramsMap', () => {
  it('has an icon for known programs and no icon for programs pending an SVG', () => {
    expect(boschDishwasherAllProgramsMap.get('Eco50')?.icon).toBe('eco_50');
    expect(boschDishwasherAllProgramsMap.get('PreRinse')?.icon).toBeUndefined();
  });
});

describe('orderPrograms', () => {
  it('returns options in reported order, all visible, when config is empty', () => {
    const options = [opt('Eco50'), opt('Auto2'), opt('PreRinse')];
    expect(orderPrograms(options, {})).toEqual([
      { key: 'Eco50', hidden: false },
      { key: 'Auto2', hidden: false },
      { key: 'PreRinse', hidden: false },
    ]);
  });

  it('applies program_order first, then appends any remaining reported programs', () => {
    const options = [opt('Eco50'), opt('Auto2'), opt('PreRinse')];
    const ordered = orderPrograms(options, { program_order: ['PreRinse', 'Eco50'] });
    expect(ordered.map((p) => p.key)).toEqual(['PreRinse', 'Eco50', 'Auto2']);
  });

  it('drops program_order entries the device no longer reports', () => {
    const options = [opt('Eco50'), opt('Auto2')];
    const ordered = orderPrograms(options, { program_order: ['MachineCare', 'Auto2', 'Eco50'] });
    expect(ordered.map((p) => p.key)).toEqual(['Auto2', 'Eco50']);
  });

  it('marks program_hidden keys as hidden regardless of their position', () => {
    const options = [opt('Eco50'), opt('Auto2'), opt('MachineCare')];
    const ordered = orderPrograms(options, { program_hidden: ['MachineCare'] });
    expect(ordered).toEqual([
      { key: 'Eco50', hidden: false },
      { key: 'Auto2', hidden: false },
      { key: 'MachineCare', hidden: true },
    ]);
  });

  it('appends a newly reported program at the end, visible', () => {
    const options = [opt('Eco50'), opt('Auto2'), opt('PreRinse')];
    const ordered = orderPrograms(options, { program_order: ['Eco50', 'Auto2'] });
    expect(ordered[ordered.length - 1]).toEqual({ key: 'PreRinse', hidden: false });
  });
});
