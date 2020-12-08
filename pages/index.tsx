import Title from "@components/title"
import Head from "next/head"
import styled from "styled-components"

const Div = styled.div``

export const Home = (): JSX.Element => (
  <>
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Title />
    </div>
    <Div>
      <h3>Hello</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quas
        praesentium ex nam, earum numquam obcaecati molestiae ipsa nobis accusamus
        pariatur expedita doloremque explicabo! Reprehenderit natus tenetur doloremque
        illum tempora.
      </p>
    </Div>
  </>
)

export default Home
