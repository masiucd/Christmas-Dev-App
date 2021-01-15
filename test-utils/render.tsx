/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { render as rtlRender } from "@testing-library/react"
import { QuizProvider } from "@context/quiz-context"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
// import "@testing-library/jest-dom"

const queryClient = new QueryClient()
function render<T>(ui: T, { providerProps, ...options } = {}) {
  const Wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <QuizProvider {...providerProps}> {children} </QuizProvider>
    </QueryClientProvider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from "@testing-library/react"
// override React Testing Library's render with our own
export { render }
