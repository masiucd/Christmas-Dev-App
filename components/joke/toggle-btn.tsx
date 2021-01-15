import React from "react"
import styled from "styled-components"

interface ButtonStylesProps {
  on: number
}
const ButtonStyles = styled.button<ButtonStylesProps>`
  background-color: ${({ on }) => (on ? "var(--background)" : "var(--textColor)")};
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadowMd);
  color: ${({ on }) => (on ? "var(--textColor)" : "var(--background)")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  text-align: center;
  top: 13rem;
  transition: var(--main-trans);
  width: 4rem;
  z-index: 101;
  &:hover {
    background-color: var(--lineColor);
    box-shadow: var(--shadowXl);
    color: var(--background);
  }
`

interface ToggleButtonProps {
  toggle: () => void
  on: boolean
}

export const ToggleButton = ({ toggle, on }: ToggleButtonProps) => {
  return (
    <ButtonStyles onClick={toggle} on={on ? 1 : 0}>
      {on ? "close" : "search"}
    </ButtonStyles>
  )
}
