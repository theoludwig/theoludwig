import fs from 'fs'
import path from 'path'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { nodeTypes } from '@mdx-js/mdx'
import rehypeRaw from 'rehype-raw'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import matter from 'gray-matter'
import { getHighlighter } from 'shiki'

import { remarkSyntaxHighlightingPlugin } from './remarkSyntaxHighlightingPlugin'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export type MDXSource = MDXRemoteSerializeResult<Record<string, unknown>>

export interface FrontMatter {
  title: string
  description: string
  isPublished: boolean
  publishedOn: string
}

export interface PostMetadata {
  frontmatter: FrontMatter
  slug: string
  content: string
}

export interface Post extends PostMetadata {
  source: MDXSource
}

export const getPosts = async (): Promise<PostMetadata[]> => {
  const posts = await fs.promises.readdir(POSTS_PATH)
  const postsWithTime = await Promise.all(
    posts.map(async (postFilename) => {
      const [slug] = postFilename.split('.')
      const blogPostPath = path.join(POSTS_PATH, `${slug}.mdx`)
      const blogPostContent = await fs.promises.readFile(blogPostPath, {
        encoding: 'utf8'
      })
      const { data, content } = matter(blogPostContent) as any
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
    .filter((post) => post.frontmatter.isPublished)
    .sort((a, b) => b.time - a.time)
  return postsWithTimeSorted
}

export const getPostBySlug = async (
  slug?: string | string[]
): Promise<Post | undefined> => {
  const posts = await getPosts()
  const post = posts.find((post) => post.slug === slug)
  if (post == null) {
    return undefined
  }
  const highlighter = await getHighlighter({
    theme: 'dark-plus'
  })
  const source = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm as any,
        [remarkSyntaxHighlightingPlugin, { highlighter }]
      ],
      rehypePlugins: [
        rehypeSlug as any,
        [rehypeRaw, { passThrough: nodeTypes }]
      ]
    }
  })
  return { ...post, source }
}
