import { describe, expect, it } from 'vitest';
import setupCustomLocalize from '../src/localize';
import type { HomeAssistant } from 'custom-card-helpers';

const hassWithLang = (language: string) => ({ locale: { language } }) as unknown as HomeAssistant;

describe('setupCustomLocalize', () => {
  it('returns the translated string for the requested language', () => {
    const localize = setupCustomLocalize(hassWithLang('cs'));
    expect(localize('dishwasher.programs.feature-name')).toBe('Programy myčky');
  });

  it('falls back to English when the requested language is not in the catalog', () => {
    const localize = setupCustomLocalize(hassWithLang('xx'));
    expect(localize('oven.programs.feature-name')).toBe('Oven programs');
  });

  it('falls back to English when hass is undefined', () => {
    const localize = setupCustomLocalize(undefined);
    expect(localize('dishwasher.programs.feature-name')).toBe('Dishwasher programs');
  });

  it('returns the key itself when the key exists in no language', () => {
    const localize = setupCustomLocalize(hassWithLang('en'));
    expect(localize('dishwasher.programs.does_not_exist')).toBe('dishwasher.programs.does_not_exist');
  });
});
