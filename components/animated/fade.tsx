import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface FadeProps {
  initialOptions?: Record<string, string | number>
  animateOptions?: { [key: string]: number[] | Record<string, string | number> }
  exitOptions?: Record<string, string | number>
}

const Wrapper = styled(motion.section)`
  align-items: center;
  background-color: var(--red);
  color: var(--background-color);
  display: flex;
  height: 100%;
  height: 120vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  top: -10%;
  width: 100%;
  width: 100%;
  z-index: 10;
`

const Fade: React.FC<FadeProps> = ({
  children,
  animateOptions,
  initialOptions,
  exitOptions,
}) => {
  return (
    <Wrapper
      initial={{ opacity: 0, x: "-100%", ...initialOptions }}
      animate={{ opacity: 1, x: 0, ...animateOptions }}
      exit={{ opacity: 0, x: "-100%", ...exitOptions }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </Wrapper>
  )
}
export default Fade
