import { Quiz, SubjectType } from "@utils/types"

export const navListData = [
  {
    name: "x-mas-calendar",
    path: "/",
  },
  {
    name: "quiz",
    path: "/quiz",
  },
  {
    name: "jokes",
    path: "/jokes",
  },
  {
    name: "contact",
    path: "/contact",
  },
]

export const quizSubjects: Array<SubjectType> = [
  "javascript",
  "css",
  "servers",
  "backend",
  "node",
  "rust",
  "go",
]

export const jsQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const goQuiz: Quiz[] = [
  {
    question: "Who created Go?",
    alternatives: [
      { option: "a", a: "Robert Greismer", correct: true },
      { option: "b", a: "Ken Thompson", correct: true },
      { option: "c", a: "Rob Pike", correct: true },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "What are go routines?",
    alternatives: [
      { option: "a", a: "objects that are immutable", correct: false },
      { option: "b", a: "a kind of data structure", correct: false },
      { option: "c", a: "higher oreder function", correct: false },
      {
        option: "d",
        a: "functions or methods that run concurrently with other functions or methods.",
        correct: true,
      },
    ],
  },
  {
    question: "How do we declare constants in Go?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const rustQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const serversQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const backendQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const cssQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
export const nodeQuiz: Quiz[] = [
  {
    question: "Who created Javascript?",
    alternatives: [
      { option: "a", a: "Bill Gates", correct: false },
      { option: "b", a: "Brendan Eich", correct: true },
      { option: "c", a: "Dennis Ritchie", correct: false },
      { option: "d", a: "Guido van Rossum", correct: false },
    ],
  },
  {
    question: "How do we declare block scoped variables in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: true },
      { option: "b", a: "With `var` keyword", correct: false },
      { option: "c", a: "With `function` keyword ", correct: false },
      { option: "d", a: "With `class` keyword", correct: false },
    ],
  },
  {
    question: "How do we declare constants in Javascript?",
    alternatives: [
      { option: "a", a: "With `let` keyword", correct: false },
      { option: "b", a: "With `class` keyword", correct: false },
      { option: "c", a: "With `const` keyword ", correct: true },
      { option: "d", a: "With `var` keyword", correct: false },
    ],
  },
]
