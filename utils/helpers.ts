import { GameState } from "./types"
const calculateDaysUntilXmas = (): number => {
  const today = new Date()
  const cmas = new Date(today.getFullYear(), 11, 24)

  if (today.getMonth() === 11 && today.getDate() > 24) {
    cmas.setFullYear(cmas.getFullYear() + 1)
  }
  const oneDay = 1000 * 60 * 60 * 24

  return Math.ceil((cmas.getTime() - today.getTime()) / oneDay)
}

const randomListValue = <T>(xs: T[]): T => xs[Math.floor(Math.random() * xs.length)]

const matchPattern = (xs: string[], term: string) => {
  // some jibrish that will not match and array will be empty by default
  const searchTerm = term.length > 0 ? term : "#242341@@12"
  return xs.filter((x) => {
    const re = new RegExp(`${searchTerm}`, "ig")
    return x.match(re)
  })
}

const randomNumber = (n = 10): number => Math.floor(Math.random() * n)

const changePosition = (y: number, n = 70): boolean => y >= n

const checkWinner = (squares: GameState[]): null | GameState => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export {
  calculateDaysUntilXmas,
  randomListValue,
  matchPattern,
  randomNumber,
  changePosition,
  checkWinner,
}
