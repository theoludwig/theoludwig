/** How long in milliseconds, until the cookie expires (10 years). */
export const COOKIE_MAX_AGE = 10 * 365.25 * 24 * 60 * 60 * 1000
export type CookiesStore = string | object | null | undefined

export const LOCALES = ["en-US", "fr-FR"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE = "en-US" satisfies Locale

export const THEMES = ["light", "dark"] as const
export type Theme = (typeof THEMES)[number]
export const DEFAULT_THEME = "dark" satisfies Theme
