import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '../../../src/components/DataInput/Input.vue';

describe('Input', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test value',
      },
    });

    expect(wrapper.find('input').element.value).toBe('test value');
    expect(wrapper.classes()).toContain('form-control');
  });

  it('renders label when provided', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email Address',
      },
    });

    expect(wrapper.find('label').text()).toBe('Email Address');
  });

  it('shows required asterisk when required', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Email',
        required: true,
      },
    });

    expect(wrapper.find('label').text()).toContain('*');
  });

  it('applies size classes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      const wrapper = mount(Input, {
        props: { size },
      });

      if (size !== 'md') {
        expect(wrapper.find('input').classes()).toContain(`input-${size}`);
      }
    });
  });

  it('applies variant classes correctly', () => {
    const variants = ['bordered', 'ghost', 'primary'] as const;

    variants.forEach(variant => {
      const wrapper = mount(Input, {
        props: { variant },
      });

      const input = wrapper.find('input');
      expect(input.classes()).toContain(`input-${variant}`);
    });
  });

  it('shows help text when provided', () => {
    const wrapper = mount(Input, {
      props: {
        helpText: 'This is help text',
      },
    });

    expect(wrapper.text()).toContain('This is help text');
    expect(wrapper.find('p').classes()).toContain('text-gray-600');
  });

  it('shows error message when provided', () => {
    const wrapper = mount(Input, {
      props: {
        errorMessage: 'This field is required',
      },
    });

    expect(wrapper.text()).toContain('This field is required');
    expect(wrapper.find('p').classes()).toContain('text-red-600');
  });

  it('applies error state classes', () => {
    const wrapper = mount(Input, {
      props: {
        errorMessage: 'Error',
      },
    });

    expect(wrapper.find('input').classes()).toContain('input-error');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    expect(wrapper.find('input').classes()).toContain('input-disabled');
  });

  it('applies readonly state correctly', () => {
    const wrapper = mount(Input, {
      props: {
        readonly: true,
      },
    });

    expect(wrapper.find('input').attributes('readonly')).toBeDefined();
  });

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');

    await input.setValue('new value');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value']);
  });

  it('emits input event', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');

    await input.trigger('input');

    expect(wrapper.emitted('input')).toBeTruthy();
  });

  it('emits change event', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');

    await input.trigger('change');

    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('emits focus and blur events', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');

    await input.trigger('focus');
    expect(wrapper.emitted('focus')).toBeTruthy();

    await input.trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
  });

  it('sets correct aria attributes', () => {
    const wrapper = mount(Input, {
      props: {
        helpText: 'Help text',
        errorMessage: 'Error message',
        invalid: true,
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('aria-invalid')).toBe('true');
    expect(input.attributes('aria-describedby')).toBeTruthy();
  });

  it('sets correct input type', () => {
    const types = ['text', 'email', 'password', 'number'] as const;

    types.forEach(type => {
      const wrapper = mount(Input, {
        props: { type },
      });

      expect(wrapper.find('input').attributes('type')).toBe(type);
    });
  });
});
