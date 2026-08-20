import { css } from 'lit';

export const BoschDishwasherTimeFeatureStyles = css`
  :host {
    height: var(--feature-height, 42px);
    width: 100%;
    padding: 0px;
    outline: 0px;
    overflow: hidden;
  }

  .bosch-dishwasher-time-feature {
    display: flex;
    align-items: center; /* vertikální zarovnání */
    justify-content: space-between; /* mezery mezi prvky */
    gap: 8px; /* volitelně mezera mezi prvky */
    width: 100%;
    height: var(--feature-height, 42px);
  }

  .bosch-dishwasher-time-feature > * {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content; /* jen tolik místa, kolik obsah potřebuje */
  }

  .bosch-dishwasher-time-feature > [hidden] {
    display: none;
  }

  .bosch-dishwasher-time-feature ha-control-button.unavailable {
    opacity: 0.4;
  }

  .bosch-dishwasher-time-feature .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .bosch-dishwasher-time-feature .time-graph {
    flex: 1; /* roztáhne se na zbylý prostor */
    display: block; /* override the centering flex from the .bosch-dishwasher-time-feature > * rule */
    position: relative;
    min-height: 11px;
    border-radius: 5px;
    overflow: hidden;

    border: 1px solid var(--tile-color);
    background-color: color-mix(in srgb, var(--tile-color) 20%, transparent);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }

  .bosch-dishwasher-time-feature .time-graph .level {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--tile-color);
    transition: width 400ms ease-in-out;
  }

  .bosch-dishwasher-time-feature .time-remaining {
    min-width: 35px;
    justify-content: flex-end; /* obsah zarovnán doprava */
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }
`;

export const BoschDishwasherTimeEditorStyles = css``;
