export interface Alternative {
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
