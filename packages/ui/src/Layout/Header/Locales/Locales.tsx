"use client"

import { classNames } from "@repo/config-tailwind/classNames"
import { usePathname, useRouter } from "@repo/i18n/routing"
import { LOCALES } from "@repo/utils/constants"
import { useLocale } from "next-intl"
import { useEffect, useRef } from "react"

import { Arrow } from "./Arrow.tsx"
import { LocaleFlag } from "./LocaleFlag.tsx"
import { useBoolean } from "../../../hooks/useBoolean.ts"

export interface LocalesProps {}

export const Locales: React.FC<LocalesProps> = () => {
  const router = useRouter()
  const pathname = usePathname()
  const localeCurrent = useLocale()

  const { value: isVisibleMenu, toggle: toggleMenu, setFalse: hideMenu } = useBoolean()
  const languageClickRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleClickEvent = (event: MouseEvent): void => {
      if (languageClickRef.current == null || event.target == null) {
        return
      }
      if (!languageClickRef.current.contains(event.target as Node)) {
        hideMenu()
      }
    }

    window.document.addEventListener("click", handleClickEvent)

    return () => {
      return window.removeEventListener("click", handleClickEvent)
    }
  }, [hideMenu])

  if (pathname.startsWith("/blog")) {
    return <></>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button ref={languageClickRef} className="flex items-center" onClick={toggleMenu}>
        <LocaleFlag locale={localeCurrent} />
        <Arrow />
      </button>

      <ul
        className={classNames(
          "absolute top-14 z-10 mt-2 flex w-32 list-none flex-col items-center justify-center rounded-lg bg-background p-0 shadow-lightFlag dark:bg-background-dark dark:shadow-darkFlag",
          { hidden: !isVisibleMenu },
        )}
      >
        {LOCALES.filter((locale) => {
          return locale !== localeCurrent
        }).map((locale) => {
          return (
            <li key={locale} className="w-full">
              <button
                className="flex h-12 w-full items-center justify-center rounded-lg hover:bg-[#4f545c]/20"
                onClick={() => {
                  router.replace(pathname, { locale, scroll: false })
                  router.refresh()
                }}
              >
                <LocaleFlag locale={locale} />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
