/** How long in milliseconds, until the cookie expires (10 years). */
export const COOKIE_MAX_AGE = 10 * 365.25 * 24 * 60 * 60 * 1000

export const AVAILABLE_LOCALES = ['en-US', 'fr-FR'] as const

export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number]

export const DEFAULT_LOCALE = 'en-US' satisfies AvailableLocale
