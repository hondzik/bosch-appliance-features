export type FeatureConfig = {
  type: string;
};

export type BoschDishwasherOptionsFeatureConfig = FeatureConfig & {};

export type BoschDishwasherTimeFeatureConfig = FeatureConfig & {
  show_remaining_time?: boolean;
};

export type BoschDishwasherProgramsFeatureConfig = FeatureConfig & {
  show_machinecare?: boolean;
};

export type BoschOvenControlsFeatureConfig = FeatureConfig & {};

export type BoschDishwasherProgram = {
  name: string;
  icon: string;
  program: string;
};

export type BoschEntity = {
  type: string;
  suffix: string;
};
