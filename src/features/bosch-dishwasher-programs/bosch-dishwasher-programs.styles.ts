import { css } from "lit";

export const BoschDishwasherProgramsFeatureStyles = css`
    :host {
        height: var(--feature-height, 42px);
        width: 100%;
        border-radius: var(--feature-border-radius, 12px);
        padding: 0px;
        outline: 0px;
        overflow: hidden;
        font-size: inherit;
        color: inherit;
        background-color: var(--disabled-color);
    }

    ha-control-button-group {
        gap: 0.5rem;
        display: flex;
        flex-flow: column;
        place-content: center space-evenly;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        height: var(--feature-height, 42px);
        width: 100%;
        border: none;
        border-radius: var(--feature-border-radius, 12px);
        padding: 0px;
        overflow: hidden;
        font-size: inherit;
        color: inherit;
        background-color: inherit
        flex-basis: 100%;
    }


  ha-control-button {
    background-color: var(--card-background-color);
    color: var(--primary-text-color);
    border-radius: var(--feature-border-radius, 12px);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  }

  /* Aktivní tlačítko — barvy jako aktivní tile */
  ha-control-button[active] {
    background-color: rgba(var(--rgb-primary-color), 0.2);
    color: var(--primary-color);
  }

  /* Hover efekt — světlejší pozadí než aktivní */
  ha-control-button:hover {
    background-color: rgba(var(--rgb-primary-color), 0.15);
    color: var(--primary-color);
  }

  /* Hover na aktivním tlačítku — ještě světlejší */
  ha-control-button[active]:hover {
    background-color: rgba(var(--rgb-primary-color), 0.3);
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: currentColor;
  }


 
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
        color: var(--primary-text-color);
    }

    ha-icon-button:hover {
        color: var(--primary-color);
    }

    ha-icon-button 
    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
    }


    .programs-list ha-control-button .icon-wrapper {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .programs-list ha-control-button .icon-wrapper svg {
        width: 24px;
        height: 24px;
    }

    .programs-list .icon-wrapper {
        background: white;
        color: var(--primary-color);
    }

    .programs-list .icon-wrapper.active {
        background: var(--primary-color);
        color: white;
    }


  .program-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 8px;
  }

  .program-bar .program-btn {
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .program-bar .program-btn:hover {
    filter: brightness(0.95);
  }

  .program-bar .program-btn.active {
    background: var(--primary-color);
    color: white;
  }

  .program-bar .program-btn svg {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    fill: none;
  }

  .label {
    font-size: 11px;
    text-align: center;
    margin-top: 4px;
    line-height: 1.2;
  }
`;


const CommonEditorStyles = css`
    .settings {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .settings ha-settings-row {
        align-items: center;
        flex-wrap: wrap;
    }

    .settings ha-settings-row [slot="heading"] {
        font-weight: 500;
    }

    .settings ha-settings-row [slot="description"] {
        color: var(--secondary-text-color);
        max-width: 70%; /* zabrání, aby text přetékal pod přepínač */
        white-space: normal;
    }

    .settings ha-switch {
        margin-left: auto; /* udrží přepínač vpravo */
    }
`;  

export const BoschDishwasherProgramsEditorStyles = css`
    ${CommonEditorStyles}
`;
