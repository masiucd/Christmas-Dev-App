import React from "react"
import Title from "@components/elements/title"
import Head from "next/head"
import styled from "styled-components"
import { Joke } from "@components/joke/joke"
import { SearchJokeWrapper } from "@components/joke/search-joke-wrapper"

const JokePageWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 75vh;
  position: relative;
`

const JokesPage = () => {
  return (
    <>
      <Head>
        <title>joke&quot;s</title>
      </Head>
      <Title
        className="jokes-page-title"
        mainTitle="Dad Jokes"
        subTitle="Get some laugh's from `icanhazdadjoke.com`"
      />
      <SearchJokeWrapper />
      <JokePageWrapper>
        <Joke />
      </JokePageWrapper>
    </>
  )
}

export default JokesPage
