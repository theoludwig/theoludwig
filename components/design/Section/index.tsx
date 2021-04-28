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
      <ShadowContainer style={{ marginTop: 50 }}>
        <section ref={ref} {...rest}>
          {heading != null && <SectionHeading>{heading}</SectionHeading>}
          <div className='px-3 w-full'>{children}</div>
        </section>
      </ShadowContainer>
    )
  }

  if (withoutShadowContainer) {
    return (
      <section ref={ref} {...rest}>
        {heading != null && <SectionHeading>{heading}</SectionHeading>}
        <div className='container-fluid'>{children}</div>
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
      <ShadowContainer>
        <div className='container-fluid'>
          <div className='row row-padding'>{children}</div>
        </div>
      </ShadowContainer>
    </section>
  )
})
