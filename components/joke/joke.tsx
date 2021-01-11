import * as React from "react"
import styled from "styled-components"
import Image from "next/image"
import { Joke as JokeType } from "@utils/types"

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
interface JokeProps {
  joke: JokeType
  configureRefresh: boolean
  setConfigureRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export const Joke: React.FC<JokeProps> = ({
  joke,
  configureRefresh,
  setConfigureRefresh,
}) => {
  const [jokeText, setJokeText] = React.useState("")

  return (
    <>
      <RefreshButton
        data-testid="refresh-button"
        configureRefresh={configureRefresh}
        onClick={() => {
          setJokeText(joke.joke)
          setConfigureRefresh(true)
          setTimeout(() => {
            setConfigureRefresh(false)
          }, 1125)
        }}
      >
        {jokeText && <h3 data-testid="joke-text">{jokeText}</h3>}
        <Image
          aria-label="candy-image"
          id="candy-img"
          src="/candy.svg"
          alt="candy"
          width={500}
          height={500}
        />
      </RefreshButton>
    </>
  )
}
