import type { Meta, StoryObj } from "@storybook/nextjs"

import { Skills as SkillsComponent } from "./Skills.tsx"

const meta = {
  title: "Home/Skills",
  component: SkillsComponent,
} satisfies Meta<typeof SkillsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Skills: Story = {
  args: {},
}
