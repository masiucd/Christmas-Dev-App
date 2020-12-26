import React from "react"
import styled from "styled-components"
import { above, below } from "@styles/media-query"
import { navListData } from "../../data/initial-data"
import NavLink from "./nav-link"

interface NavListProps {
  className: string
}

const NavList: React.FC<NavListProps> = ({ className }) => {
  return (
    <ul className={className} data-testid="styled-nav-list">
      {navListData.map((item) => (
        <NavLink key={item.path} path={item.path} text={item.name} />
      ))}
    </ul>
  )
}
export default styled(NavList)`
  @media ${below.mobileS} {
    display: none;
  }
  @media ${above.mobileS} {
    display: none;
  }
  @media ${above.tabletL} {
    display: flex;
  }
`
