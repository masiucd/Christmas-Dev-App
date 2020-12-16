import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { below } from "@styles/media-query"

interface ThemeTogglerProps {
  handleTheme: () => void
  theme: "dark" | "light"
}

const ThemeTogglerButtton = styled.button`
  background: transparent;
  border: none;
  bottom: 0;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 2rem;
  z-index: 3;
  @media ${below.tabletL} {
    right: 5rem;
    bottom: 1.6rem;
  }
`

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, handleTheme }) => {
  const handleIcon = (theme: "dark" | "light") => {
    switch (theme) {
      case "dark":
        return <Image src="/sunny-day.svg" alt="toggle-icon" width={30} height={30} />
      case "light":
        return <Image src="/night.svg" alt="toggle-icon" width={30} height={30} />
      default:
        return null
    }
  }

  return (
    <ThemeTogglerButtton onClick={handleTheme}>{handleIcon(theme)}</ThemeTogglerButtton>
  )
}
export default ThemeToggler
