import type { routing } from "./routing.ts"
import type messages from "./translations/en-US.json"

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
  }
}
