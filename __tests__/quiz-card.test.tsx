import { screen } from "@testing-library/react"
import { render } from "../../../test-utils/render"
import QuizCard from "../components/quiz/quiz-elements/quiz-card"

describe("<QuizCard/>", () => {
  test("should render at least the styled-quiz-card-wrapper", () => {
    const quizData = [
      {
        question: "Who created Go?",
        alternatives: [
          { option: "a", a: "Robert Greismer", correct: true },
          { option: "b", a: "Ken Thompson", correct: true },
          { option: "c", a: "Rob Pike", correct: true },
          { option: "d", a: "Guido van Rossum", correct: false },
        ],
      },
    ]
    render(<QuizCard />, { providerProps: {}, ...quizData })

    expect(screen.getByTestId("styled-quiz-card-wrapper")).toBeInTheDocument()
  })
})
