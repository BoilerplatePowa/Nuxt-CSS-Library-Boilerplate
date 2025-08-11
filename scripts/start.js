#!/usr/bin/env node

import { spawn } from 'child_process'
import { existsSync } from 'fs'
import path from 'path'

console.log('🎨 Design System - Automatic Startup')
console.log('=====================================')

// Check if dependencies are installed
if (!existsSync('node_modules')) {
  console.log('📦 Installing dependencies...')
  const install = spawn('npm', ['install'], { stdio: 'inherit' })
  
  install.on('close', (code) => {
    if (code === 0) {
      startStorybook()
    } else {
      console.error('❌ Error installing dependencies')
      process.exit(1)
    }
  })
} else {
  startStorybook()
}

function startStorybook() {
  console.log('🚀 Starting Storybook...')
  console.log('📖 Available at: http://localhost:6006')
  console.log('🛑 Press Ctrl+C to stop')
  console.log('')
  
  const storybook = spawn('npm', ['run', 'storybook'], { stdio: 'inherit' })
  
  storybook.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Storybook stopped with an error')
    }
  })
  
  // Clean shutdown handling
  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down development server...')
    storybook.kill('SIGINT')
    process.exit(0)
  })
} 