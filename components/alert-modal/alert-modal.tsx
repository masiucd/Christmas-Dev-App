import { Button } from "@components/elements/buttons"
import { useQuizDispatch } from "context/quiz-context"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface AlertModalProps {
  title: string
  message: string
  cta?: boolean
}

const StyledAlert = styled(motion.section)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
const AlertBody = styled.div`
  align-items: center;
  background-color: var(--textColor);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowLg);
  color: var(--background);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2.125rem 1rem;
  width: 32em;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  button {
    margin: 1rem;
  }
`

const AlertModal: React.FC<AlertModalProps> = ({ title, message, cta }) => {
  const dispatch = useQuizDispatch()
  const variants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
  }
  return (
    <StyledAlert initial="closed" animate="open" exit="exit" variants={variants}>
      <AlertBody>
        <h3>{title}</h3>
        <p>{message}</p>
        {cta && (
          <ButtonWrapper>
            <Link href="/quiz">
              <a>
                <Button onClick={() => dispatch({ type: "RESET_GAME" })}>new game</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button onClick={() => dispatch({ type: "RESET_GAME" })}>
                  back home
                </Button>
              </a>
            </Link>
          </ButtonWrapper>
        )}
      </AlertBody>
    </StyledAlert>
  )
}
export default AlertModal
