import { useEffect, useRef } from 'react'

export const RevealFade: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  const htmlElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.className =
              'opacity-100 visible translate-y-0 transition-all duration-700 ease-in-out'
            observer.unobserve(entry.target)
          }
        })
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
