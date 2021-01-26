import Fade from "@components/animated/fade"
import { Button } from "@components/elements/buttons"
import { GameState } from "@utils/types"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface WinnerMessageProps {
  winner: GameState
  newGame: () => void
}

const WinnerContent = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 1rem;
  .buttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  h3 {
    font-size: 3rem;
    padding: 1rem;
  }
  span {
    color: var(--green);
    display: inline-block;
  }
`

const WinnerMessage: React.FC<WinnerMessageProps> = ({ winner, newGame }) => {
  return (
    <Fade exitOptions={{ x: "100%" }}>
      <WinnerContent>
        <h3>
          Winner is player <span>{winner}</span>
        </h3>
        <div className="buttons">
          <Button onClick={newGame}>new game</Button>
          <Link href="/">
            <a>
              <Button> ↖ back to calender</Button>
            </a>
          </Link>
        </div>
      </WinnerContent>
    </Fade>
  )
}
export default WinnerMessage
