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

import { GameMessage } from "./game-message"

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
  const { score, isGameDone } = useQuizState()

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
        {isGameDone && <GameMessage quizSubject={quizSubject} />}
      </AnimatePresence>
      <StyledQuizWrapper>
        <QuizCard />
      </StyledQuizWrapper>
    </>
  )
}
