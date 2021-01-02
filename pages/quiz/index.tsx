import Head from "next/head"
import React from "react"
import Title from "@components/elements/title"
import styled from "styled-components"
import { Subjects } from "@components/quiz/subjects"

const QuizWrapper = styled.section`
  margin: 2rem auto;
`

const QuizPage = () => {
  return (
    <>
      <Head>
        <title>dev&quot;s quiz</title>
      </Head>
      <QuizWrapper>
        <Title
          className="quiz-title"
          mainTitle="dev quiz"
          subTitle="choose your subject"
        />
        <Subjects />
      </QuizWrapper>
    </>
  )
}

export default QuizPage
