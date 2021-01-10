import React from "react"
import Title from "@components/elements/title"
import Head from "next/head"
import { useJoke } from "@hooks/joke"

const JokesPage = () => {
  const { joke, isError, isLoading } = useJoke()

  if (isLoading) return <div>...loading</div>
  if (isError) return <div>{isError.message}</div>

  console.log(joke)
  return (
    <>
      <Head>
        <title>joke&quot;s</title>
      </Head>
      <Title className="jokes-page-title" mainTitle="Jokes" />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//   const data = await res.json()

//   return {
//     props: {
//       dataTest: data,
//     },
//   }
// }

export default JokesPage
