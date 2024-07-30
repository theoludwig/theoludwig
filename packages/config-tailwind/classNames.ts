import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const classNames = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}
