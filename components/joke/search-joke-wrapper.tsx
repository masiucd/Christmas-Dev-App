import React from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "@hooks/dimensions"
import { ToggleButton } from "./toggle-btn"
import styled from "styled-components"
import { useSearchTerm } from "@hooks/search-term"
// import dynamic from "next/dynamic"
// const Search = dynamic(() => import("./search"))
// TODO: make a dynamic import here, when knowing how to test it
import Search from "./search"

const StyledWrapper = styled(motion.div)``

export const SearchJokeWrapper = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)
  const [termText, setTermText] = React.useState("")

  const { jokes, isFetching } = useSearchTerm(termText)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTermText(event.target.value)
  }

  return (
    <StyledWrapper
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Search
        isOpen={isOpen}
        termText={termText}
        handleChange={handleChange}
        jokes={jokes}
        isFetching={isFetching}
      />

      <ToggleButton toggle={() => toggleOpen()} on={isOpen} />
    </StyledWrapper>
  )
}
