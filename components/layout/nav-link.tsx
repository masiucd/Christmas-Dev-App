import Link from "next/link"
import React from "react"

import styled from "styled-components"

interface NavLinkProp {
  path: string
  text: string
}

const LinkItem = styled.li`
  padding: 0.5rem 0;
  a {
    color: var(--background);
    display: inline-block;
    font-size: 0.85em;
    margin-left: 0.2em;
    padding: 0.2em;
    position: relative;
    transition: var(--main-trans);
    &:after {
      background: var(--lineColor);
      bottom: 0;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      transition: var(--main-trans);
      width: 0;
    }
    &:hover {
      margin-left: 1rem;
      transform: scale(1.025);
      &:after {
        width: 100%;
      }
    }
  }
`

const NavLink: React.FC<NavLinkProp> = ({ path, text }) => {
  const capFirstLetter = (link: string) => {
    return link[0].toUpperCase() + link.slice(1)
  }
  return (
    <LinkItem>
      <Link href={path}>
        <a>{capFirstLetter(text)}</a>
      </Link>
    </LinkItem>
  )
}
export default NavLink
