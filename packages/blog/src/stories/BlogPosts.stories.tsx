import type { Meta, StoryObj } from "@storybook/react"

import { BLOG_POST_MOCK } from "../BlogPost"
import { BlogPosts as BlogPostsComponent } from "../BlogPosts"

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
