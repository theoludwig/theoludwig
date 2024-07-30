"use client"

import { useEffect, useRef } from "react"

export interface RevealFadeProps extends React.PropsWithChildren {}

export const RevealFade: React.FC<RevealFadeProps> = (props) => {
  const { children } = props

  const htmlElement = useRef<HTMLDivElement | null>(null)

  const className =
    "opacity-100 visible translate-y-0 transition-all duration-700 ease-in-out"

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.className = className
            observer.unobserve(entry.target)
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.28,
      },
    )
    observer.observe(htmlElement.current as HTMLDivElement)
  }, [])

  return (
    <div ref={htmlElement} className="invisible -translate-y-7 opacity-0">
      {children}
    </div>
  )
}
