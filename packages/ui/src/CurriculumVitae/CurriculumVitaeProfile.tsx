import { Link } from "@repo/i18n/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { BirthDate } from "../Home/About/AboutList/BirthDate"
import { Locales } from "../Layout/Header/Locales/Locales"

export interface CurriculumVitaeProfileProps {}

export const CurriculumVitaeProfile: React.FC<
  CurriculumVitaeProfileProps
> = () => {
  const t = useTranslations()

  return (
    <div className="card p-2">
      <div className="mx-2 flex print:hidden">
        <Locales />
      </div>
      <div className="profile-pic-container">
        <div className="profile-pic">
          <Image
            className="mx-auto block"
            alt={t("meta.title")}
            src="/images/logo_background.webp"
            width={800}
            height={800}
          />
        </div>
        <div className="name-and-profession text-center">
          <h1 className="h3">
            <strong>{t("meta.title")}</strong>
          </h1>
          <h2 className="text-muted h5">{t("curriculum-vitae.description")}</h2>
          <h2 className="text-muted h5">
            <BirthDate />
          </h2>
          <h2 className="text-muted h5">{t("home.about.nationality.value")}</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative px-3">
          <span className="info">
            <a className="link-disguise" href="mailto:contact@theoludwig.fr">
              contact@theoludwig.fr
            </a>
          </span>
        </div>
        <div className="detail">
          <span className="info">
            <Link className="link-disguise" href="/">
              https://theoludwig.fr/
            </Link>
          </span>
        </div>
      </div>
      <hr />
    </div>
  )
}
