import { useState } from "react"

export interface UseBooleanOutput {
  value: boolean
  setValue: React.Dispatch<React.SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

export interface UseBooleanInput {
  /**
   * The initial value of the boolean.
   * @default false
   */
  initialValue?: boolean
}

/**
 * Hook to manage a boolean state.
 * @param options
 * @returns
 */
export const useBoolean = (options: UseBooleanInput = {}): UseBooleanOutput => {
  const { initialValue = false } = options

  const [value, setValue] = useState(initialValue)

  const toggle = (): void => {
    setValue((old) => {
      return !old
    })
  }

  const setTrue = (): void => {
    setValue(true)
  }

  const setFalse = (): void => {
    setValue(false)
  }

  return {
    value,
    setValue,
    toggle,
    setTrue,
    setFalse,
  }
}
