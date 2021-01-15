import Head from "next/head"
import React, { Fragment } from "react"
import Title from "@components/elements/title"
import FadeWrapper from "@components/elements/fade-wrapper"
import { useToggle } from "@hooks/toggle"
import { pageData } from "../../data/page-data"
import { randomNumber } from "@utils/helpers"
import Image from "next/image"
import styled from "styled-components"
import { Button } from "@components/elements/buttons"

const HeaderStyles = styled.a`
  color: var(--textColor);
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.1rem;
  transition: var(--main-trans);
  &:hover {
    border-radius: var(--border-radius);
    box-shadow: var(--shadowXl);
    margin: 0.4rem 0;
  }
`

const ButtonOptions = styled(Button)`
  display: block;
  margin: 2rem auto 4rem auto;
`

const ContactPage = () => {
  const { state, toggle } = useToggle()

  return (
    <div>
      <Head>
        <title>contact marcell</title>
      </Head>
      <Title
        className="about-title"
        mainTitle="get in touch"
        subTitle="my platforms and how to get in touch"
      />
      <ButtonOptions onClick={toggle}>
        {state ? "hide options" : "contact me"}
      </ButtonOptions>

      {pageData.map((data) => (
        <Fragment key={data.name}>
          <FadeWrapper isAnimated={state} direction={-1} distance={randomNumber(1000)}>
            <HeaderStyles href={data.url}>
              <h1>{data.name}</h1>

              <Image
                src={`/social/${data.name}-d.svg`}
                alt={`icon-${data.name}`}
                width={40}
                height={40}
              />
            </HeaderStyles>
            <p>{data.about}</p>
          </FadeWrapper>
        </Fragment>
      ))}
    </div>
  )
}

export default ContactPage
// aria-label="candy-image"
//           id="candy-img"
//           src="/candy.svg"
//           alt="candy"
//           width={500}
//           height={500}
