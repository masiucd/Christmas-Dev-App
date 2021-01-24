import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { above, below } from "@styles/media-query"
import { useScrollY } from "@hooks/scroll-y"
import { changePosition } from "@utils/helpers"

interface NavCandyIconStylesProps {
  isOverLimit: number
}
const NavCandyIconStyles = styled.a<NavCandyIconStylesProps>`
  align-items: center;
  cursor: pointer;
  ${({ isOverLimit }) =>
    isOverLimit
      ? `position:fixed;background-color:var(--red); box-shadow: var(--shadowMd);  z-index: 10; width: 12rem; border-radius: var(--border-radius); padding: .5rem; `
      : `position: static;`};
  display: flex;
  mark {
    background-color: var(--textColor);
    border-radius: var(--border-radius);
    box-shadow: var(--shadowMd);
    color: var(--background);
    font-size: 0.65em;
    padding: 0.15em;
  }
  margin-right: auto;
  min-width: 7rem;
  transition: var(--main-trans);

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
  const { y } = useScrollY()

  const isOverLimit = changePosition(y, 70)

  return (
    <>
      <Link href="/">
        <NavCandyIconStyles
          data-testid="nav-icon-navbar"
          isOverLimit={isOverLimit ? 1 : 0}
        >
          <Image src="/candy.svg" alt="main-logo" width={45} height={45} />
          <mark>X-mas calendar</mark>
        </NavCandyIconStyles>
      </Link>
    </>
  )
}
export default NavCandyIcon
