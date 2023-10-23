import fs from "node:fs"
import path from "node:path"

import { cache } from "react"
import matter from "gray-matter"

export const BLOG_POSTS_PATH = path.join(process.cwd(), "blog", "posts")

export interface FrontMatter {
  title: string
  description: string
  isPublished: boolean
  publishedOn: string
}

export interface BlogPost {
  frontmatter: FrontMatter
  slug: string
  content: string
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const blogPosts = await fs.promises.readdir(BLOG_POSTS_PATH)
  const blogPostsWithTime = await Promise.all(
    blogPosts.map(async (blogPostFilename) => {
      const [slug, extension] = blogPostFilename.split(".")
      if (slug == null || extension == null) {
        throw new Error("Invalid blog post filename.")
      }
      const blogPostPath = path.join(BLOG_POSTS_PATH, `${slug}.${extension}`)
      const blogPostContent = await fs.promises.readFile(blogPostPath, {
        encoding: "utf8",
      })
      const { data, content } = matter(blogPostContent) as unknown as {
        data: FrontMatter
        content: string
      }
      const date = new Date(data.publishedOn)
      return {
        slug,
        content,
        frontmatter: data,
        time: date.getTime(),
      }
    }),
  )
  const blogPostsSortedByPublicationDate = blogPostsWithTime
    .filter((post) => {
      return post.frontmatter.isPublished
    })
    .sort((a, b) => {
      return b.time - a.time
    })
  return blogPostsSortedByPublicationDate
})

export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | undefined> => {
    const blogPosts = await getBlogPosts()
    const blogPost = blogPosts.find((blogPost) => {
      return blogPost.slug === slug && blogPost.frontmatter.isPublished
    })
    return blogPost
  },
)
