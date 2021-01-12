import React from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "@hooks/dimensions"
import { ToggleButton } from "./toggle-btn"
import { Search } from "./search"
import useSWR from "swr"
import { axiosFetcher as fetcher } from "@utils/swr"

export const SearchJokeWrapper = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)
  const [termText, setTermText] = React.useState("")
  const [searchData, setSearchData] = React.useState<string[]>([])
  // https://icanhazdadjoke.com/search?term=apa
  const { data } = useSWR(`/search?term=${termText}`, fetcher)
  // TODO: delete
  console.log(data)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTermText(event.target.value)
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Search isOpen={isOpen} termText={termText} handleChange={handleChange} />
      <ToggleButton toggle={() => toggleOpen()} on={isOpen} />
      {data && data.jokes.length > 0
        ? data.jokes.map((x: string) => <p key={x}>{x}</p>)
        : null}
    </motion.div>
  )
}
