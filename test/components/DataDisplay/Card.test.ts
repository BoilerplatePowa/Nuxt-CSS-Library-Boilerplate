import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '../../../src/components/DataDisplay/Card.vue';

describe('Card', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content',
      },
    });

    expect(wrapper.text()).toBe('Test Content');
    expect(wrapper.classes()).toContain('card');
  });

  it('renders title when provided', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: { default: 'Test Content' },
    });

    expect(wrapper.text()).toContain('Test Title');
    expect(wrapper.find('.card-title').text()).toBe('Test Title');
  });

  it('renders custom header slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>',
      },
    });

    expect(wrapper.find('.custom-header').exists()).toBe(true);
    expect(wrapper.find('.custom-header').text()).toBe('Custom Header');
  });

  it('renders footer slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content',
        footer: '<div class="custom-footer">Custom Footer</div>',
      },
    });

    expect(wrapper.find('.custom-footer').exists()).toBe(true);
    expect(wrapper.find('.custom-footer').text()).toBe('Custom Footer');
  });

  it('applies variant classes correctly', () => {
    const variants = ['normal', 'bordered', 'compact', 'side'] as const;

    variants.forEach(variant => {
      const wrapper = mount(Card, {
        props: { variant },
        slots: { default: 'Test' },
      });

      if (variant === 'bordered') {
        expect(wrapper.classes()).toContain('card-bordered');
      } else if (variant === 'compact') {
        expect(wrapper.classes()).toContain('card-compact');
      } else if (variant === 'side') {
        expect(wrapper.classes()).toContain('card-side');
      }
    });
  });

  it('applies shadow classes correctly', () => {
    const wrapper = mount(Card, {
      props: { shadow: true },
      slots: { default: 'Test' },
    });
    expect(wrapper.classes()).toContain('shadow-xl');

    const wrapperNoShadow = mount(Card, {
      props: { shadow: false },
      slots: { default: 'Test' },
    });
    expect(wrapperNoShadow.classes()).not.toContain('shadow-xl');
  });

  it('applies glass effect correctly', () => {
    const wrapper = mount(Card, {
      props: { glass: true },
      slots: { default: 'Test' },
    });
    expect(wrapper.classes()).toContain('glass');

    const wrapperNoGlass = mount(Card, {
      props: { glass: false },
      slots: { default: 'Test' },
    });
    expect(wrapperNoGlass.classes()).not.toContain('glass');
  });

  it('does not render header when no title or header slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Test Content' },
    });

    expect(wrapper.find('.card-header').exists()).toBe(false);
  });

  it('does not render footer when no footer slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Test Content' },
    });

    expect(wrapper.find('.card-actions').exists()).toBe(false);
  });

  it('renders both title and custom header slot', () => {
    const wrapper = mount(Card, {
      props: { title: 'Default Title' },
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>',
      },
    });

    // Custom header should override default title
    expect(wrapper.find('.custom-header').exists()).toBe(true);
    expect(wrapper.find('.card-title').exists()).toBe(false);
  });

  it('has correct structure with all sections', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>',
        footer: '<div class="custom-footer">Custom Footer</div>',
      },
    });

    expect(wrapper.find('.card-header').exists()).toBe(true);
    expect(wrapper.find('.card-body').exists()).toBe(true);
    expect(wrapper.find('.card-actions').exists()).toBe(true);
  });
});
