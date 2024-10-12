"use client"

import { useRouter } from "@repo/i18n/navigation"
import { useTranslations } from "next-intl"
import { useEffect, useTransition } from "react"
import { Button } from "../../Design/Button/Button.tsx"
import { Typography } from "../../Design/Typography/Typography.tsx"
import { MainLayout } from "../../Layout/MainLayout/MainLayout.tsx"
import { Section } from "../../Layout/Section/Section.tsx"

export interface ErrorServerProps {
  error: Error & { digest?: string }
  reset: () => void
}

export const ErrorServer: React.FC<ErrorServerProps> = (props) => {
  const { error, reset } = props

  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const t = useTranslations()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <MainLayout center>
      <Section horizontalSpacing>
        <Typography variant="h1" as="h1">
          {t("errors.error")} 500 - {t("errors.server-error")}
        </Typography>

        <Typography variant="text1" as="p" className="mt-4">
          <Button
            isLoading={isPending}
            onClick={() => {
              startTransition(() => {
                router.refresh()
                reset()
              })
            }}
          >
            {t("errors.try-again")}
          </Button>
        </Typography>
      </Section>
    </MainLayout>
  )
}
