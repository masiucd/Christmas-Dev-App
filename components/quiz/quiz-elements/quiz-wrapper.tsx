import { SubjectType } from "@utils/types"
import { useQuizDispatch, useQuizState } from "context/quiz-context"

import styled from "styled-components"

const StyledQuizWrapper = styled.div`
  padding: 1rem;
  width: 100%;
`

import {
  backendQuiz,
  cssQuiz,
  goQuiz,
  jsQuiz,
  nodeQuiz,
  rustQuiz,
  serversQuiz,
} from "data/initial-data"
import React, { useEffect } from "react"
import QuizCard from "./quiz-card"
import { AnimatePresence } from "framer-motion"
import AlertModal from "@components/alert-modal/alert-modal"

interface QuizWrapperProps {
  quizSubject: SubjectType
}

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

  const scorePrint = score < 0 ? score + quizData.length : score
  return (
    <>
      <AnimatePresence>
        {isGameDone && (
          <AlertModal
            key="modal"
            title={`${quizSubject} quiz  finished`}
            message={`you scored ${scorePrint} out of ${quizData.length} possible `}
            cta
          />
        )}
      </AnimatePresence>
      <StyledQuizWrapper>
        <QuizCard />
      </StyledQuizWrapper>
    </>
  )
}
