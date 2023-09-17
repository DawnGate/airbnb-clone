import type { Meta, StoryObj } from '@storybook/react'

import Text from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Text>

export const Size: Story = {
  args: {
    fontSize: 'xs',
    children: 'Text',
  },
}

export const Weight: Story = {
  args: {
    children: 'Text',
    fontWeight: 'normal',
  },
}

export const Variant: Story = {
  args: {
    children: 'Text',
    as: 'p',
  },
}

export const Casing: Story = {
  args: {
    children: 'Text',
    casing: 'none',
  },
}

export const LetterSpacing: Story = {
  args: {
    children: 'Text',
    letterSpacing: 'normal',
  },
}

export const Align: Story = {
  args: {
    children: 'Text',
    align: 'left',
  },
}
