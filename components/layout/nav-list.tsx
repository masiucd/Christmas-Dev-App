import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { above } from "@styles/media-query"

interface NavListProps {
  className: string
}

const NavList: React.FC<NavListProps> = ({ className }) => {
  const navListData = [
    {
      name: "christmas-calendar",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ]

  const capFirstLetter = (link: string) => {
    return link[0].toUpperCase() + link.slice(1)
  }

  return (
    <ul className={className} data-testid="styled-nav-list">
      {navListData.map((item) => (
        <li key={item.path}>
          <Link href={item.path}>
            <a> {capFirstLetter(item.name)} </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default styled(NavList)`
  @media ${above.mobileS} {
    display: none;
  }
  @media ${above.tabletL} {
    display: flex;
  }

  a {
    display: block;
    font-size: 1.1em;
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
