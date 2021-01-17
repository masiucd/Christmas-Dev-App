import { render, screen } from "@testing-library/react"
import { Subjects } from "../components/quiz/subjects"

describe("<Subjects/>", () => {
  test("should render as expected with the correct structure ", () => {
    render(<Subjects />)
    expect(screen.getByText(/subjects/i)).toBeInTheDocument()
    expect(screen.getByTestId("labels-grid").children.length).toBeGreaterThan(0)
  })
})
