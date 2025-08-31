import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from "../../Design/Link/Link.tsx"
import { Locales } from "./Locales/Locales.tsx"
import { SwitchTheme } from "./SwitchTheme.tsx"

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const t = useTranslations()

  return (
    <header className="bg-background dark:bg-background-dark border-gray-darker dark:border-gray-darker-dark sticky top-0 z-50 flex w-full justify-between gap-4 border-b-2 px-6 py-2">
      <h1>
        <Link href="/" className="flex items-center justify-center">
          <Image
            className="w-16"
            src="/images/logo.webp"
            width={800}
            height={800}
            alt={`${t("meta.title")} Logo`}
            priority
          />
          <strong className="ml-1 hidden sm:block sm:text-xl">
            {t("meta.title")}
          </strong>
        </Link>
      </h1>

      <div className="flex items-center justify-between gap-6">
        <Link href="/blog">Blog</Link>
        <Locales />
        <SwitchTheme />
      </div>
    </header>
  )
}
