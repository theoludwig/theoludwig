"use client"

import classNames from "clsx"

import { useTheme } from "@/theme/theme.client"
import type { CookiesStore } from "@/utils/constants"

export interface SwitchThemeProps {
  cookiesStore: CookiesStore
}

export const SwitchTheme = (props: SwitchThemeProps): JSX.Element => {
  const { cookiesStore } = props
  const theme = useTheme(cookiesStore)

  const handleClick = async (): Promise<void> => {
    const { setTheme } = await import("@/theme/theme.server")
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <div
      className="flex items-center"
      data-cy="switch-theme-click"
      onClick={handleClick}
    >
      <div className="relative inline-block cursor-pointer touch-pan-x select-none border-0 bg-transparent p-0">
        <div className="h-[24px] w-[50px] rounded-[30px] bg-[#4d4d4d] p-0 text-white transition-all duration-200 ease-in-out">
          <div
            data-cy="switch-theme-dark"
            className={classNames(
              "absolute bottom-0 left-[8px] top-0 mb-auto mt-auto h-[10px] w-[14px] leading-[0] transition-opacity duration-[250ms] ease-in-out",
              {
                "opacity-100": theme === "dark",
                "opacity-0": theme === "light",
              },
            )}
          >
            <span className="relative flex h-[10px] w-[10px] items-center justify-center">
              🌜
            </span>
          </div>
          <div
            data-cy="switch-theme-light"
            className={classNames(
              "absolute bottom-0 right-[10px] top-0 mb-auto mt-auto h-[10px] w-[10px] leading-[0]",
              {
                "opacity-100": theme === "light",
                "opacity-0": theme === "dark",
              },
            )}
          >
            <span className="relative flex h-[10px] w-[10px] items-center justify-center">
              🌞
            </span>
          </div>
        </div>
        <div
          className={classNames(
            "absolute top-[1px] box-border h-[22px] w-[22px] rounded-[50%] bg-[#fafafa] text-white transition-all duration-[250ms] ease-in-out",
            {
              "left-[27px]": theme === "dark",
              "left-0": theme === "light",
            },
          )}
          style={{ border: "1px solid #4d4d4d" }}
        />
        <input
          data-cy="switch-theme-input"
          type="checkbox"
          aria-label="Dark mode toggle"
          className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden border-0 p-0 hidden"
          defaultChecked
        />
      </div>
    </div>
  )
}
