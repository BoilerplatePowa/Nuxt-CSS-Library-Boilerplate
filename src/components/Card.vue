<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-actions justify-end">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  variant?: 'default' | 'bordered' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  shadow: 'md'
})

const cardClasses = computed(() => {
  const baseClasses = ['card']
  
  // Variant
  if (props.variant === 'bordered') {
    baseClasses.push('card-bordered')
  } else if (props.variant === 'glass') {
    baseClasses.push('card-glass')
  }
  
  // Shadow
  if (props.shadow !== 'none') {
    baseClasses.push(`shadow-${props.shadow}`)
  }
  
  // Padding
  if (props.padding === 'none') {
    baseClasses.push('p-0')
  } else if (props.padding === 'sm') {
    baseClasses.push('p-2')
  } else if (props.padding === 'lg') {
    baseClasses.push('p-6')
  }
  
  return baseClasses.join(' ')
})
</script>

<style scoped lang="postcss">
.card {
  @apply bg-base-100 rounded-lg transition-all duration-200 ease-in-out;
}

.card:hover {
  @apply shadow-lg;
}

.card-header {
  @apply border-b border-base-300 p-4;
}

.card-title {
  @apply text-lg font-semibold text-base-content;
}

.card-body {
  @apply p-4;
}

.card-actions {
  @apply border-t border-base-300 p-4;
}

.card-glass {
  @apply backdrop-blur-sm bg-base-100/80;
}

.card-bordered {
  @apply border border-base-300;
}
</style> 