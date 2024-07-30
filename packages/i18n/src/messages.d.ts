import type en from "./translations/en-US.json"

type Messages = typeof en

declare global {
  /**
   * Use type safe message keys with `next-intl`.
   */
  interface IntlMessages extends Messages {}
}
