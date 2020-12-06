import Layout from '@components/layout/layout'
import Title from '@components/title'
import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title />
    <Layout />
  </div>
)

export default Home
