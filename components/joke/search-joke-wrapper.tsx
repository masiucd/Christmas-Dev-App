import React from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "@hooks/dimensions"
import { ToggleButton } from "./toggle-btn"
import { Search } from "./search"

export const SearchJokeWrapper = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Search isOpen={isOpen} />
      <ToggleButton toggle={() => toggleOpen()} on={isOpen} />
    </motion.div>
  )
}
