import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../../../src/components/Actions/Button.vue';

describe('Button', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test Button',
      },
    });

    expect(wrapper.text()).toBe('Test Button');
    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes()).toContain('btn-primary');
  });

  it('applies variant classes correctly', () => {
    const variants = ['primary', 'secondary', 'accent', 'neutral', 'ghost', 'outline', 'link', 'info', 'success', 'warning', 'error'] as const;

    variants.forEach(variant => {
      const wrapper = mount(Button, {
        props: { variant },
        slots: { default: 'Test' },
      });

      expect(wrapper.classes()).toContain(`btn-${variant}`);
    });
  });

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Test' },
      });

      if (size !== 'md') {
        expect(wrapper.classes()).toContain(`btn-${size}`);
      }
    });
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Test' },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('applies loading state correctly', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Test' },
    });

    expect(wrapper.find('.loading').exists()).toBe(true);
    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
  });

  it('applies full width correctly', () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true },
      slots: { default: 'Test' },
    });

    expect(wrapper.classes()).toContain('btn-block');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Test' },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Test' },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('does not emit click event when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Test' },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('renders icon slots correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
        'icon-left': '<span class="icon-left">←</span>',
        'icon-right': '<span class="icon-right">→</span>',
      },
    });

    expect(wrapper.find('.icon-left').exists()).toBe(true);
    expect(wrapper.find('.icon-right').exists()).toBe(true);
    expect(wrapper.text()).toContain('Test');
  });

  it('applies shape classes correctly', () => {
    const circleWrapper = mount(Button, {
      props: { circle: true },
      slots: { default: 'Test' },
    });
    expect(circleWrapper.classes()).toContain('btn-circle');

    const squareWrapper = mount(Button, {
      props: { square: true },
      slots: { default: 'Test' },
    });
    expect(squareWrapper.classes()).toContain('btn-square');
  });

  it('applies style modifiers correctly', () => {
    const glassWrapper = mount(Button, {
      props: { glass: true },
      slots: { default: 'Test' },
    });
    expect(glassWrapper.classes()).toContain('glass');

    const noAnimationWrapper = mount(Button, {
      props: { noAnimation: true },
      slots: { default: 'Test' },
    });
    expect(noAnimationWrapper.classes()).toContain('no-animation');
  });

  it('sets correct button type', () => {
    const types = ['button', 'submit', 'reset'] as const;

    types.forEach(type => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: 'Test' },
      });

      expect(wrapper.attributes('type')).toBe(type);
    });
  });
});
