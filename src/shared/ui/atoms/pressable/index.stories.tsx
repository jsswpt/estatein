import type { Meta, StoryObj } from "@storybook/react";

import {
  Pressable as Component,
  pressableColors,
  pressableRadiuses,
  pressableSizes,
  pressableVariants,
} from "./";

const meta = {
  title: "Atoms/Pressable",
  component: Component,
  tags: ["autodocs"],
  args: {
    color: "primary",
    variant: "contained",
    size: "md",
    disabled: false,
    radius: "none",
  },
  argTypes: {
    color: {
      control: "select",
      options: pressableColors,
    },
    variant: {
      control: "select",
      options: pressableVariants,
    },
    size: {
      control: "select",
      options: pressableSizes,
    },
    radius: {
      control: "select",
      options: pressableRadiuses,
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Pressable: Story = {
  args: {
    fullWidth: true,
    squared: false,
    children: (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        Pressable
      </span>
    ),
  },
};

export const PressableSquared: Story = {
  args: {
    fullWidth: false,
    squared: true,
    children: (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <i style={{ display: "block", height: "75%", overflow: "hidden" }}>
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
      </span>
    ),
  },
};

export default meta;
