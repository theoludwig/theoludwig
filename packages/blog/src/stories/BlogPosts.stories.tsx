import type { Meta, StoryObj } from "@storybook/nextjs"

import { BLOG_POST_MOCK } from "../BlogPost.ts"
import { BlogPosts as BlogPostsComponent } from "../BlogPosts.tsx"

const meta = {
  title: "Blog/BlogPosts",
  component: BlogPostsComponent,
} satisfies Meta<typeof BlogPostsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const BlogPosts: Story = {
  args: {
    posts: [BLOG_POST_MOCK],
  },
}
