export default [
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
      '**/*.vue', // Skip Vue files for now
      '**/*.stories.*', // Skip Storybook files
    ],
  },
]