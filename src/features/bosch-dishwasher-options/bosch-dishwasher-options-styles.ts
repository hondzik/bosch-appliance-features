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
    gap: 2px;
    height: 100%;
    flex: 1.6;
    border-radius: var(--feature-border-radius, 12px);
    background-color: transparent;
    transition: background-color 180ms ease-in-out;
  }

  .start-in-relative.active,
  .start-in-relative:not(.unavailable):hover {
    background-color: var(--tile-color);
  }

  .start-in-relative.active .icon-wrapper,
  .start-in-relative:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  .start-in-relative.unavailable {
    opacity: 0.4;
  }

  .start-in-relative-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    color: inherit;
    cursor: pointer;
  }

  .start-in-relative-icon:disabled {
    cursor: default;
  }

  .start-in-relative-select {
    --control-select-menu-height: 28px;
    --control-select-menu-padding: 0 4px;
    --control-select-menu-background-color: transparent;
    --control-select-menu-background-opacity: 0;
    --mdc-icon-size: 16px;
    font-size: 0.85em;
  }
`;
