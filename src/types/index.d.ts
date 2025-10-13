import { HomeAssistant } from "custom-card-helpers";
import type { HassEntity } from "home-assistant-js-websocket";

export {};

declare global {
    interface Window {
        customCardFeatures: CustomCardFeature[];
        customCards: CustomCard[];
    }

    interface CustomCardFeature {
        type: string;
        name: string;
        configurable?: boolean;
        supported?: (hass: HomeAssistant, context: LovelaceCardFeatureContext ) => boolean;
    }

    interface CustomCard {
        type: string;
        name: string;
        description: string;
    }

    interface TileWithConfig extends HTMLElement {
        config?: { 
            entity?: string 
        };
    }



    export type BoschApplianceCustomFeatureConfig = BoschDishwasherProgramsFeatureConfig

    export type LovelaceCardFeaturePosition = "bottom" | "inline";


    export interface LovelaceCardFeature extends HTMLElement {
        hass?: HomeAssistant;
        context?: LovelaceCardFeatureContext;
        setConfig(config: BoschApplianceCustomFeatureConfig): void;
        color?: string;
        position?: LovelaceCardFeaturePosition;
    }

    export interface LovelaceCardFeatureContext {
        entity_id?: string;
        area_id?: string;
    }

    export interface LovelaceCardFeatureEditor
        extends LovelaceGenericElementEditor {
        setConfig(config: BoschApplianceCustomFeatureConfig): void;
    }    

    export interface LovelaceGenericElementEditor<C = any> extends HTMLElement {
        hass?: HomeAssistant;
        lovelace?: any;
        context?: C;
        schema?: any;
        setConfig(config: any): void;
        focusYamlEditor?: () => void;
    }
}