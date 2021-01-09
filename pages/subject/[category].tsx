import QuizWrapper from "@components/quiz/quiz-elements/quiz-wrapper"
import { SubjectType } from "@utils/types"
import { QuizProvider } from "context/quiz-context"
import { useRouter } from "next/dist/client/router"
import React from "react"
import styled, { css } from "styled-components"
import Title from "@components/elements/title"

const QuizPageWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  padding: 1em;
`

const cx = css`
  h1 {
    border-bottom: 2px solid var(--textColor);
    display: inline-block;
  }
`

const QuizSubjectPage = () => {
  const router = useRouter()

  const { query } = router

  return (
    <QuizProvider>
      <QuizPageWrapper>
        <Title
          className="quiz-subject-page-title"
          mainTitle={`Subject ${query.category}`}
          styles={cx}
        />
        <QuizWrapper quizSubject={query.category as SubjectType} />
      </QuizPageWrapper>
    </QuizProvider>
  )
}
export default QuizSubjectPage
