"use client"

import { useEffect } from "react"

export interface ErrorHandlingProps {
  error: Error
}

const ErrorHandling = (props: ErrorHandlingProps): JSX.Element => {
  const { error } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <h1 className="my-6 text-4xl font-semibold">
        Error{" "}
        <span
          className="text-yellow dark:text-yellow-dark"
          data-cy="status-code"
        >
          500
        </span>
      </h1>
      <p className="text-center text-lg">Server error</p>
    </main>
  )
}

export default ErrorHandling
