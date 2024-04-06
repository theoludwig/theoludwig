import { notFound } from "next/navigation"
import date from "date-and-time"

import "katex/dist/katex.min.css"

import { getBlogPostBySlug } from "@/blog/blog"
import { BlogPostContent } from "@/blog/BlogPostContent"

export interface BlogPostProps {
  slug: string
}

export const BlogPost = async (props: BlogPostProps): Promise<JSX.Element> => {
  const { slug } = props

  const blogPost = await getBlogPostBySlug(slug)
  if (blogPost == null) {
    return notFound()
  }

  return (
    <main className="break-wrap-words flex flex-1 flex-col flex-wrap items-center justify-center">
      <div className="my-10 flex flex-col items-center text-center">
        <h1 className="text-3xl font-semibold text-primary dark:text-primary-dark">
          {blogPost.frontmatter.title}
        </h1>
        <p className="mt-2" data-cy="blog-post-date">
          {date.format(
            new Date(blogPost.frontmatter.publishedOn),
            "DD/MM/YYYY",
          )}
        </p>
      </div>
      <BlogPostContent content={blogPost.content} />
    </main>
  )
}
