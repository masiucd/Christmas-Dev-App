import * as React from "react"
import { useJoke } from "@hooks/joke"
import styled from "styled-components"
import Image from "next/image"

interface RefreshButtonProps {
  configureRefresh: boolean
}
const RefreshButton = styled.button<RefreshButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 30rem;
  outline: none;
  padding: 1rem;
  position: relative;
  width: 100%;
  h3 {
    color: var(--textColor);
    font-size: 2rem;
    text-shadow: 2px 2px var(--background);
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    line-height: 2.5rem;
    padding: 1rem;
  }

  #candy-img {
    transform: ${({ configureRefresh }) =>
      configureRefresh ? `rotate(45deg)` : `rotate(0deg)`};
    transition: var(--main-trans);
  }
`

export const Joke = () => {
  const [configureRefresh, setConfigureRefresh] = React.useState(false)
  const { joke, isError, isLoading } = useJoke(configureRefresh)
  const [state, setState] = React.useState("")
  if (isLoading) return <div>...loading</div>
  if (isError) return <div>{isError.message}</div>

  return (
    <>
      <RefreshButton
        configureRefresh={configureRefresh}
        onClick={() => {
          setState(joke.joke)
          setConfigureRefresh(true)
          setTimeout(() => {
            setConfigureRefresh(false)
          }, 1125)
        }}
      >
        <h3>{state}</h3>
        <Image id="candy-img" src="/candy.svg" alt="candy" width={500} height={500} />
      </RefreshButton>
    </>
  )
}
