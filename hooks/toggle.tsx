import { useState } from "react"

type Fn = () => void

interface ReturnType {
  state: boolean
  setToFalse: Fn
  setToTrue: Fn
  toggle: Fn
}

const useToggle = (initialState = false): ReturnType => {
  const [state, setState] = useState(initialState)

  const setToFalse = (): void => {
    setState(false)
  }
  const setToTrue = (): void => {
    setState(true)
  }
  const toggle = (): void => {
    setState((p) => !p)
  }

  return { state, setToFalse, setToTrue, toggle }
}

export { useToggle }
