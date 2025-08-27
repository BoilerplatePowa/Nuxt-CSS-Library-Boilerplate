<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Tabs Component with Vue 3.4 defineModel()</h1>
    
    <div class="space-y-8">
      <!-- Basic Tabs Example -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Basic Tabs</h2>
          <Tabs :tabs="basicTabs" />
        </div>
      </div>

      <!-- Controlled Tabs with v-model -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Controlled Tabs with v-model</h2>
          <div class="mb-4 p-3 bg-base-200 rounded-lg">
            <p class="text-sm">Current active tab: <strong>{{ activeTabValue }}</strong></p>
          </div>
          <Tabs 
            :tabs="controlledTabs" 
            v-model="activeTabValue"
            @tab-change="handleTabChange"
          />
        </div>
      </div>

      <!-- Tabs with Variants -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Tabs Variants</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold mb-2">Default</h3>
              <Tabs :tabs="variantTabs" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Bordered</h3>
              <Tabs :tabs="variantTabs" variant="bordered" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Lifted</h3>
              <Tabs :tabs="variantTabs" variant="lifted" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Boxed</h3>
              <Tabs :tabs="variantTabs" variant="boxed" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs with Badges -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Tabs with Badges</h2>
          <Tabs :tabs="badgeTabs" />
        </div>
      </div>

      <!-- Disabled Tabs -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Disabled Tabs</h2>
          <Tabs :tabs="disabledTabs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs } from './src/components/DataDisplay';

// Basic tabs
const basicTabs = [
  { label: 'Home', content: '<p>Welcome to the home page! This is some sample content.</p>' },
  { label: 'About', content: '<p>Learn more about our company and mission.</p>' },
  { label: 'Contact', content: '<p>Get in touch with us for any inquiries.</p>' },
];

// Controlled tabs with v-model
const activeTabValue = ref('Tab 1');
const controlledTabs = [
  { label: 'Tab 1', content: '<p>This is the first tab content.</p>' },
  { label: 'Tab 2', content: '<p>This is the second tab content.</p>' },
  { label: 'Tab 3', content: '<p>This is the third tab content.</p>' },
];

// Variant tabs
const variantTabs = [
  { label: 'Home', content: '<p>Home content</p>' },
  { label: 'About', content: '<p>About content</p>' },
  { label: 'Contact', content: '<p>Contact content</p>' },
];

// Tabs with badges
const badgeTabs = [
  { label: 'Messages', badge: '5', content: '<p>You have 5 unread messages.</p>' },
  { label: 'Notifications', badge: '12', content: '<p>You have 12 notifications.</p>' },
  { label: 'Settings', content: '<p>Configure your preferences here.</p>' },
];

// Disabled tabs
const disabledTabs = [
  { label: 'Active Tab', content: '<p>This tab is active and clickable.</p>' },
  { label: 'Disabled Tab', content: '<p>This tab is disabled.</p>', disabled: true },
  { label: 'Another Active', content: '<p>This tab is also active.</p>' },
];

// Event handler
const handleTabChange = (value: string | number) => {
  console.log('Active tab changed to:', value);
};
</script>
