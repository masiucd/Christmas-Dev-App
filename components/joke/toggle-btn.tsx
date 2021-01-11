import React from "react"
import styled from "styled-components"

interface ButtonStylesProps {
  on?: boolean
}
const ButtonStyles = styled.button<ButtonStylesProps>`
  background: var(--textColor);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadowXl);
  color: var(--background);
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0.5rem;

  position: absolute;
  right: 1rem;
  text-align: center;
  top: 12rem;
  width: 4rem;
  z-index: 2;
  z-index: 101;
`

interface ToggleButtonProps {
  toggle: () => void
  on: boolean
}

export const ToggleButton = ({ toggle, on }: ToggleButtonProps) => {
  return <ButtonStyles onClick={toggle}>search</ButtonStyles>
}
