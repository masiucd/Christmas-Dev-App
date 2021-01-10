import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface Props {
  on: boolean
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Background = styled(motion.div)<Props>`
  background: var(--textColor);
  bottom: 0;
  opacity: ${({ on }) => (on ? "1" : "0")};
  position: absolute;
  right: 0;
  top: 12rem;
  transition: opacity 500ms ease-in-out;
  width: 100%;
  z-index: 100;
  h1 {
    color: var(--background);
    position: relative;
  }
`

interface SearchProps {
  isOpen: boolean
}
export const Search = ({ isOpen }: SearchProps) => {
  return (
    <Background variants={sidebar} on={isOpen}>
      <h1>hello</h1>
      <input type="text" />
    </Background>
  )
}
