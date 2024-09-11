import type { Meta, StoryObj } from "@storybook/react"

import { BLOG_POST_MOCK } from "../BlogPost.ts"
import { BlogPostUI as BlogPostUIComponent } from "../BlogPostUI.tsx"

const meta = {
  title: "Blog/BlogPostUI",
  component: BlogPostUIComponent,
} satisfies Meta<typeof BlogPostUIComponent>

export default meta

type Story = StoryObj<typeof meta>

export const BlogPostUI: Story = {
  args: {
    blogPost: BLOG_POST_MOCK,
  },
}
