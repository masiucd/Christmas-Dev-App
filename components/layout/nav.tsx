import React from "react"
import styled from "styled-components"
import NavIcon from "./nav-icon"
import NavList from "./nav-list"
import { useToggle } from "@hooks/toggle"
import MobileList from "./mobile-list"
import NavCandyIcon from "./nav-candy-icon"

interface NavProps {
  className: string
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const { state: iconHasBeenClicked, toggle: toggleIconHasBeenClicked } = useToggle()
  return (
    <nav className={className} data-testid="layout-main-nav">
      <NavCandyIcon />
      <NavIcon on={iconHasBeenClicked} toggle={toggleIconHasBeenClicked} />
      <NavList className="layout-main-nav-list" />
      <MobileList className="layout-mobile-list" on={iconHasBeenClicked} />
    </nav>
  )
}
export default styled(Nav)`
  align-items: center;
  background-color: var(--background);
  box-shadow: var(--shadowMd);
  color: var(--textColor);
  display: flex;
  justify-content: space-between;
  padding: 1em;
  position: relative;
`
