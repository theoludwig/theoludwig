import { forwardRef } from 'react'

type SectionHeadingProps = React.ComponentPropsWithRef<'h2'>

export const SectionHeading = forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps
>((props, ref) => {
  const { children, ...rest } = props

  return (
    <>
      <h2 ref={ref} {...rest} className='Section__title'>
        {children}
      </h2>

      <style jsx>
        {`
          .Section__title {
            font-size: 34px;
            margin-top: 10px;
            text-align: center;
          }
        `}
      </style>
    </>
  )
})
