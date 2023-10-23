import UniversalCookie from "universal-cookie"

import { DEFAULT_THEME } from "@/utils/constants"
import type { CookiesStore, Theme } from "@/utils/constants"

export const useTheme = (cookiesStore: CookiesStore): Theme => {
  const universalCookie = new UniversalCookie(cookiesStore)
  return universalCookie.get("theme") ?? DEFAULT_THEME
}
