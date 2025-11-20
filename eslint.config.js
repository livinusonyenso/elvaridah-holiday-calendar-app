import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist'] },

  // TypeScript + React config
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      // TypeScript Rules
      ...tseslint.configs.recommended.rules,

      // React Hooks Rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh Rule
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Optional: Good defaults
      'no-unused-vars': 'off', // turned off in favor of TS version
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
]
