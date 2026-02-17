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

export const BLOG_POST_MOCK = {
  slug: "hello-world",
  content:
    "\nHello, world! 👋\n\n## Introduction\n\nThis blog is here to document my journey of learning computer science.",
  frontmatter: {
    title: "👋 Hello, world!",
    description: "First post of the blog, introduction and explanation of how this blog is made.",
    isPublished: true,
    publishedOn: "2022-02-20T08:00:18.758Z",
  },
} satisfies BlogPost
