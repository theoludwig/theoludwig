import type { Meta, StoryObj } from "@storybook/react"

import { Footer as FooterComponent } from "./Footer"

const meta = {
  title: "Layout/Footer",
  component: FooterComponent,
} satisfies Meta<typeof FooterComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Footer: Story = {
  args: {
    version: "1.0.0",
  },
}
