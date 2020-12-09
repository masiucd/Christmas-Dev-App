import React from "react"
import styled from "styled-components"

interface DayProps {
  day: number
}

const StyledDay = styled.div``

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <StyledDay>
      <p>{day}</p>
    </StyledDay>
  )
}
export default Day
