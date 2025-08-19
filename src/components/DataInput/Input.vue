<template>
  <div :class="wrapperClasses">
    <!-- Label -->
    <label v-if="label" :for="inputId" class="label">
      <span class="label-text">{{ label }}</span>
      <span v-if="required" class="label-text-alt text-error">*</span>
    </label>

    <!-- Input wrapper with icon support -->
    <div class="relative">
      <!-- Left icon -->
      <div v-if="leftIcon" class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <Icon 
          :name="leftIcon" 
          :size="iconSize" 
          class="opacity-50"
          :aria-hidden="true"
        />
      </div>

      <!-- VeeValidate Field component -->
      <Field
        :name="name"
        :value="modelValue"
        v-slot="{ field, errorMessage, meta }"
      >
        <div>
          <input
            :id="inputId"
            v-bind="field"
            :type="type"
            :class="inputClasses"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :maxlength="maxlength"
            :aria-describedby="ariaDescribedby"
            :aria-invalid="meta.touched && !meta.valid"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
          />

          <!-- Right icon -->
          <div v-if="rightIcon" class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Icon 
              :name="rightIcon" 
              :size="iconSize" 
              class="opacity-50"
              :aria-hidden="true"
            />
          </div>

          <!-- Character count -->
          <div v-if="showCharCount && maxlength" class="absolute bottom-2 right-2 text-xs opacity-60">
            {{ characterCount }}/{{ maxlength }}
          </div>

          <!-- Help text -->
          <p v-if="helpText" :id="`${inputId}-help`" class="text-xs text-base-content/70 mt-1">
            {{ helpText }}
          </p>

          <!-- Error message from VeeValidate -->
          <p v-if="errorMessage" :id="`${inputId}-error`" class="text-xs text-error mt-1" role="alert">
            {{ errorMessage }}
          </p>
        </div>
      </Field>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Field } from 'vee-validate';
import Icon from '../Icons/Icon.vue';

// Simple ID generator
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

// Icon name type from Icon component
type IconName = 'search' | 'info' | 'link' | 'map' | 'filter' | 'heart' | 'star' | 'settings' | 'user' | 'home' | 'mail' | 'phone' | 'calendar' | 'clock' | 'map-pin' | 'download' | 'upload' | 'edit' | 'delete' | 'plus' | 'minus' | 'check' | 'x' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-down' | 'menu' | 'close' | 'alert-circle' | 'check-circle' | 'x-circle' | 'help-circle' | 'eye' | 'eye-off' | 'lock' | 'unlock' | 'zap' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right' | 'sort-asc' | 'sort-desc' | 'refresh-cw' | 'rotate-ccw' | 'rotate-cw' | 'zoom-in' | 'zoom-out' | 'maximize' | 'minimize' | 'external-link' | 'copy' | 'share' | 'bookmark' | 'flag' | 'thumbs-up' | 'thumbs-down' | 'message-circle' | 'message-square' | 'bell' | 'shield' | 'award' | 'gift' | 'shopping-cart' | 'credit-card' | 'dollar-sign' | 'percent' | 'trending-up' | 'trending-down' | 'activity' | 'bar-chart' | 'pie-chart' | 'line-chart' | 'database' | 'server' | 'monitor' | 'smartphone' | 'tablet' | 'laptop' | 'printer' | 'camera' | 'video' | 'music' | 'file' | 'folder' | 'archive' | 'trash-2' | 'save' | 'download-cloud' | 'upload-cloud' | 'cloud' | 'wifi' | 'bluetooth' | 'battery' | 'power' | 'volume' | 'volume1' | 'volume2' | 'volume-x' | 'mic' | 'mic-off' | 'headphones' | 'speaker' | 'radio' | 'tv' | 'gamepad-2' | 'mouse' | 'keyboard' | 'hard-drive' | 'cpu' | 'thermometer' | 'droplets' | 'sun' | 'moon' | 'cloud-rain' | 'cloud-snow' | 'wind' | 'umbrella' | 'snowflake' | 'flame' | 'sparkles' | 'ice-cream' | 'heart-off' | 'star-off' | 'settings-2' | 'users' | 'building' | 'navigation' | 'globe' | 'mail-open' | 'phone-call' | 'phone-incoming' | 'phone-outgoing' | 'calendar-days' | 'calendar-range' | 'clock-1' | 'clock-2' | 'clock-3' | 'clock-4' | 'clock-5' | 'clock-6' | 'clock-7' | 'clock-8' | 'clock-9' | 'clock-10' | 'clock-11' | 'clock-12' | 'map-pin-off' | 'navigation-2' | 'navigation-off' | 'edit-2' | 'edit-3' | 'trash' | 'plus-circle' | 'minus-circle' | 'x-square' | 'alert-triangle' | 'alert-octagon';

interface Props {
  modelValue?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  helpText?: string;
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  maxlength?: number;
  showCharCount?: boolean;
  ariaDescribedby?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  name: '',
  disabled: false,
  readonly: false,
  required: false,
  type: 'text',
  size: 'md',
  variant: 'bordered',
  showCharCount: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const inputId = generateId();

const wrapperClasses = computed(() => ['form-control', 'w-full']);

const inputClasses = computed(() => {
  const baseClasses = ['input', 'w-full'];

  // Size classes
  if (props.size === 'xs') {
    baseClasses.push('input-xs');
  } else if (props.size === 'sm') {
    baseClasses.push('input-sm');
  } else if (props.size === 'lg') {
    baseClasses.push('input-lg');
  } else if (props.size === 'xl') {
    baseClasses.push('input-xl');
  }
  // 'md' is default, no class needed

  // Variant classes
  if (props.variant === 'bordered') {
    baseClasses.push('input-bordered');
  } else if (props.variant === 'ghost') {
    baseClasses.push('input-ghost');
  } else if (props.variant === 'primary') {
    baseClasses.push('input-primary');
  } else if (props.variant === 'secondary') {
    baseClasses.push('input-secondary');
  } else if (props.variant === 'accent') {
    baseClasses.push('input-accent');
  } else if (props.variant === 'info') {
    baseClasses.push('input-info');
  } else if (props.variant === 'success') {
    baseClasses.push('input-success');
  } else if (props.variant === 'warning') {
    baseClasses.push('input-warning');
  } else if (props.variant === 'error') {
    baseClasses.push('input-error');
  } else if (props.variant === 'neutral') {
    baseClasses.push('input-neutral');
  }

  // Icon padding
  if (props.leftIcon) {
    baseClasses.push('pl-10');
  }
  if (props.rightIcon) {
    baseClasses.push('pr-10');
  }

  return baseClasses.join(' ');
});

const iconSize = computed(() => {
  const sizeMap: Record<string, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> = {
    xs: 'sm',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'lg',
  };
  return sizeMap[props.size] || 'md';
});

const characterCount = computed(() => {
  return props.modelValue?.length || 0;
});

const ariaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${inputId}-help`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};

const handleChange = (event: Event) => {
  emit('change', event);
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};
</script>

<style scoped lang="postcss">
/* DaisyUI handles most input styling */
</style>
