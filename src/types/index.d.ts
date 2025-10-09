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
        supported?: (stateObj: HassEntity) => boolean;
    }

    interface CustomCard {
        type: string;
        name: string;
        description: string;
    }
}