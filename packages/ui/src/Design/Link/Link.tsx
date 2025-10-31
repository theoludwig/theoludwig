import { classNames } from "@repo/config-tailwind/classNames"
import { Link as NextLink } from "@repo/i18n/routing"
import { FiExternalLink } from "react-icons/fi"

export interface LinkProps extends React.ComponentProps<typeof NextLink> {
  isExternal?: boolean
}

/**
 * Link is an actionable text component with connection to another web pages.
 * @param props
 * @returns
 */
export const Link: React.FC<LinkProps> = (props) => {
  const { className, children, target, isExternal = true, ...rest } = props

  return (
    <NextLink
      className={classNames(
        "text-primary dark:text-primary-dark inline-flex items-center gap-1 font-semibold hover:underline focus:rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      target={target}
      {...rest}
    >
      {children}

      {target === "_blank" && isExternal ? (
        <FiExternalLink size={16} strokeWidth={2.5} />
      ) : (
        <></>
      )}
    </NextLink>
  )
}
