import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from 'eslint-plugin-prettier'


export default [
  {
    files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},
    plugins:{
      prettier
    },
    rules: {
      'no-console': 'off', // Allow console.log() in Node.js
      'no-unused-vars': 'warn', // Warn instead of error for unused variables
      'prefer-const': 'error', // Enforce using const for variables that are never reassigned
      'no-var': 'error', // Disallow var, prefer const or let
      'arrow-body-style': ['error', 'as-needed'], // Enforce braces around arrow function body when needed
      'prettier/prettier': 'error', // Ensure Prettier rules are enforce
    }
  },
  {
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
];