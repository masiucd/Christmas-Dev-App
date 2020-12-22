import React from "react"
import styled from "styled-components"

interface SwitchTogglerProps {
  theme: "dark" | "light"
  handleTheme: () => void
}

interface StyledSwitchTogglerProps {
  t: boolean
}
const StyledSwitchToggler = styled.label<StyledSwitchTogglerProps>`
  display: block;
  outline: 0;
  z-index: 2;
  .action-area {
    background-color: #fbfbfb;
    border: 2px solid #fbfbfb;
    border-radius: 4em;
    cursor: pointer;
    display: inline-block;
    height: 2.2em;
    padding: 4px;
    position: relative;
    transition: all 4ms ease-in-out;
    width: 6em;
  }

  input[type="checkbox"] {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .action-area::after {
    content: "🌚";
    left: 0;
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    background-color: #fbfbfb;
    text-align: center;
    border-radius: 4em;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease,
      margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  .action-area.on::after {
    content: "🌝";
  }

  .action-area::after {
    left: ${({ t }) => (t ? "50%" : "0%")};
  }
  .action-area {
    background-color: var(--textColor);
  }
`

const SwitchToggler: React.FC<SwitchTogglerProps> = ({ theme, handleTheme }) => {
  const t = theme === "light" ? true : false

  return (
    <StyledSwitchToggler htmlFor="toggler" t={t}>
      <input
        type="checkbox"
        name="toggler"
        id="toggler"
        checked={t}
        onChange={handleTheme}
      />
      <span className={`action-area ${theme === "light" ? "on" : "off"}`} />
    </StyledSwitchToggler>
  )
}
export default SwitchToggler
