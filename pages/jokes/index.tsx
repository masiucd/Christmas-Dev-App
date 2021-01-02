import React from "react"
import Title from "@components/elements/title"
import Head from "next/head"

const JokesPage = () => {
  return (
    <>
      <Head>
        <title>joke&quot;s</title>
      </Head>
      <Title className="jokes-page-title" mainTitle="Jokes" />
    </>
  )
}

export default JokesPage
