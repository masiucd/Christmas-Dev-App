import React from "react"
import styled from "styled-components"

interface DayProps {
  day: number
}

const StyledDay = styled.button`
  background-color: var(--textColor);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  color: var(--background);
  cursor: pointer;
  font-size: 10px;
  outline: none;
  padding: 2.45em 0.5em;
  transition: var(--main-trans);
  p {
    font-size: 2em;
  }
  &:active {
    box-shadow: var(--shadow2Xl);
    position: relative;
    top: 7px;
  }
`

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <StyledDay className={`day-${day}`}>
      <p>{day}</p>
    </StyledDay>
  )
}
export default Day
