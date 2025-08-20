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
                    :name="leftIcon as any" 
                    :size="size as any" 
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
                    :name="rightIcon as any" 
                    :size="size as any" 
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
import * as yup from 'yup';
import type { InputType, Size, Variant, IconName } from '@/shared/types.d';
import { inputTypesMap, sizeMap, variantMap, iconMap } from '@/shared/map';

// Simple ID generator
let idCounter = 0;
const generateId = () => `input-${++idCounter}`;

const model = defineModel<string>('', { default: '' });

const props = defineProps({
  // Field name for VeeValidate
  name: {
    type: String,
    default: ''
  },
  // Input label
  label: {
    type: String,
    default: ''
  },
  // Input placeholder
  placeholder: {
    type: String,
    default: ''
  },
  // Help text displayed below input
  helpText: {
    type: String,
    default: ''
  },
  // Input type
  type: {
    type: String,
    default: 'text',
    validator(value: InputType) {
      return inputTypesMap.includes(value)
    }
  },
  // Input size
  size: {
    type: String,
    default: 'md',
    validator(value: Size) {
      return (Object.keys(sizeMap) as Size[]).includes(value)
    }
  },
  // Input variant/style
  variant: {
    type: String,
    default: 'bordered',
    validator(value: Variant) {
      return variantMap.includes(value)
    }
  },
  // Left icon name
  leftIcon: {
    type: String,
    default: '',
    validator(value: IconName | '') {
      // This would need to be updated with actual icon names from Icon component
      if (value === '') return true

      return (Object.keys(iconMap) as IconName[]).includes(value)
    }
  },
  // Right icon name
  rightIcon: {
    type: String,
    default: '',
    validator(value: IconName | '') {
      // This would need to be updated with actual icon names from Icon component
      if (value === '') return true
      
      return (Object.keys(iconMap) as IconName[]).includes(value)}
  },
  // Whether input is disabled
  disabled: {
    type: Boolean,
    default: false
  },
  // Whether input is readonly
  readonly: {
    type: Boolean,
    default: false
  },
  // Whether input is required
  required: {
    type: Boolean,
    default: false
  },
  // Maximum character length
  maxlength: {
    type: Number,
    default: undefined
  },
  // Show character count
  showCharCount: {
    type: Boolean,
    default: false
  },
  // Additional aria-describedby IDs
  ariaDescribedby: {
    type: String,
    default: ''
  },
  // Yup validation rules
  rules: {
    type: [Object, Function],
    default: undefined
  }
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
