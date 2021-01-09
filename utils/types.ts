<<<<<<< HEAD
export interface Alternative {
=======
interface Alternative {
>>>>>>> (feat): render quiz and styles in PG
  option: string
  a: string
  correct: boolean
}
export interface Quiz {
  question: string
  alternatives: Alternative[]
}

export type SubjectType =
  | "javascript"
  | "css"
  | "servers"
  | "backend"
  | "node"
  | "rust"
  | "go"

export type Status = "pending" | "resolved" | "rejected" | "init"

export interface Joke {
  id: string
  joke: string
  status: 200
}
