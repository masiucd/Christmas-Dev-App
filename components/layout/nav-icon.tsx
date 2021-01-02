import { above } from "@styles/media-query"
import React, { useRef } from "react"
import styled from "styled-components"
import { useClickOutside } from "@hooks/click-outside"

type StyledIconProps = {
  on: "animate" | "not-animate"
}

const StyledIcon = styled.div<StyledIconProps>`
  cursor: pointer;
  cursor: pointer;
  height: 45px;
  position: relative;
  transition: 300ms ease-in-out;
  width: 52px;
  z-index: 2002;
  span {
    display: block;
    &:nth-child(1) {
      ${({ on }) =>
        on === "animate"
          ? `  top: 12px;
          transform: rotate(135deg); color:red; `
          : null};
    }
    &:nth-child(2) {
      ${({ on }) =>
        on === "animate"
          ? `opacity: 0;
            left: -60px;`
          : null};
    }
    &:nth-child(3) {
      ${({ on }) =>
        on === "animate"
          ? `  top: 12px;
            transform: rotate(-135deg);`
          : null};
    }
  }
  @media ${above.tabletL} {
    display: none;
  }
`

const IconPart = styled.span`
  background-color: var(--textColor);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowS);
  display: block;
  height: 6px;
  height: 9px;
  left: 0;
  opacity: 1;
  position: absolute;
  transition: 0.25s ease-in-out all;
  width: 100%;
  z-index: 100;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 16px;
  }
  &:nth-child(3) {
    top: 32px;
  }
`

interface NavIconProps {
  on: boolean
  toggle: () => void
  closeNavList: () => void
}

const NavIcon: React.FC<NavIconProps> = ({ on, toggle, closeNavList }) => {
  const ref = useRef(null)

  const handleClick = (): void => {
    closeNavList()
  }

  useClickOutside(ref, handleClick)

  return (
    <StyledIcon
      ref={ref}
      onClick={toggle}
      on={on ? "animate" : "not-animate"}
      data-testid="styles-nav-icon"
      id="nav-icon"
    >
      <IconPart className="menu-part" />
      <IconPart className="menu-part" />
      <IconPart className="menu-part" />
    </StyledIcon>
  )
}
export default NavIcon
