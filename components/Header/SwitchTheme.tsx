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
              "absolute inset-y-0 left-[8px] my-auto h-[10px] w-[14px] leading-[0] transition-opacity duration-[250ms] ease-in-out",
              {
                "opacity-100": theme === "dark",
                "opacity-0": theme === "light",
              },
            )}
          >
            <span className="relative flex size-[10px] items-center justify-center">
              🌜
            </span>
          </div>
          <div
            data-cy="switch-theme-light"
            className={classNames(
              "absolute inset-y-0 right-[10px] my-auto size-[10px] leading-[0]",
              {
                "opacity-100": theme === "light",
                "opacity-0": theme === "dark",
              },
            )}
          >
            <span className="relative flex size-[10px] items-center justify-center">
              🌞
            </span>
          </div>
        </div>
        <div
          className={classNames(
            "absolute top-px box-border size-[22px] rounded-[50%] bg-[#fafafa] text-white transition-all duration-[250ms] ease-in-out",
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
          className="absolute -m-px hidden size-px overflow-hidden border-0 p-0"
          defaultChecked
        />
      </div>
    </div>
  )
}
