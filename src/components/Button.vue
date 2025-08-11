<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :aria-label="ariaLabel"
    :aria-pressed="ariaPressed"
    :aria-expanded="ariaExpanded"
    :aria-describedby="ariaDescribedby"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="loading" class="loading-spinner" aria-hidden="true">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <slot name="icon-left" />
    <span v-if="$slots.default" class="button-content">
      <slot />
    </span>
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  ariaLabel?: string
  ariaPressed?: boolean
  ariaExpanded?: boolean
  ariaDescribedby?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  keydown: [event: KeyboardEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = ['btn']
  
  // Variant
  if (props.variant === 'outline') {
    baseClasses.push('btn-outline')
  } else if (props.variant === 'ghost') {
    baseClasses.push('btn-ghost')
  } else if (props.variant === 'link') {
    baseClasses.push('btn-link')
  } else {
    baseClasses.push(`btn-${props.variant}`)
  }
  
  // Size
  if (props.size !== 'md') {
    baseClasses.push(`btn-${props.size}`)
  }
  
  // Loading state
  if (props.loading) {
    baseClasses.push('loading')
  }
  
  // Full width
  if (props.fullWidth) {
    baseClasses.push('btn-block')
  }
  
  return baseClasses.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    if (!props.disabled && !props.loading) {
      emit('keydown', event)
      // Trigger click event for keyboard interaction
      emit('click', event as any)
    }
  }
}
</script>

<style scoped lang="postcss">
.button-content {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn {
  @apply transition-all duration-200 ease-in-out;
}

.btn:focus {
  @apply outline-none ring-2 ring-offset-2;
  --tw-ring-color: theme('colors.primary.500');
}

.btn:disabled {
  @apply cursor-not-allowed opacity-50;
}

.loading-spinner {
  @apply inline-flex items-center mr-2;
}

.btn:focus-visible {
  @apply outline-2 outline-offset-2 outline-blue-500;
}
</style> 