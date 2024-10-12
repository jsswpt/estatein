import type { Meta, StoryObj } from "@storybook/react";

import { InputBase as Component, inputBaseRadiuses } from "./index";

const meta = {
  title: "Atoms/InputBase",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: inputBaseRadiuses,
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const InputBase: Story = {
  args: {
    children: <></>,
    radius: "md",
    disabled: false,
  },
  render: (props) => (
    <Component {...props}>
      <input
        disabled={props.disabled}
        style={{
          display: "block",
          width: "100%",
          height: `var(--EL-MD)`,
          color: !props.disabled ? "var(--CONTRAST1)" : "var(--OPACITIED1)",
          background: "transparent",
          border: "none",
          outline: "none",
        }}
      />
    </Component>
  ),
};

export default meta;
