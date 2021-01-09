/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { render as rtlRender } from "@testing-library/react"
import { QuizProvider } from "@context/quiz-context"
// import "@testing-library/jest-dom"

function render<T>(ui: T, { providerProps, ...options } = {}) {
  const Wrapper: React.FC = ({ children }) => (
    <QuizProvider {...providerProps}> {children} </QuizProvider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from "@testing-library/react"
// override React Testing Library's render with our own
export { render }
