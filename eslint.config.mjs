// @ts-check

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginImport from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'coverage'],
  },
  pluginJs.configs.recommended,
  // ...tseslint.configs.strictTypeChecked,
  // ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.recommended,
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    files: ['**/*.{ts}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
    },

    settings: {
      'import/resolvers': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.js', '.json'],
        },
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          parser: 'flow',
        },
      ],
      'prettier-eslint/prettier': 'error',
      'no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
);
