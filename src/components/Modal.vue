<template>
  <Teleport to="body">
    <Transition
      name="modal"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-if="modelValue"
        :class="overlayClasses"
        role="dialog"
        :aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        @click="handleOverlayClick"
        @keydown.esc="handleEscape"
      >
        <div
          ref="modalRef"
          :class="modalClasses"
          @click.stop
        >
          <!-- Header -->
          <header v-if="$slots.header || title" :class="headerClasses">
            <slot name="header">
              <h2 :id="titleId" :class="titleClasses">
                {{ title }}
              </h2>
            </slot>
            
            <button
              v-if="closable"
              type="button"
              :class="closeButtonClasses"
              aria-label="Close modal"
              @click="close"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>
          
          <!-- Body -->
          <div :id="descriptionId" :class="bodyClasses">
            <slot />
          </div>
          
          <!-- Footer -->
          <footer v-if="$slots.footer" :class="footerClasses">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

// Simple ID generator for compatibility
let idCounter = 0
const generateId = () => `modal-${++idCounter}`

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  closeOnOverlay?: boolean
  closeOnEsc?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  closable: true,
  closeOnOverlay: true,
  closeOnEsc: true,
  persistent: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  open: []
  escape: []
}>()

const modalRef = ref<HTMLElement>()
const titleId = generateId()
const descriptionId = generateId()

const overlayClasses = computed(() => [
  'fixed',
  'inset-0',
  'z-50',
  'flex',
  'items-center',
  'justify-center',
  'bg-black',
  'bg-opacity-50',
  'backdrop-blur-sm'
])

const modalClasses = computed(() => {
  const baseClasses = [
    'modal-box',
    'bg-white',
    'rounded-lg',
    'shadow-xl',
    'max-h-[90vh]',
    'overflow-hidden',
    'flex',
    'flex-col'
  ]
  
  // Size
  switch (props.size) {
    case 'sm':
      baseClasses.push('max-w-sm')
      break
    case 'md':
      baseClasses.push('max-w-md')
      break
    case 'lg':
      baseClasses.push('max-w-lg')
      break
    case 'xl':
      baseClasses.push('max-w-xl')
      break
    case 'full':
      baseClasses.push('max-w-full', 'w-full', 'h-full', 'm-4')
      break
  }
  
  return baseClasses.join(' ')
})

const headerClasses = computed(() => [
  'flex',
  'items-center',
  'justify-between',
  'p-6',
  'border-b',
  'border-gray-200'
])

const titleClasses = computed(() => [
  'text-lg',
  'font-semibold',
  'text-gray-900'
])

const closeButtonClasses = computed(() => [
  'p-1',
  'text-gray-400',
  'hover:text-gray-600',
  'transition-colors',
  'duration-200'
])

const bodyClasses = computed(() => [
  'flex-1',
  'p-6',
  'overflow-y-auto'
])

const footerClasses = computed(() => [
  'flex',
  'items-center',
  'justify-end',
  'gap-3',
  'p-6',
  'border-t',
  'border-gray-200'
])

const close = () => {
  if (!props.persistent) {
    emit('update:modelValue', false)
    emit('close')
  }
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}

const handleEscape = () => {
  if (props.closeOnEsc) {
    emit('escape')
    close()
  }
}

const onEnter = () => {
  document.body.style.overflow = 'hidden'
}

const onAfterEnter = () => {
  nextTick(() => {
    modalRef.value?.focus()
  })
  emit('open')
}

const onLeave = () => {
  document.body.style.overflow = ''
}

const onAfterLeave = () => {
  // Clean up
}

// Focus management
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      modalRef.value?.focus()
    })
  }
})
</script>

<style scoped>
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-box {
  animation: modal-appear 0.3s ease-out;
  transform-origin: center;
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-leave-active .modal-box {
  animation: modal-disappear 0.3s ease-in;
}

@keyframes modal-disappear {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
}
</style>