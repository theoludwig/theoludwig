import { useTranslations } from "next-intl"

import { GIT_REPO_LINK } from "@repo/utils/constants"
import { Link } from "../../Design/Link/Link.tsx"

export interface FooterProps {
  version: string
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { version } = props

  const t = useTranslations()

  return (
    <footer className="flex flex-col items-center justify-center border-t-2 border-gray-darker bg-background p-6 text-lg dark:border-gray-darker-dark dark:bg-background-dark">
      <p>
        <Link href="/">{t("meta.title")}</Link> | {t("footer.all-rights-reserved")}
      </p>

      <p>
        Version{" "}
        <Link href={`${GIT_REPO_LINK}/releases/tag/v${version}`} target="_blank" isExternal={false}>
          {version}
        </Link>
      </p>
    </footer>
  )
}
