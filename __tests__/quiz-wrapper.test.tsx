import { fireEvent, screen } from "@testing-library/react"
import { render } from "../../../test-utils/render"
import QuizWrapper from "../components/quiz/quiz-elements/quiz-wrapper"

describe("<QuizWrapper/>", () => {
  test("should render, new quiz should come after choosing a option ", async () => {
    const quizSubject = "javascript"
    render(<QuizWrapper quizSubject={quizSubject} />)

    expect(screen.getByText(/Who created Javascript?/i)).toBeInTheDocument()
    expect(screen.getByTestId("styled-quiz-card-wrapper")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: /brendan eich/i }))

    expect(screen.queryByText(/Who created Javascript?/i)).not.toBeInTheDocument()
    expect(
      screen.getByText(/how do we declare block scoped variables in Javascript?/i)
    ).toBeInTheDocument()

    // screen.debug()
  })
})
