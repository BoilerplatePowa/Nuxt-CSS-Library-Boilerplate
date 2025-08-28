<template>
  <div class="p-8 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6">Toggle Component - Vue 3.4+ Example</h1>
    
    <div class="space-y-6">
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h2 class="card-title">Basic Usage</h2>
          <p class="text-sm text-base-content/60 mb-4">
            Using <code>defineModel()</code> for automatic v-model support
          </p>
          
          <div class="space-y-3">
            <Toggle v-model="basicToggle" label="Basic toggle" />
            <Toggle v-model="withHelp" label="With help text" helpText="This is helpful information" />
            <Toggle v-model="withError" label="With error" errorMessage="This field is required" />
          </div>
          
          <div class="mt-4 p-3 bg-base-200 rounded text-sm">
            <strong>Current values:</strong><br>
            Basic: {{ basicToggle ? 'On' : 'Off' }}<br>
            With Help: {{ withHelp ? 'On' : 'Off' }}<br>
            With Error: {{ withError ? 'On' : 'Off' }}
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h2 class="card-title">Variants & Sizes</h2>
          
          <div class="space-y-4">
            <div>
              <h3 class="font-medium mb-2">Variants</h3>
              <div class="space-y-2">
                <Toggle v-model="variants.primary" variant="primary" label="Primary" />
                <Toggle v-model="variants.secondary" variant="secondary" label="Secondary" />
                <Toggle v-model="variants.accent" variant="accent" label="Accent" />
                <Toggle v-model="variants.success" variant="success" label="Success" />
                <Toggle v-model="variants.warning" variant="warning" label="Warning" />
                <Toggle v-model="variants.info" variant="info" label="Info" />
                <Toggle v-model="variants.error" variant="error" label="Error" />
              </div>
            </div>
            
            <div>
              <h3 class="font-medium mb-2">Sizes</h3>
              <div class="space-y-2">
                <Toggle v-model="sizes.xs" size="xs" label="Extra Small" />
                <Toggle v-model="sizes.sm" size="sm" label="Small" />
                <Toggle v-model="sizes.md" size="md" label="Medium (default)" />
                <Toggle v-model="sizes.lg" size="lg" label="Large" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h2 class="card-title">Settings Example</h2>
          
          <div class="space-y-3">
            <Toggle 
              v-model="settings.notifications" 
              label="Push notifications"
              variant="primary"
              helpText="Receive notifications in real-time"
            />
            <Toggle 
              v-model="settings.darkMode" 
              label="Dark mode"
              variant="secondary"
              helpText="Switch to dark theme"
            />
            <Toggle 
              v-model="settings.autoSave" 
              label="Auto-save"
              variant="success"
              helpText="Automatically save your work"
            />
            <Toggle 
              v-model="settings.soundEffects" 
              label="Sound effects"
              variant="accent"
              helpText="Play sounds for interactions"
            />
          </div>
          
          <div class="mt-4 p-3 bg-base-200 rounded text-sm">
            <strong>Active settings:</strong>
            {{ Object.entries(settings).filter(([_, enabled]) => enabled).map(([key]) => key).join(', ') || 'None' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the Toggle component
import Toggle from './src/components/DataInput/Toggle.vue';

// Simple reactive state - no need for manual emit handling with defineModel()
const basicToggle = ref(false);
const withHelp = ref(true);
const withError = ref(false);

const variants = ref({
  primary: true,
  secondary: true,
  accent: true,
  success: true,
  warning: true,
  info: true,
  error: true,
});

const sizes = ref({
  xs: true,
  sm: true,
  md: true,
  lg: true,
});

const settings = ref({
  notifications: true,
  darkMode: false,
  autoSave: true,
  soundEffects: false,
});
</script>
