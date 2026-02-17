import { useTranslations } from "next-intl"
import { Section, SectionTitle } from "../../Layout/Section/Section.tsx"
import type { PortfolioProject } from "./PortfolioItem.tsx"
import { PortfolioItem } from "./PortfolioItem.tsx"

export interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = () => {
  const t = useTranslations()

  const items: PortfolioProject[] = [
    {
      id: "fusey",
      title: t("home.portfolio.fusey.title"),
      description: t("home.portfolio.fusey.description"),
      link: "https://fusey.gg",
      image: "/images/portfolio/Fusey.webp",
    },
    {
      id: "fusey-ark",
      title: t("home.portfolio.fusey-ark.title"),
      description: t("home.portfolio.fusey-ark.description"),
      link: "https://ark.fusey.gg",
      image: "/images/portfolio/Fusey-ARK.webp",
    },
    {
      id: "carolo",
      title: t("home.portfolio.carolo.title"),
      description: t("home.portfolio.carolo.description"),
      link: "https://carolo.theoludwig.fr",
      image: "/images/portfolio/Carolo.webp",
    },
  ]

  return (
    <Section verticalSpacing horizontalSpacing id="portfolio">
      <SectionTitle>{t("home.portfolio.title")}</SectionTitle>

      <ul className="flex w-full list-none flex-wrap justify-center gap-12 px-3">
        {items.map((item) => {
          return <PortfolioItem key={item.id} portfolioProject={item} />
        })}
      </ul>
    </Section>
  )
}
