import React from "react"
import styled from "styled-components"
import GlobalStyles from "./global-styles"
import Nav from "./nav"
type Theme = "dark" | "light"

const Main = styled.main``

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("light")
  const nextTheme = theme === "light" ? "dark" : "light"

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <>
      <GlobalStyles />
      <Nav className="main-nav" />
      <button onClick={() => setTheme(nextTheme)}>Toggle Theme</button>
      <Main>{children}</Main>
    </>
  )
}
export default Layout

{
  /* <ThemeProvider theme={themes[theme]}>
      <PrimaryText>This text is the primary color</PrimaryText>
      <ThemeToggler theme={theme} onClick={(t: any) => setTheme(t)} />
    </ThemeProvider> */
}
