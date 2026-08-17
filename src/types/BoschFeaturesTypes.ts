export type FeatureConfig = {
  type: string;
};

export type BoschDishwasherOptionsFeatureConfig = FeatureConfig & {
  option_order?: string[];
  option_hidden?: string[];
};

export type BoschDishwasherTimeFeatureConfig = FeatureConfig & {
  show_remaining_time?: boolean;
};

export type BoschDishwasherProgramsFeatureConfig = FeatureConfig & {
  program_order?: string[];
  program_hidden?: string[];
};

export type BoschOvenControlsFeatureConfig = FeatureConfig & {};

export type BoschCatalogItem = {
  name: string;
  icon?: string;
};

export type BoschEntity = {
  type: string;
  suffix: string;
};
