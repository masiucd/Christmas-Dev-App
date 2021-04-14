import Timer from "@components/timer"
import Head from "next/head"
import React from "react"
import styled from "styled-components"
import Title from "@components/elements/title"

const Wrapper = styled.section`
  align-items: center;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  min-height: 75vh;
`

const TimerPage = () => {
  return (
    <>
      <Head>
        <title>X-state timer&quot;s</title>
      </Head>
      <Title
        className="timer-page-title"
        mainTitle="Dad Jokes"
        subTitle="Get some laugh's by clicking on the candy"
      />
      <Wrapper>
        <Timer />
      </Wrapper>
    </>
  )
}

export default TimerPage
