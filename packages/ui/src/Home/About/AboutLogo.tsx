import { useTranslations } from "next-intl"
import Image from "next/image"

export interface AboutLogoProps {}

export const AboutLogo: React.FC<AboutLogoProps> = () => {
  const t = useTranslations()

  return (
    <div className="max-h-[370px] max-w-[370px] px-2 py-6">
      <Image src="/images/logo.webp" alt={t("meta.title")} width={800} height={800} priority />
    </div>
  )
}
