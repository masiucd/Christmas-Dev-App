import Fade from "@components/animated/fade"
import { Button } from "@components/elements/buttons"
import { useQuizDispatch, useQuizState } from "@context/quiz-context"
import { SubjectType } from "@utils/types"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

const ScoreAlert = styled.div`
  align-items: center;
  color: var(--white);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2rem;
  h3 {
    border-bottom: 2px solid var(--white);
    letter-spacing: 0.07rem;
  }
  span {
    color: var(--green);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem 0;
  width: 100%;
`

interface GameMessageProps {
  quizSubject: SubjectType
}

export const GameMessage = ({ quizSubject }: GameMessageProps) => {
  const { score, quizData } = useQuizState()
  const dispatch = useQuizDispatch()

  return (
    <Fade exitOptions={{ x: "100%" }}>
      <ScoreAlert>
        <h3>{quizSubject} quiz finished </h3>
        <p>
          you scored <span>{score}</span> out of <span>{quizData.length}</span> possible{" "}
        </p>

        <ButtonWrapper>
          <Link href="/quiz">
            <a>
              <Button onClick={() => dispatch({ type: "RESET_GAME" })}>new game</Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button onClick={() => dispatch({ type: "RESET_GAME" })}>back home</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </ScoreAlert>
    </Fade>
  )
}
