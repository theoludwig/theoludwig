import type { Meta, StoryObj } from "@storybook/react"

import { ErrorNotFound as ErrorNotFoundComponent } from "./ErrorNotFound.tsx"

const meta = {
  title: "Errors/ErrorNotFound",
  component: ErrorNotFoundComponent,
} satisfies Meta<typeof ErrorNotFoundComponent>

export default meta

type Story = StoryObj<typeof meta>

export const ErrorNotFound: Story = {
  args: {},
}
