import type { Meta, StoryObj } from "@storybook/react";

import { Icon as Component } from "./index";
import * as icons from "./ui";

const meta = {
  title: "Atoms/Icon",
  component: Component,
  tags: ["autodocs"],
  args: {
    name: undefined,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "solid"],
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Iconography: Story = {
  args: {
    variant: "outline",
  },
  render: (props) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "1rem",
      }}
    >
      {Object.keys(icons).map((icon) => {
        const Component = icons[icon as keyof typeof icons];

        return (
          <div
            key={icon}
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.5rem",
              background: "var(--SURFACE1)",
              color: "var(--CONTRAST1)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <span
              className="h6"
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              title={icon}
            >
              {icon}
            </span>
            <Component variant={props.variant} />
          </div>
        );
      })}
    </div>
  ),
};

export default meta;
