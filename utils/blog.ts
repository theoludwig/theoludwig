import fs from 'node:fs'
import path from 'node:path'

import { bundleMDXFile } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

const postsPath = path.join(process.cwd(), 'posts')

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe'
  )
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild'
  )
}

export interface FrontMatter {
  title: string
  description: string
  isPublished: boolean
  publishedOn: string
}

export interface PostOptions {
  code: string
  frontmatter: FrontMatter
  slug: string
}

export class Post implements PostOptions {
  public code: string
  public frontmatter: FrontMatter
  public slug: string

  constructor(options: PostOptions) {
    this.code = options.code
    this.frontmatter = options.frontmatter
    this.slug = options.slug
  }

  static async build(slug: string): Promise<Post> {
    const bundledMdx = await bundleMDXFile(
      path.join(postsPath, `${slug}.mdx`),
      {
        xdmOptions(options) {
          options.remarkPlugins = [
            ...(options.remarkPlugins ?? []),
            remarkGfm,
            remarkPrism as any
          ]
          return options
        }
      }
    )
    const frontmatter = bundledMdx.frontmatter as FrontMatter
    return {
      code: bundledMdx.code,
      frontmatter,
      slug
    }
  }

  static async getBySlug(slug?: string | string[]): Promise<Post | undefined> {
    const posts = await Post.getMany()
    const post = posts.find((post) => post.slug === slug)
    return post
  }

  static async getMany(): Promise<Post[]> {
    const posts = await fs.promises.readdir(postsPath)
    const postsWithTime = await Promise.all(
      posts.map(async (postFilename) => {
        const [slug] = postFilename.split('.')
        const post = await Post.build(slug)
        const date = new Date(post.frontmatter.publishedOn)
        return {
          ...post,
          time: date.getTime()
        }
      })
    )
    const postsWithTimeSorted = postsWithTime
      .filter((post) => post.frontmatter.isPublished)
      .sort((a, b) => b.time - a.time)
    return postsWithTimeSorted
  }
}
