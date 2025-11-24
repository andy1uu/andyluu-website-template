import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js, prettier: eslintPluginPrettier }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      "prettier/prettier": "error", 
      "indent": ["error", 2],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "format": ["camelCase", "PascalCase", "UPPER_CASE"]
        },
        {
          "selector": "function",
          "format": ["camelCase", "PascalCase"]
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"]
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { 
          argsIgnorePattern: "^_", 
          varsIgnorePattern: "^_", 
          caughtErrorsIgnorePattern: "^_" 
        }
      ],
      "arrow-body-style": ["error", "as-needed"],
      "react/self-closing-comp": ["error", { "component": true, "html": true }],
    },
  },
  globalIgnores([
    "public",
    "build",
    "tailwind.config.js",
    "postcss.config.js",
    "eslint.config.mts",
    "next.config.mjs",
    ".next",
    "dist",
    ".vercel",
    ".github",
    ".vscode",
    "lib",
    "next-env.d.ts",
  ]),
]);
