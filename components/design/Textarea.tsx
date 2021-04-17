import { forwardRef } from 'react'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { label, name, ...rest } = props

    return (
      <>
        <div className='form-group'>
          <label htmlFor={name}>{label}</label>
          <br />
          <textarea id={name} name={name} ref={ref} {...rest} />
        </div>

        <style jsx>{`
          .form-group {
            padding-top: 15px;
            margin-bottom: 30px;
          }
          .form-group textarea {
            background: transparent;
            color: var(--color-text);
            outline: none;
            width: 100%;
            height: auto;
            padding: 10px;
            resize: vertical;
            margin-top: 8px;
          }
        `}
        </style>
      </>
    )
  }
)
