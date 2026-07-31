import { css } from 'lit';

export const BoschDishwasherProgramsFeatureStyles = css`
  ha-control-button.pending,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.pending .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }
`;
