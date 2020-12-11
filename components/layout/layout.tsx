import { useTheme } from "@hooks/theme"
import styled from "styled-components"
import GlobalStyles from "../../styles/global-styles"
import Nav from "./nav"

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
`

const Layout: React.FC = ({ children }) => {
  const { value, handleTheme } = useTheme("theme", "light")

  return (
    <>
      <GlobalStyles />
      <Nav className="layout-main-nav" handleTheme={handleTheme} theme={value} />
      <Main>{children}</Main>
    </>
  )
}
export default Layout
