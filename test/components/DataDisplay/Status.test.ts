import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Status from '../../../src/components/DataDisplay/Status.vue';

describe('Status', () => {
  it('renders with default props', () => {
    const wrapper = mount(Status);

    expect(wrapper.classes()).toContain('status');
    expect(wrapper.classes()).toContain('status-neutral');
    expect(wrapper.attributes('aria-label')).toBe('status');
  });

  it('renders with custom variant', () => {
    const wrapper = mount(Status, {
      props: {
        variant: 'success',
      },
    });

    expect(wrapper.classes()).toContain('status-success');
  });

  it('renders with custom aria-label', () => {
    const wrapper = mount(Status, {
      props: {
        ariaLabel: 'custom-label',
      },
    });

    expect(wrapper.attributes('aria-label')).toBe('custom-label');
  });

  it('renders with all variants', () => {
    const variants = ['primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error'];
    
    variants.forEach(variant => {
      const wrapper = mount(Status, {
        props: { variant },
      });
      
      expect(wrapper.classes()).toContain(`status-${variant}`);
    });
  });

  it('renders as empty div', () => {
    const wrapper = mount(Status);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.text()).toBe('');
  });
});
