"use client"

import { classNames } from "@repo/config-tailwind/classNames"
import { useIsMounted } from "@repo/react-hooks/useIsMounted"
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes"

export const THEMES = ["light", "dark"] as const
export type Theme = (typeof THEMES)[number]
export const THEME_DEFAULT = "dark" as Theme

export interface ThemeProviderProps extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={THEME_DEFAULT}
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}

export interface UseThemeOutput {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeOutput => {
  const { setTheme, theme: themeData } = useNextTheme()
  const { isMounted } = useIsMounted()

  const theme = isMounted ? (themeData as Theme) : THEME_DEFAULT

  const toggleTheme: UseThemeOutput["toggleTheme"] = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}

export interface SwitchThemeProps {}

export const SwitchTheme: React.FC<SwitchThemeProps> = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center justify-center" onClick={toggleTheme}>
      <div className="relative inline-block cursor-pointer touch-pan-x select-none border-0 bg-transparent p-0">
        <div className="h-[24px] w-[50px] rounded-[30px] bg-[#4d4d4d] p-0 text-white transition-all duration-200 ease-in-out">
          <div
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
          type="checkbox"
          aria-label="Dark mode toggle"
          className="absolute -m-px hidden size-px overflow-hidden border-0 p-0"
          defaultChecked
        />
      </div>
    </div>
  )
}
