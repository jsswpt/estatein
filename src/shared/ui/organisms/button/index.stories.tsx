import type { Meta, StoryObj } from "@storybook/react";

import { Button as Component } from "./index";

import PressableMeta from "../../atoms/pressable/index.stories";

const meta = {
  title: "Organisms/Button",
  component: Component,
  tags: ["autodocs"],
  args: {
    color: "primary",
    variant: "contained",
    fullWidth: false,
    radius: "md",
    size: "md",
  },
  argTypes: PressableMeta.argTypes,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: "Button",
    mainIcon: {
      name: "Gift",
    },
    additionalIcon: {
      name: "ArrowRight",
    },
  },
};

export const IconButton: Story = {
  args: {
    mainIcon: {
      name: "Play",
    },
  },
};

export default meta;
