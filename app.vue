<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

// Default theme configuration
useHead({
  htmlAttrs: {
    'data-theme': 'boilerplate-light'
  }
})
</script> 