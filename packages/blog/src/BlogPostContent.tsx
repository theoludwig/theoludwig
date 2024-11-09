import { nodeTypes } from "@mdx-js/mdx"
import rehypeShiki from "@shikijs/rehype"
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import { FaLink } from "react-icons/fa"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import { Link } from "@repo/i18n/routing"
import "katex/dist/katex.min.css"
import { BlogPostComments } from "./BlogPostComments.tsx"

const Heading: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > & { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
> = (props) => {
  const { children, as, id = "", ...rest } = props

  const ComponentAs = as

  return (
    <ComponentAs id={id} {...rest}>
      <Link href={`#${id}`} className="group relative hover:no-underline">
        <FaLink className="absolute bottom-2 left-[-26px] mr-2 hidden size-4 !text-black group-hover:inline dark:!text-white" />
        {children}
      </Link>
    </ComponentAs>
  )
}

export interface BlogPostContentProps {
  content: string
}

export const BlogPostContent: React.FC<BlogPostContentProps> = async (
  props,
) => {
  const { content } = props

  return (
    <div className="prose mb-10">
      <div className="px-4 sm:px-8">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath],
              rehypePlugins: [
                rehypeSlug,
                [rehypeRaw, { passThrough: nodeTypes }],
                rehypeKatex,
                [
                  rehypeShiki,
                  {
                    themes: {
                      light: "light-plus",
                      dark: "dark-plus",
                    },
                  },
                ],
              ],
            },
          }}
          components={{
            h1: (props) => {
              return <Heading as="h1" {...props} />
            },
            h2: (props) => {
              return <Heading as="h2" {...props} />
            },
            h3: (props) => {
              return <Heading as="h3" {...props} />
            },
            h4: (props) => {
              return <Heading as="h4" {...props} />
            },
            h5: (props) => {
              return <Heading as="h5" {...props} />
            },
            h6: (props) => {
              return <Heading as="h6" {...props} />
            },
            img: (properties) => {
              const { src = "", alt = "Blog Image" } = properties
              const source = src.replace("../../../apps/website/public/", "/")
              return (
                <span className="flex flex-col items-center justify-center">
                  <Image
                    src={source}
                    alt={alt}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="size-auto"
                  />
                </span>
              )
            },
            a: (props) => {
              const { href = "", ...rest } = props
              if (href.startsWith("#")) {
                return <a {...props} />
              }
              if (href.startsWith("../posts/")) {
                return (
                  <Link
                    href={href
                      .replace("../posts/", "/blog/")
                      .replace(".md", "")}
                    {...rest}
                  />
                )
              }
              return <a target="_blank" {...props} />
            },
          }}
        />
        <BlogPostComments />
      </div>
    </div>
  )
}
