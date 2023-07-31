'use client'

import { useEffect } from 'react'

import { ErrorPage } from '@/components/ErrorPage'

export interface ErrorHandlingProps {
  error: Error
}

const ErrorHandling = (props: ErrorHandlingProps): JSX.Element => {
  const { error } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorPage statusCode={500} message='Server error' />
}

export default ErrorHandling
