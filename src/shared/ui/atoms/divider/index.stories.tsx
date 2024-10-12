import type { Meta, StoryObj } from "@storybook/react";

import { Divider as Component, dividerDirections } from "./index";

const meta = {
  title: "Atoms/Divider",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: dividerDirections,
    },
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
