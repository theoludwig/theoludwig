import { classNames } from "@repo/config-tailwind/classNames"

export interface MainLayoutProps extends React.ComponentPropsWithoutRef<"main"> {
  className?: string
  center?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { className, center = false, ...rest } = props

  return (
    <main
      className={classNames(
        "min-h-[calc(100vh-188px)] md:mx-auto md:max-w-4xl lg:max-w-7xl",
        {
          "flex flex-col items-center justify-center text-center": center,
        },
        className,
      )}
      {...rest}
    />
  )
}
