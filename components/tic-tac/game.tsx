import { checkWinner } from "@utils/helpers"
import { GameState } from "@utils/types"
import { AnimatePresence } from "framer-motion"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Square } from "./square"
import WinnerMessage from "./winner-message"

const GameWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 9rem);
  margin: 2rem auto;
  max-width: 760px;
`

export const Game = () => {
  const [squares, setSquares] = useState<GameState[]>(Array.from(Array(9).fill("")))
  const [isX, setIsX] = useState(false)
  const [winner, setWinner] = useState<GameState>("")

  const toggleIsX = () => {
    setIsX((p) => !p)
  }

  const handleSquare = (square: number) => {
    if (checkWinner(squares) || squares[square]) {
      return
    }
    const copy = [...squares]
    copy[square] = isX ? "X" : "O"
    setSquares(copy)
    toggleIsX()
  }

  const newGame = () => {
    setSquares(Array.from(Array(9).fill("")))
    setIsX(false)
    setWinner("")
  }

  useEffect(() => {
    if (checkWinner(squares)) {
      const winningSymbol = checkWinner(squares)
      setWinner(winningSymbol)
    }
  }, [squares])

  return (
    <>
      <AnimatePresence>
        {Boolean(winner) && <WinnerMessage winner={winner} newGame={newGame} />}
      </AnimatePresence>

      <GameWrapper>
        <Square index={0} xOreO={squares[0]} handleSquare={handleSquare} />
        <Square index={1} xOreO={squares[1]} handleSquare={handleSquare} />
        <Square index={2} xOreO={squares[2]} handleSquare={handleSquare} />
        <Square index={3} xOreO={squares[3]} handleSquare={handleSquare} />
        <Square index={4} xOreO={squares[4]} handleSquare={handleSquare} />
        <Square index={5} xOreO={squares[5]} handleSquare={handleSquare} />
        <Square index={6} xOreO={squares[6]} handleSquare={handleSquare} />
        <Square index={7} xOreO={squares[7]} handleSquare={handleSquare} />
        <Square index={8} xOreO={squares[8]} handleSquare={handleSquare} />
      </GameWrapper>
    </>
  )
}
