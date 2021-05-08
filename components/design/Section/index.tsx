import { forwardRef } from 'react'

import { ShadowContainer } from '../ShadowContainer'
import { SectionHeading } from './SectionHeading'

type SectionProps = React.ComponentPropsWithRef<'section'> & {
  heading?: string
  description?: string
  isMain?: boolean
  withoutShadowContainer?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    children,
    heading,
    description,
    isMain = false,
    withoutShadowContainer = false,
    ...rest
  } = props

  if (isMain) {
    return (
      <div className='px-3 w-full'>
        <ShadowContainer style={{ marginTop: 50 }}>
          <section ref={ref} {...rest}>
            {heading != null && <SectionHeading>{heading}</SectionHeading>}
            <div className='px-3 w-full'>{children}</div>
          </section>
        </ShadowContainer>
      </div>
    )
  }

  if (withoutShadowContainer) {
    return (
      <section ref={ref} {...rest}>
        {heading != null && <SectionHeading>{heading}</SectionHeading>}
        <div className='px-3 w-full'>{children}</div>
      </section>
    )
  }

  return (
    <section ref={ref} {...rest}>
      {heading != null && (
        <SectionHeading style={{ ...(description != null && { margin: 0 }) }}>
          {heading}
        </SectionHeading>
      )}
      {description != null && (
        <p style={{ marginTop: 7 }} className='text-center'>
          {description}
        </p>
      )}
      <div className='px-3 w-full'>
        <ShadowContainer>
          <div className='px-16 py-4 leading-8 w-full'>{children}</div>
        </ShadowContainer>
      </div>
    </section>
  )
})
