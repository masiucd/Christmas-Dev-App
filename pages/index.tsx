import Title from "@components/title"
import Head from "next/head"
import MainCalender from "@components/calendar/main"
import { calculateDaysUntilXmas } from "utils/helpers"

export const Home = (): JSX.Element => {
  const date = Date.now()
  const dateString = new Date(date)
  const [day, month, d, year] = dateString.toString().split(" ")

  return (
    <>
      <Head>
        <title>santa&quot;s calender</title>
      </Head>
      <Title
        className="home-page-title"
        mainTitle="Chrismas Advent Calender"
        subTitle={`Today it's ${day} ${d}-${month} ${year}, ${calculateDaysUntilXmas()} days until christmas `}
      />
      <MainCalender dayDate={d} />
    </>
  )
}

export default Home
