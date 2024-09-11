import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "@storybook/test"
import { FaCheck } from "react-icons/fa"

import type { ButtonLinkProps } from "./Button.tsx"
import { Button } from "./Button.tsx"

const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const ButtonContainer: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return <div className="flex gap-4">{children}</div>
}

export const Component: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText("Button"))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Variants: Story = {
  render: (args) => {
    return (
      <ButtonContainer>
        <Button variant="solid" {...args}>
          Solid
        </Button>
        <Button variant="outline" {...args}>
          Outline
        </Button>
      </ButtonContainer>
    )
  },
}

export const Sizes: Story = {
  render: (args) => {
    return (
      <ButtonContainer>
        <Button size="small" {...args}>
          Small
        </Button>
        <Button size="medium" {...args}>
          Medium
        </Button>
        <Button size="large" {...args}>
          Large
        </Button>
      </ButtonContainer>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <ButtonContainer>
        <Button variant="solid" disabled {...args}>
          Solid
        </Button>
        <Button variant="outline" disabled {...args}>
          Outline
        </Button>
      </ButtonContainer>
    )
  },
}

export const Loading: Story = {
  render: (args) => {
    return (
      <ButtonContainer>
        <Button variant="solid" isLoading {...args}>
          Solid
        </Button>
        <Button variant="outline" isLoading {...args}>
          Outline
        </Button>
      </ButtonContainer>
    )
  },
}

export const Icons: Story = {
  render: (args) => {
    return (
      <ButtonContainer>
        <Button leftIcon={<FaCheck size={18} />} {...args}>
          Left Icon
        </Button>
        <Button rightIcon={<FaCheck size={18} />} {...args}>
          Right Icon
        </Button>
      </ButtonContainer>
    )
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    href: "/",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole("link", {
        name: "Link",
      }),
    ).toHaveAttribute("href", args.href)
  },
}

export const LinkWithIcons: Story = {
  args: {
    href: "/",
  },
  render: (args) => {
    return (
      <ButtonContainer>
        <Button leftIcon={<FaCheck size={18} />} {...(args as ButtonLinkProps)}>
          Link Left Icon
        </Button>
        <Button
          rightIcon={<FaCheck size={18} />}
          {...(args as ButtonLinkProps)}
        >
          Link Right Icon
        </Button>
      </ButtonContainer>
    )
  },
}
