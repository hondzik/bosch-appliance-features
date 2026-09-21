import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      include: [
        'src/utils/entityPrefix.ts',
        'src/utils/orderKeys.ts',
        'src/utils/deviceEntities.ts',
        'src/const/BoschDishWasherPrograms.ts',
        'src/const/BoschDishWasherOptions.ts',
        'src/localize.ts',
      ],
      thresholds: {
        lines: 90,
        statements: 90,
        functions: 90,
        branches: 80,
      },
    },
  },
});
