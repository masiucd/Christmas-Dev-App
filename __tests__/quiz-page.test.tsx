import { render, screen } from "@testing-library/react"
import QuizPage from "../pages/quiz"

describe("<QuizPage/>", () => {
  test("should render as expected ", () => {
    render(<QuizPage />)

    expect(screen.getByText(/dev quiz/i)).toBeInTheDocument()
    expect(screen.getByText(/choose your subject/i)).toBeInTheDocument()
    expect(screen.getByText(/Subjects/i)).toBeInTheDocument()
  })
})
