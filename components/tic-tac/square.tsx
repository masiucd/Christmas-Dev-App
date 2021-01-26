import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface SquareProps {
  xOreO: string
  index: number
  handleSquare: (square: number) => void
}

const SquareBox = styled(motion.div)`
  align-items: center;
  border: 2px solid var(--textColor);
  box-shadow: var(--shadowLg);
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: var(--main-trans);
  width: 100%;
  p {
    font-size: 2rem;
  }
  &:hover {
    box-shadow: var(--shadow2Xl);
  }
`

const Square = ({ xOreO, handleSquare, index }: SquareProps) => {
  return (
    <SquareBox
      onClick={() => handleSquare(index)}
      whileHover={{ scale: 1.0425, zIndex: 2, borderColor: "var(--red)" }}
    >
      <p>{xOreO}</p>
    </SquareBox>
  )
}

export { Square }
