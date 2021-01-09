import { Quiz, Status, SubjectType } from "@utils/types"
import * as React from "react"

interface State {
  quizData: Quiz[] | []
  status: Status
  score: number
  isGameDone: boolean
}

type Action =
  | { type: SubjectType; payload: Quiz[] }
  | { type: "CLEAR_QUIZ_DATA" }
  | { type: "SET_STATUS"; payload: Status }
  | { type: "INCREMENT_SCORE" }
  | { type: "DECREMENT_SCORE" }
  | { type: "RESET_SCORE" }
  | { type: "SET_IS_GAME_DONE" }
  | { type: "RESET_GAME" }
type Dispatch = (action: Action) => void

const QuizStateContext = React.createContext<State | undefined>(undefined)
const QuizDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const quizReducer: React.Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case "javascript":
    case "css":
    case "backend":
    case "go":
    case "node":
    case "rust":
    case "servers":
      return {
        ...state,
        quizData: action.payload,
      }
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      }
    case "CLEAR_QUIZ_DATA":
      return {
        ...state,
        quizData: [],
      }
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + 1,
      }
    case "DECREMENT_SCORE":
      return {
        ...state,
        score: state.score - 1,
      }
    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
      }
    case "RESET_GAME":
      return {
        ...state,
        score: 0,
        quizData: [],
        status: "init",
        isGameDone: false,
      }
    case "SET_IS_GAME_DONE":
      return {
        ...state,
        isGameDone: true,
      }
    default: {
      throw new Error("Could not resolve action.type within quizReducer")
    }
  }
}

interface Props {
  children: React.ReactNode
}

export function QuizProvider({ children, ...options }: Props) {
  const [state, dispatch] = React.useReducer(quizReducer, {
    quizData: [],
    status: "init",
    score: 0,
    isGameDone: false,
  })
  return (
    <QuizStateContext.Provider value={state} {...options}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}

export const useQuizState = () => {
  const context = React.useContext(QuizStateContext)
  if (!context) {
    throw new Error("QuizStateContext must be wrapped inside useQuizContext")
  }
  return context
}

export const useQuizDispatch = () => {
  const context = React.useContext(QuizDispatchContext)
  if (!context) {
    throw new Error("useQuizDispatch must be wrapped inside useQuizContext")
  }
  return context
}
