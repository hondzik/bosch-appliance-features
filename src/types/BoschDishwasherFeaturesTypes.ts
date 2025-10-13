type FeatureConfig = {
    type: string;
};

type BoschDishwasherOptionsFeatureConfig = FeatureConfig & {};

type BoschDishwasherTimeFeatureConfig = FeatureConfig & {};

type BoschDishwasherProgramsFeatureConfig = FeatureConfig & {
    show_as_button_bar?: boolean;
    icons_with_text?: boolean;
    show_machinecare?: boolean;
};

type BoschDishwasherProgram = {
    name: string;
    icon: string;
    program: string;
}

type BoschEntities = {
    type: string;
    suffix: string;
}