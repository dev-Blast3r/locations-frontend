import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jest from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Configuración para todos los archivos
  {
    files: [
      "**/*.test.{js,ts,jsx,tsx}",
      "**/__mocks__/**/*.js",
      "babel.config.js",
      "jest.config.js",
    ],
    plugins: { jest },
    languageOptions: {
      parser: tsParser, // Parser para TypeScript
      ecmaVersion: "latest", // Soporte para ES2022
      sourceType: "module", // Usar módulos
      globals: {
        ...globals.browser, // Entorno del navegador
        ...globals.node, // Entorno de Node.js
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: "detect", // Detectar automáticamente la versión de React
      },
    },
  },

  // Configuración para JavaScript
  {
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de JavaScript
      "react/react-in-jsx-scope": "off",
    },
  },

  // Configuración para React
  {
    plugins: { react },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
    rules: {
      ...react.configs.recommended.rules, // Reglas recomendadas de React
      "react/react-in-jsx-scope": "off", // React 17+ no requiere `import React`
    },
  },

  // Configuración para TypeScript
  {
    plugins: { "@typescript-eslint": ts },
    rules: {
      ...ts.configs.recommended.rules, // Reglas recomendadas de TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    plugins: { prettier },
    rules: {
      ...prettierConfig.rules, // Configuración recomendada de Prettier
      "prettier/prettier": "error", // Ejecuta Prettier como regla de ESLint
    },
  },
  // Configuración para pruebas con Jest
  {
    files: ["**/*.test.{js,ts,jsx,tsx}"],
    plugins: { jest }, // Registra el plugin jest
    languageOptions: {
      globals: {
        ...globals.jest, // Agrega las globales de Jest
      },
    },
    rules: {
      ...jest.configs.recommended.rules, // Reglas recomendadas de Jest
    },
  },

  // Reglas personalizadas adicionales
  {
    rules: {
      "no-console": "warn", // Advertencia al usar `console.log`
    },
  },
];
