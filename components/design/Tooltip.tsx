interface TooltipProps extends React.ComponentPropsWithRef<'div'> {
  title: string
  children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { title, children, ...rest } = props
  return (
    <>
      <span className='tooltip' {...rest}>
        {children}
        <span className='title'>{title}</span>
      </span>

      <style jsx>
        {`
          .title {
            color: #fff;
            font-size: 11px;
            font-weight: 400;
            line-height: 1;
            display: inline-block;
            background-color: #222222;
            padding: 5px 8px;
            white-space: nowrap;
            position: absolute;
            top: 100%;
            margin-top: 10px;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
            border-radius: 3px;
            transition: all 0.15s ease-in;
            transform: translate3d(0, -15px, 0);
            backface-visibility: hidden;
          }
          .tooltip ~ .tooltip:hover .title,
          .tooltip:first-child:hover .title {
            opacity: 1;
            visibility: visible;
            transition: all 0.35s ease-out;
            transform: translate3d(0, 0, 0);
            margin: 0;
            backface-visibility: hidden;
          }
        `}
      </style>
    </>
  )
}
