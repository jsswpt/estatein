// @ts-check
import { defineConfig } from "astro/config";

import { resolve } from "node:path";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [react()],
  vite: {
    resolve: { alias: { root: resolve(__dirname, "./src") } },
  },
});
