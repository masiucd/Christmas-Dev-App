import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { above, below } from "@styles/media-query"

const NavCandyIconStyles = styled.a`
  align-items: center;
  mark {
    background-color: var(--textColor);
    border-radius: var(--border-radius);
    box-shadow: var(--shadowMd);
    color: var(--background);
    font-size: 0.65em;
    padding: 0.15em;
  }
  cursor: pointer;
  display: flex;
  margin-right: auto;
  min-width: 7rem;

  @media ${above.mobileL} {
    mark {
      font-size: 0.85em;
      padding: 0.3em;
    }
  }
  @media ${below.mobileS} {
    display: none;
  }
`

const NavCandyIcon = () => {
  return (
    <>
      <Link href="/">
        <NavCandyIconStyles data-testid="nav-icon-navbar">
          <Image src="/candy.svg" alt="main-logo" width={45} height={45} />
          <mark>X-mas calendar</mark>
        </NavCandyIconStyles>
      </Link>
    </>
  )
}
export default NavCandyIcon
