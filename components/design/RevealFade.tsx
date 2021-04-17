import { useEffect, useRef } from 'react'

export const RevealFade: React.FC = props => {
  const { children } = props

  const htmlElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
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
    <>
      <div ref={htmlElement} className='reveal'>
        {children}
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-30px);
        }
        .reveal-visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: all 500ms ease-out 100ms;
        }
      `}
      </style>
    </>
  )
}
