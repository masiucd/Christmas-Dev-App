import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const NavCandyIconStyles = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  min-width: 8rem;
  mark {
    background-color: var(--textColor);
    border-radius: var(--border-radius);
    box-shadow: var(--shadowMd);
    color: var(--background);
    padding: 0.3em;
  }
`

const NavCandyIcon: React.FC = () => {
  return (
    <Link href="/">
      <NavCandyIconStyles>
        <Image src="/candy.svg" alt="main-logo" width={60} height={60} />
        <mark>Chrismas calendar</mark>
      </NavCandyIconStyles>
    </Link>
  )
}
export default NavCandyIcon
