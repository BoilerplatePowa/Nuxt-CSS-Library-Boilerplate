import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Hero from '../../../src/components/Layout/Hero.vue';

describe('Hero', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Hero, {
      slots: {
        default: 'Hero content',
      },
    });

    expect(wrapper.classes()).toContain('hero');
    expect(wrapper.text()).toBe('Hero content');
  });

  it('renders title when provided', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Hero Title',
      },
    });

    expect(wrapper.text()).toContain('Hero Title');
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('renders subtitle when provided', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Hero Title',
        subtitle: 'Hero subtitle description',
      },
    });

    expect(wrapper.text()).toContain('Hero subtitle description');
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('applies min-height classes correctly', () => {
    const heights = ['sm', 'md', 'lg', 'xl', 'screen'] as const;

    heights.forEach(minHeight => {
      const wrapper = mount(Hero, {
        props: { minHeight },
        slots: { default: 'Content' },
      });

      if (minHeight === 'screen') {
        expect(wrapper.classes()).toContain('min-h-screen');
      } else {
        expect(wrapper.classes()).toContain(`min-h-${minHeight}`);
      }
    });
  });

  it('renders background image when provided', () => {
    const wrapper = mount(Hero, {
      props: {
        backgroundImage: 'https://example.com/image.jpg',
      },
      slots: {
        default: 'Content',
      },
    });

    const heroElement = wrapper.find('.hero');
    expect(heroElement.attributes('style')).toContain('https://example.com/image.jpg');
  });

  it('applies overlay when overlay prop is true', () => {
    const wrapper = mount(Hero, {
      props: {
        backgroundImage: 'https://example.com/image.jpg',
        overlay: true,
      },
      slots: {
        default: 'Content',
      },
    });

    expect(wrapper.find('.hero-overlay').exists()).toBe(true);
  });

  it('applies overlay opacity classes correctly', () => {
    const opacities = ['light', 'medium', 'dark'] as const;

    opacities.forEach(overlayOpacity => {
      const wrapper = mount(Hero, {
        props: {
          backgroundImage: 'https://example.com/image.jpg',
          overlay: true,
          overlayOpacity,
        },
        slots: { default: 'Content' },
      });

      const overlay = wrapper.find('.hero-overlay');
      if (overlayOpacity === 'light') {
        expect(overlay.classes()).toContain('bg-opacity-30');
      } else if (overlayOpacity === 'medium') {
        expect(overlay.classes()).toContain('bg-opacity-50');
      } else if (overlayOpacity === 'dark') {
        expect(overlay.classes()).toContain('bg-opacity-70');
      }
    });
  });

  it('applies text color classes correctly', () => {
    const textColors = ['default', 'neutral', 'primary', 'white'] as const;

    textColors.forEach(textColor => {
      const wrapper = mount(Hero, {
        props: { textColor },
        slots: { default: 'Content' },
      });

      const content = wrapper.find('.hero-content');
      if (textColor === 'neutral') {
        expect(content.classes()).toContain('text-neutral-content');
      } else if (textColor === 'primary') {
        expect(content.classes()).toContain('text-primary-content');
      } else if (textColor === 'white') {
        expect(content.classes()).toContain('text-white');
      }
    });
  });

  it('renders content slot when provided', () => {
    const wrapper = mount(Hero, {
      slots: {
        content: '<div class="custom-content">Custom hero content</div>',
      },
    });

    expect(wrapper.find('.custom-content').exists()).toBe(true);
    expect(wrapper.text()).toContain('Custom hero content');
  });

  it('renders actions slot when provided', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Hero Title',
      },
      slots: {
        actions: '<button class="custom-action">Get Started</button>',
      },
    });

    expect(wrapper.find('.custom-action').exists()).toBe(true);
    expect(wrapper.text()).toContain('Get Started');
  });

  it('combines title, subtitle and actions correctly', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Welcome',
        subtitle: 'Get started today',
      },
      slots: {
        actions: '<button>Action Button</button>',
      },
    });

    expect(wrapper.text()).toContain('Welcome');
    expect(wrapper.text()).toContain('Get started today');
    expect(wrapper.text()).toContain('Action Button');
  });

  it('prefers content slot over individual props', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Props Title',
        subtitle: 'Props Subtitle',
      },
      slots: {
        content: '<div class="slot-content">Slot Content</div>',
      },
    });

    expect(wrapper.find('.slot-content').exists()).toBe(true);
    expect(wrapper.text()).toContain('Slot Content');
    expect(wrapper.text()).not.toContain('Props Title');
  });

  it('handles no content gracefully', () => {
    const wrapper = mount(Hero);

    expect(wrapper.classes()).toContain('hero');
    expect(wrapper.find('.hero-content').exists()).toBe(true);
  });

  it('applies all props together correctly', () => {
    const wrapper = mount(Hero, {
      props: {
        title: 'Full Hero',
        subtitle: 'Complete example',
        backgroundImage: 'https://example.com/bg.jpg',
        overlay: true,
        overlayOpacity: 'medium',
        minHeight: 'lg',
        textColor: 'white',
      },
      slots: {
        actions: '<button>Call to Action</button>',
      },
    });

    expect(wrapper.classes()).toContain('hero');
    expect(wrapper.classes()).toContain('min-h-lg');
    expect(wrapper.find('.hero-overlay').exists()).toBe(true);
    expect(wrapper.find('.hero-overlay').classes()).toContain('bg-opacity-50');
    expect(wrapper.find('.hero-content').classes()).toContain('text-white');
    expect(wrapper.text()).toContain('Full Hero');
    expect(wrapper.text()).toContain('Complete example');
    expect(wrapper.text()).toContain('Call to Action');
  });
});
