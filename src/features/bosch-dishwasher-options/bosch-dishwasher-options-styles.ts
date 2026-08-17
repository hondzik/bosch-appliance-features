import { css } from 'lit';

export const BoschDishwasherOptionsFeatureStyles = css`
  ha-control-button.pending,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.pending .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  .start-in-relative {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 100%;
    flex: 1.6;
  }

  .start-in-relative ha-control-button {
    flex: none;
  }

  .start-in-relative-select {
    height: 28px;
    border-radius: 8px;
    border: none;
    background-color: var(--control-button-background-color, rgba(0, 0, 0, 0.05));
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: 0.85em;
    padding: 0 4px;
  }

  .start-in-relative-select:disabled {
    opacity: 0.4;
  }
`;
