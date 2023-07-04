import type { Meta, StoryObj } from "@storybook/react";

import Box from ".";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Hello",
  },
};
