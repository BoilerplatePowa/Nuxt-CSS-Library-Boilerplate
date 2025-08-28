<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">Tabs Component - Vue 3.4 defineModel Example</h1>
    
    <!-- Basic Tabs with v-model -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Basic Tabs with v-model</h2>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-sm mb-2">Current active tab: <strong>{{ activeTab }}</strong></p>
      </div>
      <Tabs 
        :tabs="basicTabs" 
        v-model="activeTab"
        @tab-change="onTabChange"
      />
    </div>

    <!-- Tabs with custom values -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Tabs with Custom Values</h2>
      <div class="p-4 bg-base-200 rounded-lg">
        <p class="text-sm mb-2">Current active tab value: <strong>{{ customActiveTab }}</strong></p>
      </div>
      <Tabs 
        :tabs="customTabs" 
        v-model="customActiveTab"
        @tab-change="onCustomTabChange"
      />
    </div>

    <!-- Different variants -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Different Variants</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium mb-2">Default</h3>
          <Tabs :tabs="basicTabs" />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">Bordered</h3>
          <Tabs :tabs="basicTabs" variant="bordered" />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">Lifted</h3>
          <Tabs :tabs="basicTabs" variant="lifted" />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">Boxed</h3>
          <Tabs :tabs="basicTabs" variant="boxed" />
        </div>
      </div>
    </div>

    <!-- Tabs with badges -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Tabs with Badges</h2>
      <Tabs :tabs="badgeTabs" />
    </div>

    <!-- Different sizes -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Different Sizes</h2>
      <div class="space-y-4">
        <Tabs :tabs="[{label: 'Small'}, {label: 'Tabs'}]" size="sm" variant="bordered" />
        <Tabs :tabs="[{label: 'Medium'}, {label: 'Tabs'}]" size="md" variant="bordered" />
        <Tabs :tabs="[{label: 'Large'}, {label: 'Tabs'}]" size="lg" variant="bordered" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs } from './src/components/DataDisplay';

// Basic tabs with v-model
const activeTab = ref('Tab 1');
const basicTabs = [
  { label: 'Tab 1', content: '<p>Welcome to the first tab! This demonstrates basic v-model functionality.</p>' },
  { label: 'Tab 2', content: '<p>This is the second tab content. The v-model automatically updates when you click tabs.</p>' },
  { label: 'Tab 3', content: '<p>Third tab content here. Notice how the active tab state is managed by Vue 3.4 defineModel.</p>' },
];

// Custom tabs with values
const customActiveTab = ref('home');
const customTabs = [
  { label: 'Home', value: 'home', content: '<p>Welcome to the home page! This tab uses a custom value instead of the label.</p>' },
  { label: 'About', value: 'about', content: '<p>Learn more about us. Custom values allow for more flexible data binding.</p>' },
  { label: 'Contact', value: 'contact', content: '<p>Get in touch with us. The v-model now tracks the custom value.</p>' },
];

// Tabs with badges
const badgeTabs = [
  { label: 'Messages', badge: '5', content: '<p>You have 5 unread messages.</p>' },
  { label: 'Notifications', badge: '12', content: '<p>You have 12 notifications.</p>' },
  { label: 'Settings', content: '<p>Configure your preferences here.</p>' },
];

// Event handlers
const onTabChange = (value: string | number) => {
  console.log('Basic tab changed to:', value);
};

const onCustomTabChange = (value: string | number) => {
  console.log('Custom tab changed to:', value);
};
</script>
