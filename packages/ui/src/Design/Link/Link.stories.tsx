import type { Meta, StoryObj } from "@storybook/nextjs"

import { Link } from "./Link.tsx"

const meta = {
  title: "Design System/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  args: {
    children: "Link",
    href: "/",
  },
}

export const External: Story = {
  args: {
    children: "Link",
    href: "/",
    target: "_blank",
    isExternal: true,
  },
}
