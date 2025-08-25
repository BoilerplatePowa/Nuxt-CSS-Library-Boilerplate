<template>
  <div class="form-control">
    <!-- Checkbox with label -->
    <label 
      v-if="label" 
      :class="labelClasses"
      :for="inputId"
    >
      <input
        :id="inputId"
        v-model="checkboxValue"
        type="checkbox"
        :class="checkboxClasses"
        :disabled="disabled"
        :required="required"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="hasError"
        :indeterminate="indeterminate"
        @change="handleChange"
        @blur="handleBlurEvent"
      />
      <span class="text-sm leading-tight text-base-content">{{ label }}</span>
    </label>

    <!-- Checkbox without label -->
    <input
      v-else
      :id="inputId"
      v-model="checkboxValue"
      type="checkbox"
      :class="checkboxClasses"
      :disabled="disabled"
      :required="required"
      :aria-describedby="ariaDescribedby"
      :aria-invalid="hasError"
      :indeterminate="indeterminate"
      @change="handleChange"
      @blur="handleBlurEvent"
    />
    
    <!-- Help text -->
    <p 
      v-if="helpText && !hasError" 
      :id="`${inputId}-help`" 
      class="text-xs text-base-content/70 mt-1"
    >
      {{ helpText }}
    </p>
    
    <!-- Error message -->
    <p 
      v-if="hasError" 
      :id="`${inputId}-error`" 
      class="text-xs text-error mt-1" 
      role="alert"
      aria-live="polite"
    >
      {{ displayErrorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, watch } from 'vue'
import { useField } from 'vee-validate'
import type { Size, Variant } from '~/shared/types.d'

// Simple ID generator with better uniqueness
let idCounter = 0
const generateId = () => `checkbox-${Date.now()}-${++idCounter}`

interface Props {
  name?: string // Field name for VeeValidate
  label?: string
  helpText?: string
  errorMessage?: string
  disabled?: boolean
  required?: boolean
  indeterminate?: boolean
  size?: Size
  variant?: Variant
  ariaDescribedby?: string
  validateOnValueUpdate?: boolean
  validateOnBlur?: boolean
  validateOnChange?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  indeterminate: false,
  size: 'md',
  variant: 'primary',
  validateOnValueUpdate: true,
  validateOnBlur: true,
  validateOnChange: true,
})

// Use defineModel() for v-model (Vue 3.4+)
const model = defineModel<boolean>({ default: false })

const emit = defineEmits<{
  change: [event: Event, value: boolean]
  blur: [event: Event]
}>()

const inputId = generateId()

// Use VeeValidate field if name is provided
const { value: fieldValue, errorMessage, handleBlur, setValue } = useField<boolean>(
  () => props.name || '',
  undefined,
  {
    type: 'checkbox',
    initialValue: model.value,
    validateOnValueUpdate: props.validateOnValueUpdate,
    checkedValue: true,
    uncheckedValue: false,
  }
)

// Computed value that works with both VeeValidate and v-model
const checkboxValue = computed({
  get: () => {
    // If using VeeValidate (name is provided), use field value
    if (props.name) {
      return Boolean(fieldValue.value)
    }
    // Otherwise use v-model
    return Boolean(model.value)
  },
  set: (value: unknown) => {
    const booleanValue = Boolean(value)
    
    if (props.name) {
      // Update VeeValidate field
      setValue(booleanValue)
    }
    
    // Always update v-model
    model.value = booleanValue
  },
})

// Error handling
const hasError = computed(() => Boolean(displayErrorMessage.value))

const displayErrorMessage = computed(() => {
  if (props.name && errorMessage.value) {
    return errorMessage.value
  }
  return props.errorMessage
})

// CSS classes using DaisyUI and Tailwind
const labelClasses = computed(() => [
  'label',
  'cursor-pointer',
  'flex',
  'items-center',
  'gap-2',
  'select-none',
  {
    'opacity-50': props.disabled
  }
])

const checkboxClasses = computed(() => {
  const baseClasses = ['checkbox']

  // DaisyUI size classes
  if (props.size) {
    baseClasses.push(`checkbox-${props.size}`)
  }

  // DaisyUI variant classes
  if (props.variant) {
    baseClasses.push(`checkbox-${props.variant}`)
  }

  // Error state
  if (hasError.value) {
    baseClasses.push('checkbox-error')
  }

  return baseClasses
})

// Accessibility
const ariaDescribedby = computed(() => {
  const ids: string[] = []
  
  if (props.helpText && !hasError.value) {
    ids.push(`${inputId}-help`)
  }
  
  if (hasError.value) {
    ids.push(`${inputId}-error`)
  }
  
  if (props.ariaDescribedby) {
    ids.push(props.ariaDescribedby)
  }
  
  return ids.length > 0 ? ids.join(' ') : undefined
})

// Event handlers
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const booleanValue = target.checked
  
  // Update indeterminate state if needed
  if (props.indeterminate) {
    nextTick(() => {
      target.indeterminate = props.indeterminate
    })
  }
  
  emit('change', event, booleanValue)
}

const handleBlurEvent = (event: Event) => {
  if (props.name) {
    // Use VeeValidate handler
    handleBlur(event)
  }
  
  emit('blur', event)
}

// Watch for indeterminate prop changes
watch(() => props.indeterminate, (newValue: boolean | undefined) => {
  if (newValue !== undefined) {
    nextTick(() => {
      const input = document.getElementById(inputId) as HTMLInputElement
      if (input) {
        input.indeterminate = newValue
      }
    })
  }
}, { immediate: true })
</script>


