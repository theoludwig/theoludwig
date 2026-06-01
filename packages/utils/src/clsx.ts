type ClassDictionary = Record<string, unknown>

export type ClassValue = ClassDictionary | string | null | boolean | undefined

/**
 * Utility for constructing className strings conditionally.
 * @see https://github.com/lukeed/clsx
 */
export const clsx = (inputs: ClassValue[]): string => {
  let result = ""
  for (const input of inputs) {
    if (typeof input === "string") {
      if (input.length > 0) {
        result = result.length > 0 ? result + " " + input : input
      }
    } else if (typeof input === "object" && input !== null) {
      for (const key of Object.keys(input)) {
        if (input[key] != null && input[key] !== false && input[key] !== 0 && input[key] !== "") {
          result = result.length > 0 ? result + " " + key : key
        }
      }
    }
  }
  return result
}
