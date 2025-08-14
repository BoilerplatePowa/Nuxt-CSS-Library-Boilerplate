import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Swap from '../../../src/components/Actions/Swap.vue';

describe('Swap', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
      },
      slots: {
        on: '<div class="on-content">On</div>',
        off: '<div class="off-content">Off</div>',
      },
    });

    expect(wrapper.classes()).toContain('swap');
    expect(wrapper.find('.off-content').exists()).toBe(true);
  });

  it('shows correct content based on modelValue', async () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
      },
      slots: {
        on: '<div class="on-content">On State</div>',
        off: '<div class="off-content">Off State</div>',
      },
    });

    // Initially off
    expect(wrapper.find('.off-content').exists()).toBe(true);
    expect(wrapper.find('.on-content').exists()).toBe(true);

    // Change to on
    await wrapper.setProps({ modelValue: true });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });

  it('applies variant classes correctly', () => {
    const variants = ['rotate', 'flip', 'indeterminate'] as const;

    variants.forEach(variant => {
      const wrapper = mount(Swap, {
        props: {
          modelValue: false,
          variant,
        },
        slots: {
          on: 'On',
          off: 'Off',
        },
      });

      expect(wrapper.classes()).toContain(`swap-${variant}`);
    });
  });

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      const wrapper = mount(Swap, {
        props: {
          modelValue: false,
          size,
        },
        slots: {
          on: 'On',
          off: 'Off',
        },
      });

      if (size === 'xs') {
        expect(wrapper.classes()).toContain('text-xs');
      } else if (size === 'sm') {
        expect(wrapper.classes()).toContain('text-sm');
      } else if (size === 'lg') {
        expect(wrapper.classes()).toContain('text-lg');
      }
    });
  });

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
      },
      slots: {
        on: 'On',
        off: 'Off',
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setValue(true);

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
        disabled: true,
      },
      slots: {
        on: 'On',
        off: 'Off',
      },
    });

    expect(wrapper.classes()).toContain('swap-disabled');
  });

  it('renders on content in on slot', () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: true,
      },
      slots: {
        on: '<span class="on-text">Active State</span>',
        off: '<span class="off-text">Inactive State</span>',
      },
    });

    expect(wrapper.find('.on-text').exists()).toBe(true);
    expect(wrapper.find('.on-text').text()).toBe('Active State');
  });

  it('renders off content in off slot', () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
      },
      slots: {
        on: '<span class="on-text">Active State</span>',
        off: '<span class="off-text">Inactive State</span>',
      },
    });

    expect(wrapper.find('.off-text').exists()).toBe(true);
    expect(wrapper.find('.off-text').text()).toBe('Inactive State');
  });

  it('handles keyboard interaction', async () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: false,
      },
      slots: {
        on: 'On',
        off: 'Off',
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.trigger('change');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
