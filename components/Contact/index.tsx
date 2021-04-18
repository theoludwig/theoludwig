import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import Form, { HandleForm } from 'react-component-form'
import axios from 'axios'

import { Input } from 'components/design/Input'
import { Button } from 'components/design/Button'
import { Textarea } from 'components/design/Textarea'
import { FormResult } from './FormResult'

export const resultState = [
  'idle',
  'success',
  'loading',
  'requiredFields',
  'invalidEmail',
  'serverError'
] as const

export type ResultState = typeof resultState[number]

export const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [state, setState] = useState<ResultState>('idle')

  const handleSubmit: HandleForm = async (formData, formElement) => {
    setState('loading')
    try {
      const { data } = await axios.post<{ type: ResultState }>(
        '/api/send-email',
        formData
      )
      if (data.type === 'success') {
        setState('success')
        return formElement.reset()
      }
      return setState('serverError')
    } catch (error) {
      const type = error.response.data.type
      if (resultState.includes(type)) {
        return setState(type)
      }
      return setState('serverError')
    }
  }

  return (
    <>
      <div className='col-24'>
        <Form onSubmit={handleSubmit}>
          <Input
            label={`${t('home:contact.nameField')} :`}
            type='text'
            name='name'
            autoComplete='off'
            required
          />
          <Input
            label='Email :'
            type='email'
            name='email'
            autoComplete='off'
            required
          />
          <Input
            label={`${t('home:contact.subjectField')} :`}
            type='text'
            name='subject'
            autoComplete='off'
            required
          />

          <Textarea
            label='Message :'
            name='message'
            autoComplete='off'
            required
          />

          <div className='text-center' style={{ marginBottom: 20 }}>
            <Button type='submit'>{t('home:contact.sendEmail')}</Button>
          </div>
        </Form>

        <FormResult state={state} />
      </div>
    </>
  )
}
