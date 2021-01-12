import * as React from "react"
import Title from "@components/elements/title"
import Head from "next/head"
import styled from "styled-components"
import { Joke } from "@components/joke/joke"
import { SearchJokeWrapper } from "@components/joke/search-joke-wrapper"
import { useJoke } from "@hooks/joke"
import { GetStaticProps, NextPage } from "next"
import axios from "axios"
import { Joke as JokeType } from "@utils/types"

const JokePageWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 75vh;
  position: relative;
`

interface JokesPageProps {
  jokeData: JokeType
}

const JokesPage: NextPage<JokesPageProps> = ({ jokeData }) => {
  const [configureRefresh, setConfigureRefresh] = React.useState(false)
  const { joke } = useJoke(configureRefresh, jokeData)

  // if (isLoading) return <div>...loading</div>
  // if (isError) return <div>{isError.message}</div>

  return (
    <>
      <Head>
        <title>joke&quot;s</title>
      </Head>
      <Title
        className="jokes-page-title"
        mainTitle="Dad Jokes"
        subTitle="Get some laugh's by clicking on the candy"
      />

      <SearchJokeWrapper />
      <JokePageWrapper>
        <Joke
          joke={joke}
          configureRefresh={configureRefresh}
          setConfigureRefresh={setConfigureRefresh}
        />
      </JokePageWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("https://icanhazdadjoke.com")
  const jokeData = await response.data

  return {
    props: {
      jokeData,
    },
  }
}

export default JokesPage
