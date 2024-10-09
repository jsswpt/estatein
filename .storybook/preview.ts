import "../src/index.scss";

import type { Preview } from "@storybook/react";

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
