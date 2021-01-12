import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggleButton } from "../toggle-btn"

describe("ToggleButton", () => {
  test("ToggleButton takes in prop and fire-event ", () => {
    const toggle = jest.fn()
    render(<ToggleButton on toggle={toggle} />)
    const btn = screen.getByRole("button", { name: /search/i })

    userEvent.click(btn)
    expect(toggle).toHaveBeenCalled()
  })
})
