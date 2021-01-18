import { above, below } from "@styles/media-query"
import React, { useState } from "react"
import styled from "styled-components"
import Day from "./day"

interface MainCalenderProps {
  dayDate: string
}

const Grid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 3.575rem auto;
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
  @media ${below.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${below.mobileXL} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  @media ${below.mobileL} {
    display: flex;
    flex-flow: column wrap;
  }
`

const renderGridItem = (xs: number[]) => (dayDate: string) =>
  xs.map((x) => <Day key={x} dayIndex={x} dayDate={dayDate} />)

const MainCalender: React.FC<MainCalenderProps> = ({ dayDate }) => {
  const [days] = useState(Array.from({ length: 24 }, (_, i) => i + 1))

  return <Grid>{renderGridItem(days)(dayDate)}</Grid>
}
export default MainCalender
