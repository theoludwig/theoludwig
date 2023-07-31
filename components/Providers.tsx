'use client'

import { ThemeProvider } from 'next-themes'

type ProvidersProps = React.PropsWithChildren

export const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}
