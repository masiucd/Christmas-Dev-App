import { Button } from "@components/elements/buttons"
import { useMachine } from "@xstate/react"
import React, { useEffect } from "react"
import styled from "styled-components"
import timerMachine from "./timer-machine"

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  .current-state {
    padding: 1rem 0;
    text-align: center;
    span {
      color: var(--button);
      text-shadow: 1px 1px 2px var(--link-color);
    }
  }
`
const Display = styled.div`
  align-items: center;
  border: 2px solid var(--paragraph);
  border-radius: 50%;
  display: grid;
  height: 8rem;
  justify-content: center;
  margin: 1rem auto;
  width: 8rem;
`

const ButtonsActions = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0.5rem;
  }
`

const Timer = () => {
  const [state, send] = useMachine(timerMachine)
  const { duration, interval, elapsed } = state.context
  const isIdle = state.matches("idle")
  const isRunning = state.matches("running")
  const isPaused = state.matches("paused")

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        send("TICK")
      }, 1000 * interval)

      return () => clearInterval(intervalId)
    }
  }, [interval, isRunning, send])

  return (
    <Wrapper>
      <h2 className="current-state">
        Current state: <span>{state.value}</span>{" "}
      </h2>
      <Display>
        <h3>{Math.ceil(duration - elapsed)}</h3>
      </Display>

      <ButtonsActions>
        {(isIdle || isPaused) && <Button onClick={() => send("TOGGLE")}>start</Button>}
        {isRunning && <Button onClick={() => send("TOGGLE")}>Pause</Button>}
        {isRunning && <Button onClick={() => send("ADD_MINUTE")}>add a minute</Button>}
      </ButtonsActions>
    </Wrapper>
  )
}

export default Timer
