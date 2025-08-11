<template>
  <div class="min-h-screen bg-base-100 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
                <!-- Header -->
          <div class="text-center">
            <h1 class="text-4xl font-bold text-base-content mb-4">
              Design System Example
            </h1>
            <p class="text-lg text-base-content/70">
              Example of using design system components
            </p>
          </div>

          <!-- Buttons Section -->
          <BpCard title="Buttons" variant="bordered">
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <BpButton variant="primary">Primary</BpButton>
            <BpButton variant="secondary">Secondary</BpButton>
            <BpButton variant="accent">Accent</BpButton>
            <BpButton variant="ghost">Ghost</BpButton>
            <BpButton variant="outline">Outline</BpButton>
            <BpButton variant="link">Link</BpButton>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <BpButton size="xs">XS</BpButton>
            <BpButton size="sm">SM</BpButton>
            <BpButton size="md">MD</BpButton>
            <BpButton size="lg">LG</BpButton>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <BpButton disabled>Disabled</BpButton>
            <BpButton loading>Loading</BpButton>
            <BpButton fullWidth>Full Width</BpButton>
          </div>
        </div>
      </BpCard>

                <!-- Cards Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BpCard title="Simple Card" variant="default">
              <p>This card uses the default variant with a simple title.</p>
            </BpCard>
            
            <BpCard title="Bordered Card" variant="bordered">
              <p>This card uses the bordered variant with a visible border.</p>
            </BpCard>
            
            <BpCard title="Glass Card" variant="glass">
              <p>This card uses the glass variant with a transparency effect.</p>
            </BpCard>
            
            <BpCard variant="default">
              <template #header>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">Custom Header</h3>
                  <BpButton size="sm" variant="ghost">Action</BpButton>
                </div>
              </template>
              <p>This card has a custom header with an action button.</p>
            </BpCard>
          </div>

                <!-- Complex Card Example -->
          <BpCard title="Complex Card" variant="bordered">
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="avatar placeholder">
                  <div class="bg-neutral text-neutral-content rounded-full w-12">
                    <span class="text-lg">JD</span>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold">John Doe</h4>
                  <p class="text-sm text-base-content/70">Frontend Developer</p>
                </div>
              </div>
              
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div class="flex items-center justify-between text-sm">
                <span class="badge badge-primary">Vue.js</span>
                <span class="badge badge-secondary">Nuxt 3</span>
                <span class="badge badge-accent">TypeScript</span>
              </div>
            </div>
            
            <template #footer>
              <div class="flex gap-2">
                <BpButton size="sm" variant="ghost">View Profile</BpButton>
                <BpButton size="sm" variant="primary">Contact</BpButton>
              </div>
            </template>
          </BpCard>

          <!-- Theme Switcher -->
          <BpCard title="Theme Selector" variant="outline">
            <div class="flex gap-2">
              <BpButton 
                variant="primary" 
                @click="setTheme('boilerplate-light')"
                :class="{ 'btn-outline': currentTheme !== 'boilerplate-light' }"
              >
                Light Theme
              </BpButton>
              <BpButton 
                variant="primary" 
                @click="setTheme('boilerplate-dark')"
                :class="{ 'btn-outline': currentTheme !== 'boilerplate-dark' }"
              >
                Dark Theme
              </BpButton>
            </div>
          </BpCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const currentTheme = ref('boilerplate-light')

const setTheme = (theme: string) => {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
}

// Initialize theme on load
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'boilerplate-light'
  setTheme(savedTheme)
})

// Save theme
watch(currentTheme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
})
</script> 