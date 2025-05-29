import type { Meta, StoryObj } from "@storybook/nextjs"

import { CurriculumVitae as CurriculumVitaeComponent } from "./CurriculumVitae.tsx"

const meta = {
  title: "Curriculum Vitae/CurriculumVitae",
  component: CurriculumVitaeComponent,
} satisfies Meta<typeof CurriculumVitaeComponent>

export default meta

type Story = StoryObj<typeof meta>

export const CurriculumVitae: Story = {
  args: {},
}
