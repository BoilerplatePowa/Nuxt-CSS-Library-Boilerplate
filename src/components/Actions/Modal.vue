<template>
  <Teleport to="body" :disabled="!canTeleport">
    <Transition
      name="modal"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-if="modelValue"
        ref="overlayRef"
        :class="overlayClasses"
        role="dialog"
        :aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        :aria-hidden="!modelValue"
        @click="handleOverlayClick"
        @keydown="handleKeyDown"
      >
        <div 
          ref="modalRef" 
          :class="modalClasses" 
          tabindex="-1"
          @click.stop
        >
          <!-- Focus trap elements -->
          <div 
            ref="firstFocusableElement" 
            tabindex="0" 
            @focus="focusLastElement"
            class="sr-only"
          >
            Start of modal
          </div>

          <!-- Close button - positioned absolutely in top right corner -->
          <button
            v-if="closable"
            ref="closeButtonRef"
            type="button"
            :class="closeButtonClasses"
            aria-label="Close modal"
            @click="close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Header -->
          <header v-if="$slots.header || title" :class="headerClasses">
            <slot name="header">
              <h2 :id="titleId" :class="titleClasses">
                {{ title }}
              </h2>
            </slot>
          </header>

          <!-- Body -->
          <div :id="descriptionId" :class="bodyClasses">
            <slot />
          </div>

          <!-- Footer -->
          <footer v-if="$slots.footer" :class="footerClasses">
            <slot name="footer" />
          </footer>

          <!-- Focus trap elements -->
          <div 
            ref="lastFocusableElement" 
            tabindex="0" 
            @focus="focusFirstElement"
            class="sr-only"
          >
            End of modal
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch, onUnmounted } from 'vue';

// Simple ID generator for compatibility
let idCounter = 0;
const generateId = () => `modal-${++idCounter}`;

interface Props {
  modelValue: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
  persistent?: boolean;
  trapFocus?: boolean;
  returnFocus?: boolean;
  autoFocus?: boolean;
  zIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  closable: true,
  closeOnOverlay: true,
  closeOnEsc: true,
  persistent: false,
  trapFocus: true,
  returnFocus: true,
  autoFocus: true,
  zIndex: 50,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  close: [];
  open: [];
  escape: [];
  'before-open': [];
  'after-open': [];
  'before-close': [];
  'after-close': [];
}>();

const modalRef = ref<HTMLElement>();
const overlayRef = ref<HTMLElement>();
const closeButtonRef = ref<HTMLElement>();
const firstFocusableElement = ref<HTMLElement>();
const lastFocusableElement = ref<HTMLElement>();

const titleId = generateId();
const descriptionId = generateId();
let previousActiveElement: Element | null = null;

// Check if we can safely use Teleport (for Storybook compatibility)
const canTeleport = computed(() => {
  if (typeof window === 'undefined') return false;
  return document.body !== null;
});


const overlayClasses = computed(() => {
  const classes = [
    'fixed',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'bg-black/50',
    'backdrop-blur-sm',
    'overscroll-contain',
  ];

  // Handle z-index properly with Tailwind classes
  if (props.zIndex >= 50) {
    classes.push('z-50');
  } else if (props.zIndex >= 40) {
    classes.push('z-40');
  } else if (props.zIndex >= 30) {
    classes.push('z-30');
  } else if (props.zIndex >= 20) {
    classes.push('z-20');
  } else {
    classes.push('z-10');
  }

  return classes;
});

const modalClasses = computed(() => {
  const baseClasses = [
    'modal-box',
    'bg-base-100',
    'text-base-content',
    'rounded-lg',
    'shadow-xl',
    'max-h-[90vh]',
    'overflow-hidden',
    'flex',
    'flex-col',
    'relative',
  ];

  // Size
  switch (props.size) {
    case 'sm':
      baseClasses.push('max-w-sm');
      break;
    case 'md':
      baseClasses.push('max-w-md');
      break;
    case 'lg':
      baseClasses.push('max-w-lg');
      break;
    case 'xl':
      baseClasses.push('max-w-xl');
      break;
    case 'full':
      baseClasses.push('max-w-full', 'w-full', 'h-full', 'm-4');
      break;
  }

  return baseClasses.join(' ');
});

const headerClasses = computed(() => [
  'flex',
  'items-center',
  'justify-between',
  'p-6',
  'border-b',
  'border-base-200',
]);

const titleClasses = computed(() => ['text-lg', 'font-semibold', 'text-base-content']);

const closeButtonClasses = computed(() => [
  'absolute',
  'top-4',
  'right-4',
  'z-10',
  'btn',
  'btn-sm',
  'btn-ghost',
  'btn-circle',
  'text-base-content/70',
  'hover:text-base-content',
  'hover:bg-base-200',
  'transition-all',
  'duration-200',
]);

const bodyClasses = computed(() => ['flex-1', 'p-6', 'overflow-y-auto']);

const footerClasses = computed(() => [
  'flex',
  'items-center',
  'justify-end',
  'gap-3',
  'p-6',
  'border-t',
  'border-base-200',
]);

// Focus management functions
const getFocusableElements = (): HTMLElement[] => {
  if (!modalRef.value) return [];
  
  const selectors = [
    'button:not([disabled])',
    '[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];
  
  return Array.from(modalRef.value.querySelectorAll(selectors.join(', '))) as HTMLElement[];
};

const focusFirstElement = () => {
  if (!props.trapFocus) return;
  
  const elements = getFocusableElements();
  if (elements.length > 0) {
    elements[0].focus();
  } else if (closeButtonRef.value) {
    closeButtonRef.value.focus();
  } else if (modalRef.value) {
    modalRef.value.focus();
  }
};

const focusLastElement = () => {
  if (!props.trapFocus) return;
  
  const elements = getFocusableElements();
  if (elements.length > 0) {
    elements[elements.length - 1].focus();
  } else if (closeButtonRef.value) {
    closeButtonRef.value.focus();
  } else if (modalRef.value) {
    modalRef.value.focus();
  }
};

const open = () => {
  emit('before-open');
  previousActiveElement = document.activeElement;
  emit('update:modelValue', true);
  emit('open');
};

const close = () => {
  if (!props.persistent) {
    emit('before-close');
    emit('update:modelValue', false);
    emit('close');
  }
};

// Expose methods for external access
defineExpose({
  open,
  close,
  focus: focusFirstElement,
});

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close();
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEsc) {
    event.preventDefault();
    emit('escape');
    close();
    return;
  }

  if (event.key === 'Tab' && props.trapFocus) {
    const elements = getFocusableElements();
    if (elements.length === 0) return;

    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
};

const onEnter = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = getScrollbarWidth() + 'px';
};

const onAfterEnter = () => {
  nextTick(() => {
    if (props.autoFocus) {
      focusFirstElement();
    }
  });
  emit('after-open');
};

const onLeave = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

const onAfterLeave = () => {
  if (props.returnFocus && previousActiveElement instanceof HTMLElement) {
    previousActiveElement.focus();
  }
  emit('after-close');
};

// Utility function to prevent layout shift
const getScrollbarWidth = (): number => {
  if (typeof window === 'undefined') return 0;
  
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// Focus management
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      nextTick(() => {
        if (props.autoFocus) {
          focusFirstElement();
        }
      });
    }
  }
);

// Cleanup on component unmount
onUnmounted(() => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
});
</script>

<style scoped>
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Modal overlay transitions */
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-box {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-leave-active .modal-box {
  transition: all 0.25s ease-in;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .modal-box {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-box {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* Modal box default state */
.modal-box {
  transform-origin: center;
  transform: scale(1) translateY(0);
  opacity: 1;
  overscroll-behavior: contain;
}

/* Improved focus styles */
.modal-box:focus {
  outline: none;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .modal-box {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
}
</style>
