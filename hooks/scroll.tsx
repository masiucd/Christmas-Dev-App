import { useCallback, useEffect, useState } from "react"

type UpOreDown = "up" | "down"
interface UseScroll {
  scrollY: number
  scrollX: number
  scrollDir: UpOreDown
}

const useScroll = (): UseScroll => {
  const isOnClient = typeof window != "undefined"
  const [bodyOffset, setBodyOffset] = useState(
    isOnClient ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
  )
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [scrollY, setScrollY] = useState(bodyOffset ? bodyOffset.top : 0)
  const [scrollX, setScrollX] = useState(bodyOffset ? bodyOffset.left : 0)
  const [scrollDir, setScrollDir] = useState<UpOreDown>("up")

  const listener = useCallback(() => {
    setBodyOffset(
      isOnClient ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
    )

    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDir(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }, [bodyOffset.left, bodyOffset.top, isOnClient, lastScrollTop])

  useEffect(() => {
    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [listener])

  return { scrollY, scrollX, scrollDir }
}

export { useScroll }
