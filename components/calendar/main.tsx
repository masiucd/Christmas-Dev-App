import React, { useState } from "react"
import styled from "styled-components"
import Day from "./day"

const Grid = styled.section``

const renderGridItem = (xs: number[]) => xs.map((x) => <Day key={x} day={x} />)

const MainCalender = () => {
  const [days] = useState(Array.from({ length: 24 }, (_, i) => i + 1))

  return <Grid>{renderGridItem(days)}</Grid>
}
export default MainCalender
