import type fr from "./translations/fr-FR.json"

type Messages = typeof fr

declare global {
  /**
   * Use type safe message keys with `next-intl`.
   */
  interface IntlMessages extends Messages {}
}
