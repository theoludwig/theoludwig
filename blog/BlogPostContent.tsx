import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { MDXRemote } from "next-mdx-remote/rsc"
import { nodeTypes } from "@mdx-js/mdx"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { getHighlighter } from "shiki"

import "katex/dist/katex.min.css"

import { getTheme } from "@/theme/theme.server"
import { remarkSyntaxHighlightingPlugin } from "@/blog/remarkSyntaxHighlightingPlugin"
import { BlogPostComments } from "@/blog/BlogPostComments"

const Heading = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
): JSX.Element => {
  const { children, id = "" } = props
  return (
    <h2 {...props}>
      <Link href={`#${id}`} className="group relative hover:no-underline">
        <FontAwesomeIcon
          className="absolute bottom-2 left-[-26px] mr-2 hidden size-4 !text-black group-hover:inline dark:!text-white"
          icon={faLink}
        />
        {children}
      </Link>
    </h2>
  )
}

export interface BlogPostContentProps {
  content: string
}

export const BlogPostContent = async (
  props: BlogPostContentProps,
): Promise<JSX.Element> => {
  const { content } = props

  const cookiesStore = cookies()
  const theme = getTheme()

  const highlighter = await getHighlighter({
    theme: `${theme}-plus`,
  })

  return (
    <div className="prose mb-10">
      <div className="px-8">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                remarkGfm,
                [remarkSyntaxHighlightingPlugin, { highlighter }],
                remarkMath,
              ],
              rehypePlugins: [
                rehypeSlug,
                [rehypeRaw, { passThrough: nodeTypes }],
                rehypeKatex,
              ],
            },
          }}
          components={{
            h1: Heading,
            h2: Heading,
            h3: Heading,
            h4: Heading,
            h5: Heading,
            h6: Heading,
            img: (properties) => {
              const { src = "", alt = "Blog Image" } = properties
              const source = src.replace("../../public/", "/")
              return (
                <span className="flex flex-col items-center justify-center">
                  <Image
                    src={source}
                    alt={alt}
                    width={1000}
                    height={1000}
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
                  <a
                    href={href
                      .replace("../posts/", "/blog/")
                      .replace(".md", "")}
                    {...rest}
                  />
                )
              }
              return <a target="_blank" rel="noopener noreferrer" {...props} />
            },
          }}
        />
        <BlogPostComments cookiesStore={cookiesStore.toString()} />
      </div>
    </div>
  )
}
