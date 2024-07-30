"use client"

import type { ErrorServerProps } from "@repo/ui/Errors/ErrorServer"
import { ErrorServer } from "@repo/ui/Errors/ErrorServer"

const ErrorBoundaryPage: React.FC<ErrorServerProps> = (props) => {
  return <ErrorServer {...props} />
}

export default ErrorBoundaryPage
