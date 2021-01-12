import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { transform } from "jest.config"

const LoadingWrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  z-index: 100;
`
const Circle = styled(motion.span)`
  background-color: var(--textColor);
  border-radius: 50%;
  display: block;
  height: 1rem;
  width: 1rem;
`

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const circleVariants = {
  start: {
    y: "0%",
    height: "1rem",
  },
  end: {
    y: "100%",
    backgroundColor: ["#29B6F6", "#AD1457"],
    height: "1.25rem",
    scale: 1.5,
  },
}

const transition = {
  duration: 0.45,
  yoyo: Infinity,
  ease: "easeInOut",
}

export const Spinner = () => {
  return (
    <LoadingWrapper variants={containerVariants} initial="start" animate="end">
      <Circle
        variants={circleVariants}
        initial="start"
        animate="end"
        transition={transition}
      />
      <Circle
        variants={circleVariants}
        initial="start"
        animate="end"
        transition={transition}
      />
      <Circle
        variants={circleVariants}
        initial="start"
        animate="end"
        transition={transition}
      />
    </LoadingWrapper>
  )
}
