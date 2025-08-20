<template>
  <div :class="wrapperClasses">
    <!-- Label -->
    <label v-if="label" :for="inputId" class="label">
      <span :class="`label-text text-${size}`">{{ label }}</span>
      <span v-if="required" :class="`label-text-alt text-error text-${size}`">*</span>
    </label>
    
    <!-- VeeValidate Field component -->
    <Field
        :name="name"
        :value="model"
        :rules="rules"
        v-slot="{ field, errorMessage, meta }"
    >
        <div>
            <label :class="[inputClasses, errorMessage ? 'input-error' : undefined]">
                <!-- Left icon -->
                <Icon 
                    v-if="leftIcon"
                    :name="leftIcon" 
                    :size="size" 
                    class="opacity-50"
                    :aria-hidden="true"
                />

                <input
                    :id="inputId"
                    v-bind="field"
                    :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
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

                <!-- Password toggle swap button -->
                <Swap
                    v-if="type === 'password'"
                    v-model="showPassword"
                    variant="rotate"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                >
                    <template #on>
                        <Icon name="eye" :size="size" class="text-base-content/50" />
                    </template>
                    <template #off>
                        <Icon name="eye-off" :size="size" class="text-base-content/50" />
                    </template>
                </Swap>

                <!-- Right icon (only show if not password type or if no swap button) -->
                <Icon 
                    v-if="rightIcon && type !== 'password'"
                    :name="rightIcon" 
                    :size="size" 
                    class="opacity-50"
                    :aria-hidden="true"
                />
            </label>

            <div class="flex">
                <div>
                    <!-- Error message from VeeValidate -->
                    <p v-if="errorMessage" :id="`${inputId}-error`" class="text-xs text-error mt-1" role="alert">
                        {{ errorMessage }}
                    </p>

                    <!-- Help text -->
                    <p v-if="helpText" :id="`${inputId}-help`" class="text-xs text-base-content/70 mt-1">
                        {{ helpText }}
                    </p>
                </div>

                <div  class="flex-1"/>

                <!-- Character count -->
                <div v-if="showCharCount && maxlength" class="text-xs text-base-content/60">
                    {{ characterCount }}/{{ maxlength }}
                </div>
            </div>
        </div>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Field } from 'vee-validate';
import Icon from '../Icons/Icon.vue';
import Swap from '../Actions/Swap.vue';
import type { InputType, Size, Variant, IconName } from '@/shared/types.d';

// Simple ID generator
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

const model = defineModel<string>('', { default: '' });

// Password visibility state
const showPassword = ref(false);

// Map Input size to Swap size
const getSwapSize = (inputSize: Size): 'xs' | 'sm' | 'md' | 'lg' => {
  switch (inputSize) {
    case 'xs':
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
    case 'xl':
    case '2xl':
      return 'lg';
    default:
      return 'md';
  }
};

// Map Input size to Icon size
const getIconSize = (inputSize: Size): Size => {
  switch (inputSize) {
    case 'xs':
      return 'sm';
    case 'sm':
    case 'md':
      return 'md';
    case 'lg':
    case 'xl':
    case '2xl':
      return 'lg';
    default:
      return 'md';
  }
};

interface InputProps {
  // Field name for VeeValidate
  name?: string;
  // Input label
  label?: string;
  // Input placeholder
  placeholder?: string;
  // Help text displayed below input
  helpText?: string;
  // Input type
  type?: InputType;
  // Input size
  size?: Size;
  // Input variant/style
  variant?: Variant;
  // Left icon name
  leftIcon?: IconName | undefined;
  // Right icon name
  rightIcon?: IconName | undefined;
  // Whether input is disabled
  disabled?: boolean;
  // Whether input is readonly
  readonly?: boolean;
  // Whether input is required
  required?: boolean;
  // Maximum character length
  maxlength?: number;
  // Show character count
  showCharCount?: boolean;
  // Additional aria-describedby IDs
  ariaDescribedby?: string;
  // Yup validation rules
  rules?: any;
}

const props = withDefaults(defineProps<InputProps>(), {
  name: '',
  label: '',
  placeholder: '',
  helpText: '',
  type: 'text',
  size: 'md',
  variant: 'bordered',
  leftIcon: undefined,
  rightIcon: undefined,
  disabled: false,
  readonly: false,
  required: false,
  maxlength: undefined,
  showCharCount: false,
  ariaDescribedby: '',
  rules: undefined
});

const emit = defineEmits<{
  input: [event: Event];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const inputId = generateId();

const wrapperClasses = computed(() => ['form-control', 'w-full']);

const inputClasses = computed(() => {
  const baseClasses = ['input', 'w-full'];

  if (props.size) {
    baseClasses.push(`input-${props.size}`);
  }

  if (props.variant) {
    baseClasses.push(`input-${props.variant}`);
  }

  return baseClasses.join(' ');
});

const characterCount = computed(() => {
  return model.value?.length || 0;
});

const ariaDescribedby = computed(() => {
  const ids = [];
  if (props.helpText) ids.push(`${inputId}-help`);
  if (props.ariaDescribedby) ids.push(props.ariaDescribedby);
  return ids.length > 0 ? ids.join(' ') : undefined;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
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
