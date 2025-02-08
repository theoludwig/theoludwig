import { LOCALES } from "./constants.ts"

/**
 * Get the pathname without the known locale prefix.
 * @param input
 * @returns
 * @example getRoutePathnameWithoutLocale("/fr-FR/about") // "/about"
 */
export const getPathnameWithoutLocale = (input: string): string => {
  const locale = LOCALES.find((locale) => {
    return input.startsWith(`/${locale}`)
  })
  const pathname = locale != null ? input.slice(locale.length + 1) : input
  if (pathname.length <= 0) {
    return `/${pathname}`
  }
  return pathname
}
