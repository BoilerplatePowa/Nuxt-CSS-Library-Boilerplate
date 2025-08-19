<template>
  <div :class="wrapperClasses" class="max-w-[200px]">
    <!-- Label -->
    <label v-if="label" :for="inputId" class="label">
      <span :class="`label-text text-${size}`">{{ label }}</span>
      <span v-if="required" :class="`label-text-alt text-error text-${size}`">*</span>
    </label>
    
    <!-- VeeValidate Field component -->
    <Field
        :name="name"
        :value="model"
        :rules="yup.string().required('Email is required')"
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
                    :type="type"
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
                <Icon 
                    v-if="rightIcon"
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
import { computed } from 'vue';
import { Field } from 'vee-validate';
import Icon from '../Icons/Icon.vue';
import type { IconName } from '../Icons/Icon.vue';
import * as yup from 'yup';

// Simple ID generator
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

interface Props {
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
  rules?: any; // Yup validation rules
}

const model = defineModel<string>('', { default: '' });

const props = withDefaults(defineProps<Props>(), {
  name: '',
  disabled: false,
  readonly: false,
  required: false,
  type: 'text',
  size: 'md',
  variant: 'bordered',
  showCharCount: false,
  rules: undefined,
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
