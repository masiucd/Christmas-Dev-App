import Title from "@components/title"
import Head from "next/head"
import MainCalender from "@components/calendar/main"

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>santa&quot;s calender</title>
    </Head>
    <Title />
    <MainCalender />
  </>
)

export default Home
