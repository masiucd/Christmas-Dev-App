import React from "react"
import Title from "@components/elements/title"
import { Game } from "@components/tic-tac/game"
import Head from "next/head"

const TicTacToe = () => {
  return (
    <>
      <Head>
        <title>tic-tac-toe</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Title className="tic-tac-toe-title" mainTitle="TicTac" subTitle="TicTac" />
      <Game />
    </>
  )
}

export default TicTacToe
