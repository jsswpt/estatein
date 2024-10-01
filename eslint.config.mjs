import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.astro", "**/*.tsx"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "react/no-unknown-property": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
