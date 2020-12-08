import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface NavLinkProp {
  path: string
  text: string
}

const LinkItem = styled.li`
  a {
    display: block;
    font-size: 0.85em;
    margin-left: 0.2em;
    padding: 0.2em;
    position: relative;
    transition: var(--main-trans);

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--lineColor);
      width: 0;
      height: 1px;
      transition: var(--main-trans);
    }
    &:hover {
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
