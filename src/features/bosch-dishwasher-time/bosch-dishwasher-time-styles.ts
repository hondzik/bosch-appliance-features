import { css } from 'lit';

export const BoschDishwasherTimeFeatureStyles = css`
    :host {
        height: var(--feature-height, 42px);
        width: 100%;
        padding: 0px;
        outline: 0px;
        overflow: hidden;
    }

    .bosh-dishwasher-time-feature {
        display: flex;
        align-items: center;    /* vertikální zarovnání */
        justify-content: space-between; /* mezery mezi prvky */
        gap: 8px;               /* volitelně mezera mezi prvky */
        width: 100%;
    }

    .bosh-dishwasher-time-feature > * {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: fit-content; /* jen tolik místa, kolik obsah potřebuje */
    }

    .bosh-dishwasher-time-feature .time-graph {
        flex: 1; /* roztáhne se na zbylý prostor */
    }

    .bosh-dishwasher-time-feature .time-graph .background {
        width: 100%
        height: 8px;
        border-radius: 5px;
        border: 1px solid rgba(var(--rgb-primary-color), 0.8);
        background-color: rgba(var(--rgb-primary-color), 0.3);
    }    
    
    .bosh-dishwasher-time-feature .time-graph .level {
        height: 100%;
        background-color: rgba(var(--rgb-primary-color), 0.7);
    }

    .bosh-dishwasher-time-feature .time-remaining {
        width: 35px;
        justify-content: flex-end;  /* obsah zarovnán doprava */
        font-size: var(--ha-font-size-s);
        font-weight: var(--ha-font-weight-normal);
        letter-spacing: 0.4px;
        color: var(--primary-text-color);
    }        
`;

export const BoschDishwasherTimeEditorStyles = css``;
