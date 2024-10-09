import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import pluginReact from "eslint-plugin-react";
import eslintPluginImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginExportSort from "eslint-plugin-sort-exports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "simple-import-sort": eslintPluginImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000"],

            ["^react$", "^@?\\w"],

            ["((:?root[W]shared[W]ui[W]atoms))"],
            ["((:?root[W]shared[W]ui[W]molecules))"],
            ["((:?root[W]shared[W]ui[W]organisms))"],
            ["((:?root[W]shared[W]ui[W]templates))"],

            ["^\\./"],

            ["^.+\\.(module.css|module.scss)$"],

            ["^.+\\.(gif|png|svg|jpg)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "off",
    },
  },
  {
    plugins: {
      "sort-exports": eslintPluginExportSort,
    },
    rules: {
      "sort-exports/sort-exports": [
        "error",
        { sortDir: "asc", ignoreCase: true, pattern: "**/index.ts" },
      ],
    },
  },
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
      "react/display-name": "off",
      "no-unused-vars": ["error"],
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
