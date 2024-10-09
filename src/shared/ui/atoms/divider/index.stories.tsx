import type { Meta, StoryObj } from "@storybook/react";

import { directionToClass, Divider as Component } from "./index";

const meta = {
  title: "Atoms/Divider",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: Object.keys(directionToClass) },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Divider: Story = {
  args: {
    direction: "horizontal",
    inheritColor: false,
  },
  render: (props) => (
    <div
      style={{
        color: "var(--PRIMARY1)",
        [props.direction === "vertical" ? "height" : "width"]: "5rem",
      }}
    >
      <Component {...props} />
    </div>
  ),
};

export default meta;
