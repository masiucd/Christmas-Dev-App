import React from "react"
import { useState } from "react"
import styled from "styled-components"

const GameWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 9rem);
  margin: 2rem auto;
  max-width: 760px;
`

const SquareBox = styled.div`
  border: 2px solid var(--textColor);
  box-shadow: var(--shadowLg);
  cursor: pointer;
  transition: var(--main-trans);
  width: 100%;
  &:hover {
    box-shadow: var(--shadow2Xl);
  }
`

interface SquareProps {
  xOreO: string
  index: number
  handleSquare: (square: number) => void
}
const Square = ({ xOreO, handleSquare, index }: SquareProps) => {
  return <SquareBox onClick={() => handleSquare(index)}>{xOreO}</SquareBox>
}

export const Game = () => {
  const [squares, setSquares] = useState<string[]>(Array.from(Array(9).fill("")))
  const [isX, setIsX] = useState(false)

  const toggleIsX = () => {
    setIsX((p) => !p)
  }

  const handleSquare = (square: number) => {
    if (squares[square]) {
      return
    }
    const copy = [...squares]
    copy[square] = isX ? "X" : "O"
    setSquares(copy)
    toggleIsX()
  }

  return (
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
  )
}
