import packageJSON from "../package.json" with { type: "json" }

export const IS_PRODUCTION = process.env["NODE_ENV"] === "production"
export const VERSION = IS_PRODUCTION ? packageJSON.version : "0.0.0-development"
export const GIT_REPO_LINK = "https://github.com/theoludwig/theoludwig"

export const LOCALES = ["en-US", "fr-FR"] as const
export type Locale = (typeof LOCALES)[number]
export const LOCALE_DEFAULT = "en-US" satisfies Locale
export const LOCALE_PREFIX = "never"

export const THEMES = ["light", "dark"] as const
export type Theme = (typeof THEMES)[number]
export const THEME_DEFAULT = "light" satisfies Theme

export const TIMEZONE = process.env["TZ"] ?? "Europe/Paris"

export const BIRTH_DATE_DAY = "31"
export const BIRTH_DATE_MONTH = "03"
export const BIRTH_DATE_YEAR = "2003"
export const BIRTH_DATE_STRING =
  `${BIRTH_DATE_DAY}/${BIRTH_DATE_MONTH}/${BIRTH_DATE_YEAR}` as const
export const BIRTH_DATE_ISO_8601 =
  `${BIRTH_DATE_YEAR}-${BIRTH_DATE_MONTH}-${BIRTH_DATE_DAY}` as const
export const BIRTH_DATE = new Date(BIRTH_DATE_ISO_8601)
