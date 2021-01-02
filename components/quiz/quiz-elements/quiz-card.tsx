import { resetBtnStyles } from "@styles/css"
import { useQuizDispatch, useQuizState } from "context/quiz-context"
import { useEffect, useState } from "react"
import { Alternative } from "@utils/types"
import styled from "styled-components"
import { motion } from "framer-motion"
import { above, below } from "@styles/media-query"

const StyledQuizCard = styled(motion.div)`
  align-self: center;
  border: 2px solid var(--textColor);
  border-radius: var(--border-radius);
  box-shadow: var(--shadowS);
  display: flex;
  flex-flow: column wrap;
  justify-self: center;
  padding: 1em;
  width: 100%;
  @media ${above.tablet} {
    flex-flow: row wrap;
  }
`

const QuestionTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 30%;
  justify-content: center;
  text-align: center;
  strong {
    font-size: var(--h4);
  }
  @media ${below.tablet} {
    padding: 1.125rem 1rem;
  }
`

const StyledQuizCardList = styled.ul`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  li {
    margin: 0.5rem 0;
    ${resetBtnStyles}
    button {
      min-width: 13em;
    }
  }
`

const QuizCard = () => {
  const { quizData } = useQuizState()
  const dispatch = useQuizDispatch()
  const [quizIndex, setQuizIndex] = useState(0)
  const [buttonClickTracker, setButtonClickTracker] = useState(0)

  const handleClick = (alternative: Alternative) => {
    if (alternative.correct) {
      dispatch({ type: "INCREMENT_SCORE" })
      setButtonClickTracker((p) => p + 1)
      if (quizIndex !== quizData.length - 1) {
        setQuizIndex((p) => p + 1)
      }
    } else {
      dispatch({ type: "DECREMENT_SCORE" })
      setButtonClickTracker((p) => p + 1)
      if (quizIndex !== quizData.length - 1) {
        setQuizIndex((p) => p + 1)
      }
    }
  }

  useEffect(() => {
    if (buttonClickTracker > 0) {
      if (buttonClickTracker === quizData.length) {
        // alert("apa")
        dispatch({ type: "SET_IS_GAME_DONE" })
      }
    }
  }, [buttonClickTracker, dispatch, quizData.length])

  return (
    <StyledQuizCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <>
        {quizData.length > 0 && (
          <>
            <QuestionTitleWrapper>
              <strong>{quizData[quizIndex].question}</strong>
            </QuestionTitleWrapper>
            <StyledQuizCardList>
              {quizData[quizIndex].alternatives.map((x) => (
                <li key={x.option}>
                  <button type="button" onClick={() => handleClick(x)}>
                    {x.a}
                  </button>
                </li>
              ))}
            </StyledQuizCardList>
          </>
        )}
      </>
    </StyledQuizCard>
  )
}
export default QuizCard
