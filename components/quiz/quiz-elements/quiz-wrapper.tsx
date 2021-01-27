import { SubjectType } from "@utils/types"

import { useQuizDispatch, useQuizState } from "@context/quiz-context"
import styled from "styled-components"

import {
  backendQuiz,
  cssQuiz,
  goQuiz,
  jsQuiz,
  nodeQuiz,
  rustQuiz,
  serversQuiz,
} from "../../../data/initial-data"
import React, { useEffect } from "react"
import QuizCard from "./quiz-card"
import { AnimatePresence } from "framer-motion"
import AlertModal from "@components/alert-modal/alert-modal"
import Fade from "@components/animated/fade"

const MessageContent = styled.div`
  align-items: center;
  border: 2px solid #000;
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
interface QuizWrapperProps {
  quizSubject: SubjectType
}

const StyledQuizWrapper = styled.div`
  padding: 1rem;
  width: 100%;
`
function handleSubjectType(subject: SubjectType) {
  switch (subject) {
    case "javascript":
      return jsQuiz
    case "backend":
      return backendQuiz
    case "css":
      return cssQuiz
    case "go":
      return goQuiz
    case "node":
      return nodeQuiz
    case "rust":
      return rustQuiz
    case "servers":
      return serversQuiz
    default: {
      throw new Error(`no supported subject of ${subject}`)
    }
  }
}

export default function QuizWrapper({ quizSubject }: QuizWrapperProps) {
  const dispatch = useQuizDispatch()
  const { score, isGameDone, quizData } = useQuizState()

  useEffect(() => {
    let questionsXs
    if (quizSubject) {
      questionsXs = handleSubjectType(quizSubject)
      dispatch({ type: quizSubject, payload: questionsXs })
    }

    return () => dispatch({ type: "CLEAR_QUIZ_DATA" })
  }, [dispatch, quizSubject, score])

  return (
    <>
      <AnimatePresence>
        {isGameDone && (
          <AlertModal
            key="modal"
            title={`${quizSubject} quiz  finished`}
            message={`you scored ${score} out of ${quizData.length} possible `}
            cta
          />
        )}
      </AnimatePresence>
      <StyledQuizWrapper>
        <QuizCard />

        <Fade exitOptions={{ x: "100%" }}>
          <MessageContent>
            <h3>{quizSubject} quiz finished </h3>
            <p>
              you scored <span>{score}</span> out of <span>{quizData.length}</span>{" "}
              possible{" "}
            </p>
          </MessageContent>
        </Fade>
      </StyledQuizWrapper>
    </>
  )
}
