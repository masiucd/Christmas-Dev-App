import * as React from "react"
import { render as rtlRender } from "@testing-library/react"
// import "@testing-library/jest-dom"

function render(ui: any, { theme = "light", ...options } = {}) {
  const Wrapper: React.FC = ({ children }) => <> {children} </>
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from "@testing-library/react"
// override React Testing Library's render with our own
export { render }
