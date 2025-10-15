import { css } from 'lit';

export const CommonEditorStyles = css`
  .settings {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .settings ha-settings-row {
    align-items: center;
    flex-wrap: wrap;
  }

  .settings ha-settings-row [slot='heading'] {
    font-weight: 500;
  }

  .settings ha-settings-row [slot='description'] {
    color: var(--secondary-text-color);
    max-width: 70%; /* zabrání, aby text přetékal pod přepínač */
    white-space: normal;
  }

  .settings ha-switch {
    margin-left: auto; /* udrží přepínač vpravo */
  }
`;
