import React, { useCallback, useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { above } from "@styles/media-query"
import { navListData } from "data/initial-data"
import NavLink from "./nav-link"
import { useScroll } from "@hooks/scroll"
import { useClickOutside } from "@hooks/click-outside"

interface MobileListProps {
  className: string
  on: boolean
  closeNavList: () => void
}

const changePosition = (y: number, n = 70): boolean => y >= n

const MobileList: React.FC<MobileListProps> = ({ className, on, closeNavList }) => {
  const { scrollY } = useScroll()
  const ref = useRef(null)

  const toggleList = useCallback(() => {
    closeNavList()
  }, [closeNavList])

  useClickOutside(ref, toggleList)

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      transition={{ damping: 7, delay: 0.2 }}
      exit="closed"
      style={{
        position: changePosition(scrollY, 70) ? "fixed" : "absolute",
        top: changePosition(scrollY, 70) ? 0 : "75px",
      }}
    >
      <ul>
        {navListData.map((item) => (
          <NavLink key={item.path} path={item.path} text={item.name} />
        ))}
      </ul>
    </motion.section>
  )
}
export default styled(MobileList)`
  background-color: var(--textColor);
  color: var(--background);
  height: auto;
  left: 0;
  padding: 2rem 0;
  width: 100%;
  z-index: 100;
  @media ${above.tabletL} {
    display: none;
  }
  a {
    display: inline-block;
    font-size: 1rem;
    padding: 0.5rem 0;
    &:hover {
      margin-left: 1rem;
    }
  }
`
