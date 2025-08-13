import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  // Base configuration
  js.configs.recommended,
  
  // Vue recommended rules
  ...vue.configs['flat/recommended'],
  
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'off', // TypeScript handles this
      'no-unused-vars': 'off', // Use TypeScript version
    },
  },
  
  // Vue files with TypeScript
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'no-undef': 'off',
    },
  },
  
  // Vue files with TypeScript
  {
    files: ['**/*.vue'],
    rules: {
      // Relax Vue rules for better developer experience
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/require-default-prop': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/attributes-order': 'off',
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.nuxt/**',
      'coverage/**',
      'storybook-static/**',
      'cypress/**',
      '.storybook/**',
      '*.config.*',
      'scripts/**',
      'test/**',
      '.eslintrc.cjs', // Ignore legacy config file
    ],
  },
]