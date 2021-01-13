import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggleButton } from "../toggle-btn"

describe("ToggleButton", () => {
  test("ToggleButton takes in prop and fire-event ", () => {
    let on = false
    const toggle = jest.fn(() => {
      on = true
    })

    const { rerender } = render(<ToggleButton on={on} toggle={toggle} />)
    const btn = screen.getByRole("button", { name: /search/i })
    userEvent.click(btn)

    expect(toggle).toHaveBeenCalled()

    rerender(<ToggleButton on={on} toggle={toggle} />)

    screen.getByRole("button", { name: /close/i })
    expect(on).toBeTruthy()
  })
})
