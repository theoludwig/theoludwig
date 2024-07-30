import type { Meta, StoryObj } from "@storybook/react"

import { OpenSource as OpenSourceComponent } from "./OpenSource"

const meta = {
  title: "Feature/OpenSource",
  component: OpenSourceComponent,
} satisfies Meta<typeof OpenSourceComponent>

export default meta

type Story = StoryObj<typeof meta>

export const OpenSource: Story = {
  args: {},
}
