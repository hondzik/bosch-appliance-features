import { css } from 'lit';

export const CommonEditorStyles = css`
  .settings {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .settings ha-settings-row {
    align-items: center;
  }

  .settings ha-settings-row [slot='heading'] {
    font-weight: 500;
    flex: 1;
  }

  .settings ha-settings-row [slot='description'] {
    color: var(--secondary-text-color);
    white-space: normal;
    flex: 1;
  }

  .settings ha-switch {
    flex-shrink: 0;
    margin-left: 16px;
  }

  .section-heading {
    font-weight: 500;
  }

  .section-description {
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }
`;

export const CommonFeatureButtonBarStyles = css`
  :host {
    height: var(--feature-height, 42px);
    width: 100%;
    padding: 0px;
    outline: 0px;
    overflow: hidden;
  }

  ha-control-button-group {
    gap: 0px !important;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: var(--feature-border-radius, 12px);
    padding: 0px;
    margin: 0px;
    outline: 0px;
    flex-basis: 100%;
  }

  ha-control-button {
    --control-button-background-color: transparent;
    --control-button-background-opacity: 1;
    --control-button-border-radius: var(--feature-border-radius, 12px);
    border-radius: var(--feature-border-radius, 12px);
    height: var(--feature-height, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  ha-control-button.active,
  ha-control-button:not(.unavailable):hover {
    --control-button-background-color: var(--tile-color);
    --control-button-background-opacity: var(--tile-opacity);
  }

  ha-control-button.unavailable {
    opacity: 0.4;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--tile-color);
    transition: color 180ms ease-in-out;
  }

  ha-control-button.active .icon-wrapper,
  ha-control-button:not(.unavailable):hover .icon-wrapper {
    color: white;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
