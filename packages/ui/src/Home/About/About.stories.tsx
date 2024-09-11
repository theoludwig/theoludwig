import type { Meta, StoryObj } from "@storybook/react"

import { About as AboutComponent } from "./About.tsx"

const meta = {
  title: "Home/About",
  component: AboutComponent,
} satisfies Meta<typeof AboutComponent>

export default meta

type Story = StoryObj<typeof meta>

export const About: Story = {
  args: {},
}
