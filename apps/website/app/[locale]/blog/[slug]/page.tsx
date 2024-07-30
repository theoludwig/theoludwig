import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getBlogPostBySlug, getBlogPosts } from "@repo/blog"
import { BlogPostUI } from "@repo/blog/BlogPostUI"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async (
  props: BlogPostPageProps,
): Promise<Metadata> => {
  const blogPost = await getBlogPostBySlug(props.params.slug)
  if (blogPost == null) {
    return notFound()
  }
  const title = `${blogPost.frontmatter.title} | Théo LUDWIG`
  const description = blogPost.frontmatter.description
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}

export const generateStaticParams = async (): Promise<
  Array<{ slug: string }>
> => {
  const posts = await getBlogPosts()
  return posts.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

const BlogPostPage: React.FC<BlogPostPageProps> = async (props) => {
  const { params } = props

  const blogPost = await getBlogPostBySlug(params.slug)
  if (blogPost == null) {
    return notFound()
  }

  return <BlogPostUI blogPost={blogPost} />
}

export default BlogPostPage
