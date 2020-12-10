import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface DayProps {
  dayIndex: number
  dayDate: string
}

interface StyledDayProps {
  currentDay: boolean
}

const StyledDay = styled.a<StyledDayProps>`
  --webkit-perspective: 800;
  background-color: ${({ currentDay }) =>
    currentDay ? "var(--danger);" : "var(--textColor);"};
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  color: ${({ currentDay }) => (currentDay ? "var(--black);" : "var(--background);")};
  cursor: pointer;
  display: block;
  font-size: 10px;
  outline: none;
  padding: 2.45em 0.5em;
  position: relative;
  transition: var(--main-trans);

  p {
    align-items: center;
    display: flex;
    font-size: 2em;
    height: 100%;
    justify-content: center;
    text-align: center;
  }
  &:active {
    box-shadow: var(--shadow2Xl);
    position: relative;
    top: 7px;
  }
  &:hover {
    box-shadow: var(--shadow2Xl);
    transform: scale(1.055);
  }
`

const Day: React.FC<DayProps> = ({ dayIndex, dayDate }) => {
  const currentDay = dayIndex === Number(dayDate)

  return (
    <Link href={`/day/${dayIndex}`}>
      <StyledDay className={`day-${dayIndex}`} currentDay={currentDay}>
        <p>{dayIndex}</p>
      </StyledDay>
    </Link>
  )
}
export default Day
