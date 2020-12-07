import React from "react"
import styled from "styled-components"
import NavList from "./nav-list"

interface NavProps {
  className: string
}

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className} data-testid="layout-main-nav">
      <h3>Logo goes here</h3>
      <NavList className="main-nav-list" />
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
`
