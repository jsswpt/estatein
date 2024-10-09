import type { Preview } from "@storybook/react";
import "../src/index.scss";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Main", value: "var(--MAIN1)" },
        { name: "Surface", value: "var(--SURFACE1)" },
      ],
      default: "Main",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
