import React from "react"
import Title from "@components/elements/title"
import Head from "next/head"
import useSWR from "swr"
import { fetcher } from "@utils/swr"
import { GetServerSideProps } from "next"

// method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
const JokesPage = ({ dataTest }) => {
  const { data, error } = useSWR("key", () =>
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json())
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // console.log(dataTest)
  console.log(data)
  return (
    <>
      <Head>
        <title>joke&quot;s</title>
      </Head>
      <Title className="jokes-page-title" mainTitle="Jokes" />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
  const data = await res.json()

  return {
    props: {
      dataTest: data,
    },
  }
}

export default JokesPage
