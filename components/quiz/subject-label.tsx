import Link from "next/link"
import styled from "styled-components"
import { motion } from "framer-motion"
import { SubjectType } from "@utils/types"

const StyledLabel = styled(motion.li)`
  background-color: var(--textColor);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  color: var(--background);
  flex: 1 0 auto;
  font-size: 2em;
  margin: 0.5em;
  padding: 1em;
  &:hover {
    box-shadow: var(--shadowXl);
  }
`

interface SubjectLabelProps {
  subject: SubjectType
}

const subjectTransformation = (subject: SubjectType) => {
  const transformedSubject = subject[0].toUpperCase() + subject.slice(1)

  return subject === "css" ? transformedSubject.toUpperCase() : transformedSubject
}

const SubjectLabel: React.FC<SubjectLabelProps> = ({ subject }) => {
  return (
    <Link href={`/subject/${subject}`} as={`/subject/${subject}`}>
      <a>
        <StyledLabel
          whileHover={{ scale: 1.1, zIndex: 2, transition: { duration: 0.3 } }}
        >
          <p>{subjectTransformation(subject)}</p>
        </StyledLabel>
      </a>
    </Link>
  )
}
export default SubjectLabel
