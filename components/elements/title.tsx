import { motion } from "framer-motion"
import styled, { FlattenSimpleInterpolation } from "styled-components"
interface TitleProps {
  mainTitle: string
  subTitle?: string
  dataTestID?: string
  className: string
  styles?: FlattenSimpleInterpolation
}

const Title: React.FC<TitleProps> = ({
  mainTitle,
  subTitle,
  className,
  dataTestID = "page",
}) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      data-testid={`${dataTestID}-title-component`}
    >
      <h1>{mainTitle}</h1>
      {subTitle && <h3>{subTitle}</h3>}
    </motion.section>
  )
}

export default styled(Title)`
  font-size: 10px;
  ${({ styles }) => (styles ? styles : null)};
  padding: 1rem;
  text-align: center;
  h1,
  h3 {
    color: var(--textColor);
  }
  h1 {
    font-size: var(--h1);
  }
  h3 {
    font-size: var(--h3);
  }
`
