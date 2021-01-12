import React from "react"
import styled from "styled-components"

interface SearchTermProps {
  term: string
}

const StyledTerm = styled.li`
  border-bottom: 1px solid var(--background);
  color: var(--background);
  margin-bottom: 0.5em;
  padding: 1em 0.5em 0 0.5em;
  z-index: 100;
`
const SearchTerm: React.FC<SearchTermProps> = ({ term }) => {
  return <StyledTerm>{term}</StyledTerm>
}
export default SearchTerm
