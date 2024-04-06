import Link from "next/link"

import { getI18n } from "@/i18n/i18n.server"

export const FooterText = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <p>
      <Link
        href="/"
        className="font-semibold text-primary hover:underline dark:text-primary-dark"
      >
        Théo LUDWIG
      </Link>{" "}
      | {i18n.translate("common.all-rights-reserved")}
    </p>
  )
}
