import styled from "styled-components"

export const Button = styled.button`
  background-color: var(--textColor);
  border: 2px solid var(--stroke-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowMd);
  color: var(--background);
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 0.4rem 0.8rem;
  transition: var(--main-trans);
  &:hover {
    background-color: var(--background);
    box-shadow: var(--shadowXl);
    color: var(--textColor);
  }
`
