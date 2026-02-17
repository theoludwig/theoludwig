import { GIT_REPO_LINK } from "@repo/utils/constants"
import { useTranslations } from "next-intl"
import { FaGit, FaMicrochip } from "react-icons/fa"
import { Link } from "../../Design/Link/Link.tsx"
import { Section, SectionContent, SectionTitle } from "../../Layout/Section/Section.tsx"
import { InterestItem } from "./InterestItem.tsx"

export interface InterestsProps {}

export const Interests: React.FC<InterestsProps> = () => {
  const t = useTranslations()

  const items = [
    {
      id: "code",
      title: t("home.interests.code.title"),
      description: t.rich("home.interests.code.description", {
        br: () => {
          return <br />
        },
        strong: (children) => {
          return <strong>{children}</strong>
        },
        "abbr-ux": (children) => {
          return <abbr title="User Experience">{children}</abbr>
        },
      }),
      Icon: FaMicrochip,
    },
    {
      id: "open-source",
      title: t("home.interests.open-source.title"),
      description: t.rich("home.interests.open-source.description", {
        br: () => {
          return <br />
        },
        strong: (children) => {
          return <strong>{children}</strong>
        },
        "github-link": (children) => {
          return (
            <Link href={GIT_REPO_LINK} target="_blank">
              {children}
            </Link>
          )
        },
      }),
      Icon: FaGit,
    },
  ] as const

  return (
    <Section verticalSpacing horizontalSpacing id="interests">
      <SectionTitle>{t("home.interests.title")}</SectionTitle>
      <SectionContent shadowContainer>
        <div className="max-w-full">
          {items.map((item) => {
            return <InterestItem key={item.id} title={item.title} description={item.description} />
          })}
        </div>

        <div className="my-4 flex justify-center">
          <ul className="m-0 flex w-96 list-none justify-around p-0">
            {items.map((item) => {
              return (
                <li className="m-2 size-8" key={item.id} title={item.title}>
                  <item.Icon className="block size-full text-primary dark:text-primary-dark" />
                </li>
              )
            })}
          </ul>
        </div>
      </SectionContent>
    </Section>
  )
}
