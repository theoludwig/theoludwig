import fs from 'node:fs'
import path from 'node:path'

import { cache } from 'react'
import matter from 'gray-matter'

export const POSTS_PATH = path.join(process.cwd(), 'blog', 'posts')

export interface FrontMatter {
  title: string
  description: string
  isPublished: boolean
  publishedOn: string
}

export interface Post {
  frontmatter: FrontMatter
  slug: string
  content: string
}

export const getBlogPosts = cache(async (): Promise<Post[]> => {
  const posts = await fs.promises.readdir(POSTS_PATH)
  const postsWithTime = await Promise.all(
    posts.map(async (postFilename) => {
      const [slug, extension] = postFilename.split('.')
      if (slug == null || extension == null) {
        throw new Error('Invalid postFilename.')
      }
      const blogPostPath = path.join(POSTS_PATH, `${slug}.${extension}`)
      const blogPostContent = await fs.promises.readFile(blogPostPath, {
        encoding: 'utf8'
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
        time: date.getTime()
      }
    })
  )
  const postsWithTimeSorted = postsWithTime
    .filter((post) => {
      return post.frontmatter.isPublished
    })
    .sort((a, b) => {
      return b.time - a.time
    })
  return postsWithTimeSorted
})

export const getBlogPostBySlug = cache(
  async (slug: string): Promise<Post | undefined> => {
    const posts = await getBlogPosts()
    const post = posts.find((post) => {
      return post.slug === slug
    })
    return post
  }
)
