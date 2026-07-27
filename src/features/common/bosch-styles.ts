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
`;
