import { useContext, createContext, FC, useReducer } from "react"

interface State {
  theme: "dark" | "light"
}
type Action = { type: "SET_THEME"; payload: "dark" | "light" }
type Dispatch = (action: Action) => void

const ThemeContext = createContext<State | undefined>(undefined)
const ThemeDispatch = createContext<Dispatch | undefined>(undefined)

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }

    default: {
      throw new Error(`${action.type} could not be resolved outside ThemeContext`)
    }
  }
}

const ThemeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    theme: "light",
  })
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatch.Provider value={dispatch}>{children}</ThemeDispatch.Provider>
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error(`useThemeContext need to be wrapped inside ThemeProvider`)
  }
  return ctx
}
const useThemeDispatch = () => {
  const ctx = useContext(ThemeDispatch)
  if (!ctx) {
    throw new Error(`useThemeDispatch need to be wrapped inside ThemeProvider`)
  }
  return ctx
}

export { ThemeProvider, useThemeContext, useThemeDispatch }
