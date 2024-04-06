export const getVersion = async (): Promise<string> => {
  if (process.env.NODE_ENV === "development") {
    return "0.0.0-development"
  }
  const { readPackage } = await import("read-pkg")
  const { version } = await readPackage()
  return version
}
