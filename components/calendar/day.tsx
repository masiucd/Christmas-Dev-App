import { useToggle } from "@hooks/toggle"
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
interface DayProps {
  dayIndex: number
  dayDate: string
}

interface StyledDayProps {
  currentDay: boolean
}

const StyledDay = styled(motion.div)<StyledDayProps>`
  background-color: ${({ currentDay }) =>
    currentDay ? "var(--danger);" : "var(--textColor);"};
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  color: ${({ currentDay }) => (currentDay ? "var(--black);" : "var(--background);")};
  cursor: pointer;
  font-size: 10px;
  min-height: 6rem;
  outline: none;
  padding: 2.45em 0.5em;
  position: relative;
  position: relative;
  transition: var(--main-trans);
  section {
    display: flex;
    font-size: 2em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      z-index: 1000;
      display: block;
      position: relative;
    }
  }
  .front {
    background-color: ${({ currentDay }) =>
      currentDay ? "var(--danger);" : "var(--textColor);"};
  }

  &:active {
    box-shadow: var(--shadow2Xl);
    position: relative;
    top: 7px;
  }
  &:hover {
    box-shadow: var(--shadow2Xl);
    transform: scale(1.055);
  }
`

interface ImageWrapperProps {
  src: string
}

const ImageWrapper = React.forwardRef<HTMLAnchorElement, ImageWrapperProps>(
  ({ src, ...props }, ref) => {
    return (
      <a ref={ref} style={{ zIndex: 3 }} {...props}>
        <Image src={src} alt="day-icon" width={"100%"} height={"100%"} />
      </a>
    )
  }
)

const Day: React.FC<DayProps> = ({ dayIndex, dayDate }) => {
  const currentDay = dayIndex === Number(dayDate)
  const { state: isFlipped, toggle: toggleFlipped } = useToggle()
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ])

  return (
    <StyledDay
      onClick={toggleFlipped}
      className={`day-${dayIndex}`}
      currentDay={currentDay}
    >
      <AnimatePresence>
        {!isFlipped && (
          <motion.section
            key="front"
            className="c front"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ damping: 3 }}
          >
            <p>{dayIndex}</p>
          </motion.section>
        )}
        {isFlipped && (
          <motion.section
            key="back"
            className="c back"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ damping: 3 }}
          >
            <Link href={`/day/${dayIndex}`} passHref>
              <ImageWrapper src={`/icons/icon-${dayIndex}.svg`} />
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </StyledDay>
  )
}
export default Day
