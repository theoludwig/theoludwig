import { FooterText } from "./FooterText"
import { FooterVersion } from "./FooterVersion"

export const Footer = async (): Promise<JSX.Element> => {
  const { readPackage } = await import("read-pkg")
  const { version } = await readPackage()

  return (
    <footer className="flex flex-col items-center justify-center border-t-2 border-gray-600 bg-white py-6 text-lg dark:border-gray-400 dark:bg-black">
      <FooterText />
      <FooterVersion version={version} />
    </footer>
  )
}
