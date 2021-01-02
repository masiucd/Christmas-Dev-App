import { css } from "styled-components"

export const resetBtnStyles = css`
  button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background-color: var(--textColor);
    border-radius: var(--border-radius);
    color: var(--background);
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
    box-shadow: var(--shadowS);
  }

  button:hover,
  button:focus {
    background-color: var(--background);
    color: var(--textColor);
    box-shadow: var(--shadowLg);
  }

  button:focus {
    border: 1px solid var(--textColor);
    outline-offset: -4px;
  }

  button:active {
    position: relative;
    top: 6px;
    transform: scale(0.99);
  }
`
