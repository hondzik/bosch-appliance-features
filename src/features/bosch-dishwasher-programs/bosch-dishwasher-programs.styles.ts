import { css } from "lit";

export const BoschDishwasherProgramsFeatureStyles = css`
  .switches {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  ha-icon-button {
    --mdc-icon-button-size: 48px;
    --mdc-icon-size: 32px;
    width: var(--mdc-icon-button-size);
    height: var(--mdc-icon-button-size);
  }

  ha-icon-button svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: currentColor;
  }
`;

export const BoschDishwasherProgramsEditorStyles = css``;