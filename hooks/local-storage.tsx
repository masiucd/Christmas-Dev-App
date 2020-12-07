import { useState } from "react"

const useLocalStorage = (initialState = "") => {
  const [state, setState] = useState(initialState)
  return { state, setState }
}

export { useLocalStorage }
