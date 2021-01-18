import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { above } from "@styles/media-query"
import { navListData } from "../../data/initial-data"
import NavLink from "./nav-link"
import { useScroll } from "@hooks/scroll"

interface MobileListProps {
  className: string
  on: boolean
}

const changePosition = (y: number, n = 70): boolean => y >= n

const MobileList: React.FC<MobileListProps> = ({ className, on }) => {
  const { scrollY } = useScroll()

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-200%" },
  }

  return (
    <motion.section
      className={className}
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      transition={{ damping: 7, delay: 0.3 }}
      exit="closed"
      style={{
        position: changePosition(scrollY, 76) ? "fixed" : "absolute",
        top: changePosition(scrollY, 76) ? 0 : "75px",
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
  z-index: 200;
  @media ${above.tabletL} {
    display: none;
  }
`
