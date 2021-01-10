import { useEffect, useRef, RefObject } from "react"

export const useDimensions = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current ? ref.current.offsetWidth : 0
    dimensions.current.height = ref.current ? ref.current.offsetHeight : 0
  }, [ref])

  return dimensions.current
}
