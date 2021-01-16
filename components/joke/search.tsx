import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import SearchTerm from "./search-term"
import { Joke } from "@utils/types"
import { Spinner } from "@components/spinner/spinner"
import { below } from "@styles/media-query"

interface BackgroundProps {
  on?: number
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    // clipPath: "circle(30px at 40px 40px)",
    clipPath: "circle(1px at 1px 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Background = styled(motion.div)<BackgroundProps>`
  align-items: center;
  background: var(--textColor);

  bottom: 0;
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 12rem;
  transition: opacity 500ms ease-in-out;
  width: 100%;
  z-index: 100;

  p {
    border-bottom: 2px solid var(--background);
    color: var(--background);
    transform: rotate(2deg);
  }
  ul {
    display: flex;
    flex-direction: column;
    height: 22rem;
    overflow-y: scroll;
    padding: 1rem 2rem;
    &::-webkit-scrollbar {
      width: 0.5em;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: var(--shadowInner);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--background);
      border-radius: 9px;
      outline: 1px solid var(--lineColor);
    }
  }
`

const Label = styled.label`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  position: absolute;
  top: 3rem;
  width: 100%;
`

const SearchTermInput = styled.input`
  border: 2px solid var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowMd);
  font-size: 1.2em;
  margin: 1rem auto;
  max-width: 20em;
  outline: 0;
  padding: 0.4em 0.75em;
  transition: var(--main-trans);
  @media ${below.mobileL} {
    padding: 0.2rem 0.6rem;
    font-size: 18px;
  }
`

interface SearchProps {
  isOpen: boolean
  termText: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  jokes: (Joke | undefined)[] | undefined
  isFetching: boolean
}
const Search = ({ isOpen, termText, handleChange, isFetching, jokes }: SearchProps) => {
  return (
    <AnimatePresence>
      {/* With AnimatePresence we can control our animations even when component gets unmounted from the tree  */}
      {isOpen && (
        <Background
          key="child"
          variants={sidebar}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {isFetching && <Spinner />}
          <Label htmlFor="search-joke">
            <p>Search for a joke</p>
            <SearchTermInput
              data-testid="search-input"
              type="text"
              id="search-joke"
              onChange={handleChange}
              value={termText}
            />
          </Label>

          {jokes?.length && !isFetching && (
            <ul data-testid="search-list">
              {jokes && jokes.length > 0
                ? jokes.map((joke) => <SearchTerm key={joke?.id} term={joke?.joke} />)
                : null}
            </ul>
          )}
        </Background>
      )}
    </AnimatePresence>
  )
}

export default Search
