import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export const Arrow: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.8024 0.292969L5.61855 4.58597L1.43469 0.292969L0.0566406 1.70697L5.61855 7.41397L11.1805 1.70697L9.8024 0.292969Z'
        fill={theme === 'dark' ? '#fff' : '#181818'}
      />
    </svg>
  )
}
