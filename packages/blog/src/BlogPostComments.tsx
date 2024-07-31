"use client"

import Giscus from "@giscus/react"
import { useTheme } from "@repo/ui/Layout/Header/SwitchTheme"

interface BlogPostCommentsProps {}

export const BlogPostComments: React.FC<BlogPostCommentsProps> = () => {
  const { theme } = useTheme()

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
