import type { Meta, StoryObj } from "@storybook/react";

import {
  InteractionInner as Component,
  interactionInnerAlignments,
  interactionInnerGaps,
} from "./index";

const meta = {
  title: "Molecules/InteractionInner",
  component: Component,
  tags: ["autodocs"],
  args: {
    gap: "md",
    align: "center",
    children: <span className="action1">children</span>,
  },
  argTypes: {
    align: {
      control: "select",
      options: interactionInnerAlignments,
    },
    gap: {
      control: "select",
      options: interactionInnerGaps,
    },
  },
  render: (props) => (
    <div
      style={{
        color: "white",
        height: "var(--EL-MD)",
      }}
    >
      <Component {...props} />
    </div>
  ),
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

const icon = (
  <i
    style={{
      display: "block",
      height: "var(--ICON-MD)",
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      fill="none"
      style={{ height: "100%", width: "100%" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
        fill="currentColor"
      />
    </svg>
  </i>
);

export const InteractionInner: Story = {
  args: {
    slotStart: icon,
    slotEnd: icon,
  },
};

export const InteractionInnerSlotStart: Story = {
  args: {
    slotStart: icon,
  },
};

export const InteractionInnerSlotEnd: Story = {
  args: {
    slotEnd: icon,
  },
};

export const InteractionInnerNoSlot: Story = {
  args: {},
};

export default meta;
