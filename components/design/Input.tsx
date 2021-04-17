import { forwardRef } from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, name, ...rest } = props

  return (
    <>
      <div className='form-group-animation'>
        <input ref={ref} {...rest} id={name} name={name} />
        <label htmlFor={name} className='label'>
          <span className='label-content'>{label}</span>
        </label>
      </div>

      <style jsx>{`
        .form-group-animation {
          position: relative;
          margin-top: 10px;
          margin-bottom: 30px;
          overflow: hidden;
        }
        .form-group-animation input {
          width: 100%;
          height: 100%;
          padding-top: 35px;
          color: var(--color-text-1);
          border: none;
          background: transparent;
          outline: none;
        }
        .form-group-animation label {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid #fff;
        }
        .form-group-animation label::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 100%;
          width: 100%;
          border-bottom: 3px solid var(--color-primary);
          transform: translateX(-100%);
          transition: transform 0.2s ease;
        }
        .label-content {
          position: absolute;
          bottom: 5px;
          left: 0px;
          transition: all 0.3s ease;
        }
        .form-group-animation input:focus + .label .label-content,
        .form-group-animation input:valid + .label .label-content {
          transform: translateY(-150%);
          font-size: 14px;
          color: var(--color-primary);
        }
        .form-group-animation input:focus + .label::after,
        .form-group-animation input:valid + .label::after {
          transform: translateX(0%);
        }
      `}
      </style>
    </>
  )
})
