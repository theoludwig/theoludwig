import type { Meta, StoryObj } from "@storybook/react"

import { Skills as SkillsComponent } from "./Skills"

const meta = {
  title: "Feature/Skills",
  component: SkillsComponent,
} satisfies Meta<typeof SkillsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Skills: Story = {
  args: {},
}
