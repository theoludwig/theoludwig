import useTranslation from 'next-translate/useTranslation'

import { FormState } from './FormState'
import { ResultState } from './index'

export interface FormResultProps {
  state: ResultState
}

export const FormResult: React.FC<FormResultProps> = (props) => {
  const { state } = props
  const { t } = useTranslation()

  if (state === 'idle') {
    return null
  }

  if (state === 'loading' || state === 'success') {
    return (
      <FormState state={state}>{t(`home:contact.result.${state}`)}</FormState>
    )
  }

  return (
    <FormState state='error'>{t(`home:contact.result.${state}`)}</FormState>
  )
}
