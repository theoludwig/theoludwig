import useTranslation from 'next-translate/useTranslation'

export interface FormStateProps extends React.ComponentPropsWithRef<'p'> {
  state: 'success' | 'error' | 'loading'
  children: string
}

export const FormState: React.FC<FormStateProps> = (props) => {
  const { state, children, ...rest } = props
  const { t } = useTranslation()

  return (
    <>
      <div className='form-result text-center'>
        <p className={state} {...rest}>
          {['error', 'success'].includes(state) && (
            <b>
              {state === 'error'
                ? t('home:contact.error')
                : t('home:contact.success')}
              :
            </b>
          )}{' '}
          {children}
        </p>
      </div>

      <style jsx>
        {`
          .form-result {
            margin: 30px;
          }
          .success {
            color: #90ee90;
          }
          .error {
            color: #ff7f7f;
          }
        `}
      </style>
    </>
  )
}
