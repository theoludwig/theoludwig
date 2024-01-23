import htmlParser from "html-react-parser"

import { getI18n } from "@/i18n/i18n.server"

export const ProfileDescriptionBottom = (): JSX.Element => {
  const i18n = getI18n()

  return (
    <div className="my-6 text-gray dark:text-gray-dark text-center max-w-md text-base">
      <p>{htmlParser(i18n.translate("home.about.description-bottom"))}</p>

      <br />
      <a
        href="/curriculum-vitae/index.html"
        className="text-yellow hover:underline dark:text-yellow-dark"
      >
        Curriculum vitæ ({i18n.translate("common.fr-FR")})
      </a>
    </div>
  )
}
