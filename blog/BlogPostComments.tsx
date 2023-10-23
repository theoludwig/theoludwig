"use client"

import Giscus from "@giscus/react"

import { useTheme } from "@/theme/theme.client"
import type { CookiesStore } from "@/utils/constants"

interface BlogPostCommentsProps {
  cookiesStore: CookiesStore
}

export const BlogPostComments = (props: BlogPostCommentsProps): JSX.Element => {
  const { cookiesStore } = props

  const theme = useTheme(cookiesStore)

  return (
    <Giscus
      id="comments"
      repo="theoludwig/theoludwig"
      repoId="MDEwOlJlcG9zaXRvcnkzNTg5NDg1NDQ="
      category="General"
      categoryId="DIC_kwDOFWUewM4CQ_WK"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  )
}
