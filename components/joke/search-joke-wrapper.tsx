import React from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "@hooks/dimensions"
import { ToggleButton } from "./toggle-btn"
import { Search } from "./search"
import styled from "styled-components"
import { useSearchTerm } from "@hooks/search-term"
import { Spinner } from "@components/spinner/spinner"

const StyledWrapper = styled(motion.div)`
  height: 100%;
`

export const SearchJokeWrapper = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)
  const [termText, setTermText] = React.useState("")
  const { term, isLoading } = useSearchTerm(termText)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTermText(event.target.value)
  }

  if (isLoading) return <Spinner />
  console.log(term.results)

  return (
    <StyledWrapper
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {/* <Search
        isOpen={isOpen}
        termText={termText}
        handleChange={handleChange}
        data={term}
      /> */}

      <ToggleButton toggle={() => toggleOpen()} on={isOpen} />
    </StyledWrapper>
  )
}
