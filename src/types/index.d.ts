import { HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import { BoschDishwasherProgramsFeatureConfig, BoschDishwasherOptionsFeatureConfig, BoschDishwasherTimeFeatureConfig } from './BoschDishwasherFeaturesTypes';

export {};

declare global {
  interface Window {
    customCardFeatures: CustomCardFeature[];
  }

  interface CustomCardFeature {
    type: string;
    name: string;
    configurable?: boolean;
    supported?: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
  }

  interface TileWithConfig extends HTMLElement {
    config?: {
      entity?: string;
    };
  }

  export type BoschApplianceCustomFeatureConfig = BoschDishwasherProgramsFeatureConfig | BoschDishwasherOptionsFeatureConfig | BoschDishwasherTimeFeatureConfig;

  export interface LovelaceCardFeature extends HTMLElement {
    hass?: HomeAssistant;
    /** @deprecated Use `context` instead */
    stateObj?: HassEntity;
    context?: LovelaceCardFeatureContext;
    setConfig(config: BoschApplianceCustomFeatureConfig): void;
    color?: string;
    position?: LovelaceCardFeaturePosition;
  }

  export type LovelaceCardFeaturePosition = 'bottom' | 'inline';

  export interface LovelaceCardFeatureContext {
    entity_id?: string;
    area_id?: string;
  }

  export interface LovelaceCardFeatureEditor extends HTMLElement {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    setConfig(config: BoschApplianceCustomFeatureConfig): void;
  }
}
