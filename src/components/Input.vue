<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1" aria-label="required">*</span>
    </label>
    
    <div :class="inputContainerClasses">
      <slot name="prefix" />
      
      <input
        :id="inputId"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="invalid"
        :aria-describedby="ariaDescribedby"
        :class="inputClasses"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <slot name="suffix" />
    </div>
    
    <p v-if="helpText && !errorMessage" :id="`${inputId}-help`" class="mt-1 text-sm text-gray-600">
      {{ helpText }}
    </p>
    
    <p v-if="errorMessage" :id="`${inputId}-error`" class="mt-1 text-sm text-red-600" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Simple ID generator for compatibility
let idCounter = 0
const generateId = () => `input-${++idCounter}`

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  helpText?: string
  errorMessage?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  invalid?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'outline'
  ariaDescribedby?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  invalid: false,
  size: 'md',
  variant: 'default'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  input: [event: Event]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputId = generateId()

const wrapperClasses = computed(() => ['form-control', 'w-full'])

const labelClasses = computed(() => [
  'label',
  'text-sm',
  'font-medium',
  'text-gray-700',
  'mb-1',
  'block'
])

const inputContainerClasses = computed(() => [
  'relative',
  'flex',
  'items-center'
])

const inputClasses = computed(() => {
  const baseClasses = [
    'input',
    'w-full',
    'transition-colors',
    'duration-200',
    'ease-in-out'
  ]
  
  // Size
  if (props.size === 'sm') {
    baseClasses.push('input-sm')
  } else if (props.size === 'lg') {
    baseClasses.push('input-lg')
  } else {
    baseClasses.push('input-md')
  }
  
  // Variant
  if (props.variant === 'filled') {
    baseClasses.push('input-filled')
  } else if (props.variant === 'outline') {
    baseClasses.push('input-bordered')
  } else {
    baseClasses.push('input-bordered')
  }
  
  // States
  if (props.invalid || props.errorMessage) {
    baseClasses.push('input-error')
  }
  
  if (props.disabled) {
    baseClasses.push('input-disabled')
  }
  
  return baseClasses.join(' ')
})

const ariaDescribedby = computed(() => {
  const ids = []
  if (props.helpText) ids.push(`${inputId}-help`)
  if (props.errorMessage) ids.push(`${inputId}-error`)
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped lang="postcss">
.input {
  @apply px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.input-sm {
  @apply px-2 py-1 text-sm;
}

.input-lg {
  @apply px-4 py-3 text-lg;
}

.input-filled {
  @apply bg-gray-100 border-transparent;
}

.input-error {
  @apply border-red-300 focus:ring-red-500 focus:border-red-500;
}

.input-disabled {
  @apply bg-gray-50 text-gray-500 cursor-not-allowed;
}

.label {
  @apply text-gray-700 font-medium;
}
</style>