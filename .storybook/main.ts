import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  viteFinal: (config, options) => ({
    ...config,
    resolve: { alias: { root: resolve(__dirname, "..", "./src") } },
  }),
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
