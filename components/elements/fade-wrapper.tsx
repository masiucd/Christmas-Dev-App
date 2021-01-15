import { above, below } from "@styles/media-query"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface FadeWrapperProps {
  isAnimated: boolean
  distance?: number
  direction?: number
}

const Wrapper = styled(motion.section)`
  border: 2px solid var(--textColor);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowXl);
  margin: 1rem auto;
  padding: 1rem 2rem;
  @media ${above.mobileS} {
    max-width: 90%;
  }
  @media ${above.tablet} {
    max-width: 45rem;
  }
  @media ${below.mobileS} {
    width: 100%;
  }
`

// const variants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// }

const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  isAnimated,
  distance = 100,
  direction = -1,
}) => {
  return (
    <AnimatePresence>
      {isAnimated && (
        <Wrapper
          initial={{ opacity: 0, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: direction * (distance * -1),
          }}
          transition={{ delay: 0.3, damping: 9 }}
        >
          {children}
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
export default FadeWrapper
