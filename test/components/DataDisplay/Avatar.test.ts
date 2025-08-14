import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from '../../../src/components/DataDisplay/Avatar.vue';

describe('Avatar', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Avatar);

    expect(wrapper.classes()).toContain('avatar');
    expect(wrapper.find('.avatar-placeholder').exists()).toBe(true);
  });

  it('renders image when src is provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'https://example.com/avatar.jpg',
        alt: 'User Avatar',
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
    expect(img.attributes('alt')).toBe('User Avatar');
  });

  it('renders placeholder with initials when provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        initials: 'JD',
      },
    });

    expect(wrapper.find('.avatar-placeholder').text()).toBe('JD');
  });

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach(size => {
      const wrapper = mount(Avatar, {
        props: { size },
      });

      if (size !== 'md') {
        expect(wrapper.find('.avatar-size').classes()).toContain(`w-${size === 'xs' ? '6' : size === 'sm' ? '8' : size === 'lg' ? '12' : '16'}`);
      }
    });
  });

  it('applies shape classes correctly', () => {
    const wrapper = mount(Avatar, {
      props: {
        shape: 'square',
      },
    });

    expect(wrapper.find('.avatar-size').classes()).toContain('rounded');

    const circleWrapper = mount(Avatar, {
      props: {
        shape: 'circle',
      },
    });

    expect(circleWrapper.find('.avatar-size').classes()).toContain('rounded-full');
  });

  it('shows online presence indicator', () => {
    const wrapper = mount(Avatar, {
      props: {
        presence: 'online',
      },
    });

    expect(wrapper.classes()).toContain('online');
  });

  it('shows offline presence indicator', () => {
    const wrapper = mount(Avatar, {
      props: {
        presence: 'offline',
      },
    });

    expect(wrapper.classes()).toContain('offline');
  });

  it('renders with ring when ring prop is true', () => {
    const wrapper = mount(Avatar, {
      props: {
        ring: true,
      },
    });

    expect(wrapper.find('.avatar-size').classes()).toContain('ring');
  });

  it('applies ring color when specified', () => {
    const wrapper = mount(Avatar, {
      props: {
        ring: true,
        ringColor: 'primary',
      },
    });

    expect(wrapper.find('.avatar-size').classes()).toContain('ring-primary');
  });

  it('falls back to placeholder when image fails to load', async () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'invalid-url.jpg',
        initials: 'FB',
      },
    });

    const img = wrapper.find('img');
    await img.trigger('error');

    expect(wrapper.find('.avatar-placeholder').exists()).toBe(true);
    expect(wrapper.find('.avatar-placeholder').text()).toBe('FB');
  });

  it('renders slot content when provided', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: '<span class="custom-content">👤</span>',
      },
    });

    expect(wrapper.find('.custom-content').exists()).toBe(true);
    expect(wrapper.find('.custom-content').text()).toBe('👤');
  });
});
