import { getISODate } from "@repo/utils/dates"
import "katex/dist/katex.min.css"

import { Typography } from "@repo/ui/Design/Typography"
import { MainLayout } from "@repo/ui/Layout/MainLayout"
import type { BlogPost } from "./BlogPost.tsx"
import { BlogPostContent } from "./BlogPostContent.tsx"

export interface BlogPostUIProps {
  blogPost: BlogPost
}

export const BlogPostUI: React.FC<BlogPostUIProps> = (props) => {
  const { blogPost } = props

  return (
    <MainLayout className="break-wrap-words flex flex-1 flex-col flex-wrap items-center justify-center">
      <div className="my-12 flex flex-col items-center text-center">
        <Typography variant="h2" as="h1">
          {blogPost.frontmatter.title}
        </Typography>
        <p className="mt-2">{getISODate(new Date(blogPost.frontmatter.publishedOn))}</p>
      </div>
      <BlogPostContent content={blogPost.content} />
    </MainLayout>
  )
}
