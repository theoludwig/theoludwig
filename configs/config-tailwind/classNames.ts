import type { ClassValue } from "@repo/utils/clsx"
import { clsx } from "@repo/utils/clsx"
import { twMerge } from "tailwind-merge"

export const classNames = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}
