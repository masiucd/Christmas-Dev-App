import { quizSubjects } from "../../data/initial-data"
import SubjectLabel from "./subject-label"
import styled from "styled-components"
import { motion } from "framer-motion"
import { above } from "@styles/media-query"

const SubjectWrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  justify-content: center;
  margin: 2rem auto;
  h3 {
    border-bottom: 3px solid var(--stroke-color);
    font-size: calc(var(--h3) * 2);
    margin: 0.5em 0;
    padding: 0.2em;
  }
`

const LabelsGrid = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0;
  padding: 0.5rem;
  width: 90%;
  @media ${above.tabletL} {
    width: 42rem;
  }
`

export const Subjects = () => {
  return (
    <SubjectWrapper
      initial={{ opacity: 0, x: "-1000%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, damping: 3, delay: 0.4 }}
    >
      <h3>Subjects</h3>
      <LabelsGrid data-testid="labels-grid">
        {quizSubjects.map((subject) => (
          <SubjectLabel key={subject} subject={subject} />
        ))}
      </LabelsGrid>
    </SubjectWrapper>
  )
}
