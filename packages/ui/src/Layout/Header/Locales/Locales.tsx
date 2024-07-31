"use client"

import { classNames } from "@repo/config-tailwind/classNames"
import type { Locale } from "@repo/i18n/config"
import { LOCALES } from "@repo/i18n/config"
import { usePathname, useRouter } from "@repo/i18n/navigation"
import { useLocale } from "next-intl"
import { useEffect, useRef } from "react"

import { useBoolean } from "@repo/react-hooks/useBoolean"
import { Arrow } from "./Arrow"
import { LocaleFlag } from "./LocaleFlag"

export interface LocalesProps {}

export const Locales: React.FC<LocalesProps> = () => {
  const router = useRouter()
  const pathname = usePathname()
  const localeCurrent = useLocale() as Locale

  const {
    value: isVisibleMenu,
    toggle: toggleMenu,
    setFalse: hideMenu,
  } = useBoolean()
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
      <button
        ref={languageClickRef}
        className="flex items-center"
        onClick={toggleMenu}
      >
        <LocaleFlag locale={localeCurrent} />
        <Arrow />
      </button>

      <ul
        className={classNames(
          "shadow-lightFlag dark:shadow-darkFlag bg-background dark:bg-background-dark absolute top-14 z-10 mt-4 flex w-32 list-none flex-col items-center justify-center rounded-lg p-0",
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
