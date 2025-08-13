/**
 * Node.js Test Runner Configuration
 * For Node.js 22 built-in test runner
 */
export default {
  // Test file patterns
  testMatch: ['test/**/*.test.js', 'test/**/*.spec.js', '**/__tests__/**/*.js'],

  // Coverage configuration
  coverage: {
    enabled: process.argv.includes('--experimental-coverage'),
    exclude: ['node_modules/**', 'test/**', 'coverage/**', '**/*.config.js'],
  },

  // Timeout for individual tests (in milliseconds)
  timeout: 5000,

  // Concurrency level
  concurrency: true,
};
