'use client'

import { useEffect, useRef } from 'react'

export type RevealFadeProps = React.PropsWithChildren

export const RevealFade = (props: RevealFadeProps): JSX.Element => {
  const { children } = props

  const htmlElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.className =
              'opacity-100 visible translate-y-0 transition-all duration-700 ease-in-out'
            observer.unobserve(entry.target)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.28
      }
    )
    observer.observe(htmlElement.current as HTMLDivElement)
  }, [])

  return (
    <div ref={htmlElement} className='invisible -translate-y-7 opacity-0'>
      {children}
    </div>
  )
}
