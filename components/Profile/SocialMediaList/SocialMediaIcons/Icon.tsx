export const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { children, ...rest } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='dark:text-white text-black w-8 h-8 fill-current'
      {...rest}
    >
      {children}
    </svg>
  )
}
