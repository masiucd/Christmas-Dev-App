import Title from "@components/title"
import Head from "next/head"
import MainCalender from "@components/calendar/main"

export const Home = (): JSX.Element => {
  const date = new Date(Date.now())
  const [day, month, d, year] = date.toString().split(" ")

  return (
    <>
      <Head>
        <title>santa&quot;s calender</title>
      </Head>
      <Title
        className="home-page-title"
        mainTitle="Chrismas Advent Calender"
        subTitle={`Today it's ${day} ${d}-${month} ${year}`}
      />
      <MainCalender dayDate={d} />
    </>
  )
}

export default Home
