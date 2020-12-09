import { above, below } from "@styles/media-query"
import React, { useState } from "react"
import styled from "styled-components"
import Day from "./day"

const Grid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media ${above.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${above.tablet} {
    .day-1 {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    .day-5 {
      grid-column: 4/4;
      grid-row: 2/5;
    }
    .day-15 {
      grid-column: 2/4;
      grid-row: 5/7;
    }
  }
  @media ${below.tablet} {
    .day-1 {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    .day-5 {
      grid-column: 3/4;
      grid-row: 2/6;
    }
    .day-19 {
      grid-column: 1/3;
      grid-row: 9/11;
    }
  }
`

const renderGridItem = (xs: number[]) => xs.map((x) => <Day key={x} day={x} />)

const MainCalender = () => {
  const [days] = useState(Array.from({ length: 24 }, (_, i) => i + 1))

  return <Grid>{renderGridItem(days)}</Grid>
}
export default MainCalender
