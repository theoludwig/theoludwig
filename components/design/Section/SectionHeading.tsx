import { forwardRef } from 'react'

type SectionHeadingProps = React.ComponentPropsWithRef<'h2'>

export const SectionHeading = forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps
>((props, ref) => {
  const { children, ...rest } = props

  return (
    <h2
      ref={ref}
      {...rest}
      className='text-4xl font-semibold text-center mt-1 mb-7'
    >
      {children}
    </h2>
  )
})
