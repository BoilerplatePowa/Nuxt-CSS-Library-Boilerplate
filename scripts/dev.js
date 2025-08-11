#!/usr/bin/env node

import { execSync } from 'child_process'
import path from 'path'

console.log('🚀 Starting Design System development...')

try {
  // Install dependencies if needed
  console.log('📦 Checking dependencies...')
  execSync('npm install', { stdio: 'inherit' })
  
  // Launch Storybook
  console.log('📚 Launching Storybook...')
  execSync('npm run storybook', { stdio: 'inherit' })
} catch (error) {
  console.error('❌ Error during startup:', error.message)
  process.exit(1)
} 