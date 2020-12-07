import { render } from "@testing-library/react"
import Nav from "@components/layout/nav"
describe("<Nav/>", () => {
  test("should renders correctly", () => {
    render(<Nav className="main-nav" />)
  })
})
