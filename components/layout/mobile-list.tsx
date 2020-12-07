import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { above } from "@styles/media-query"
import { navListData } from "data/initial-data"
import NavLink from "./nav-link"

interface MobileListProps {
  className: string
  on: boolean
}

const MobileList: React.FC<MobileListProps> = ({ className, on }) => {
  const variants = {
    open: { opacity: 1, y: 0, "z-index": 1 },
    closed: { opacity: 0, y: "-100%", "z-index": -1 },
  }
  return (
    <motion.section
      className={className}
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      transition={{ damping: 7, delay: 0.2 }}
      exit="closed"
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
  position: absolute;
  top: 100%;
  width: 100%;
  @media ${above.tabletL} {
    display: none;
  }
`
