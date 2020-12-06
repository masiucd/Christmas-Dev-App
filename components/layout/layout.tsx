import React from "react"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

const themes: any = {
  light: {
    colors: {
      primary: "deeppink",
      background: "white",
    },
  },
  dark: {
    colors: {
      primary: "lightpink",
      background: "black",
    },
  },
}

const PrimaryText = styled.div(({ theme }) => ({
  color: theme.colors.primary,
  padding: 20,
  backgroundColor: theme.colors.background,
}))

function ThemeToggler({ theme, onClick }: any) {
  const nextTheme = theme === "light" ? "dark" : "light"
  return (
    <button onClick={() => onClick(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  )
}

const Layout: React.FC = () => {
  const [theme, setTheme] = React.useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <PrimaryText>This text is the primary color</PrimaryText>
      <ThemeToggler theme={theme} onClick={(t: any) => setTheme(t)} />
    </ThemeProvider>
  )
}
export default Layout
