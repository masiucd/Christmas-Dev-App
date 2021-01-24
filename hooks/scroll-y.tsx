import { ScrollDir } from "@utils/types"
import { useCallback } from "react"
import { useState, useEffect } from "react"

interface ScrollY {
  y: number
  scrollDirection: ScrollDir
}
export const useScrollY = (): ScrollY => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDir>("idle")
  const [scrollValue, setScrollValue] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0

    if (scrollY === 0) {
      setScrollDirection("idle")
    }
    if (scrollY > scrollValue) {
      setScrollDirection("down")
    } else if (scrollY < scrollValue) {
      setScrollDirection("up")
    }
    setScrollValue(scrollY)
  }, [scrollValue])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return {
    y: scrollValue,
    scrollDirection,
  }
}
