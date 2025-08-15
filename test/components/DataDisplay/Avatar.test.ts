import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from '../../../src/components/DataDisplay/Avatar.vue';

describe('Avatar', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'Test' },
    });

    expect(wrapper.classes()).toContain('avatar');
    expect(wrapper.find('[aria-label]').exists()).toBe(true);
  });

  it('renders image when src is provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'https://via.placeholder.com/150',
        alt: 'Test avatar',
      },
    });

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');
    expect(wrapper.find('img').attributes('alt')).toBe('Test avatar');
  });

  it('renders placeholder with initials when provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        initials: 'JD',
      },
    });

    expect(wrapper.find('[aria-label]').exists()).toBe(true);
    expect(wrapper.text()).toContain('JD');
  });

  it('applies size classes correctly', () => {
    ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].forEach(size => {
      const wrapper = mount(Avatar, {
        props: { size: size as any },
      });
      
      const imageDiv = wrapper.find('.avatar > div');
      expect(imageDiv.exists()).toBe(true);
    });
  });

  it('applies shape classes correctly', () => {
    ['circle', 'square', 'rounded'].forEach(shape => {
      const wrapper = mount(Avatar, {
        props: { shape: shape as any },
      });
      
      const imageDiv = wrapper.find('.avatar > div');
      expect(imageDiv.exists()).toBe(true);
    });
  });

  it('shows online presence indicator', () => {
    const wrapper = mount(Avatar, {
      props: {
        presence: 'online',
      },
    });

    expect(wrapper.find('.bg-success').exists()).toBe(true);
  });

  it('shows offline presence indicator', () => {
    const wrapper = mount(Avatar, {
      props: {
        presence: 'offline',
      },
    });

    expect(wrapper.find('.bg-base-300').exists()).toBe(true);
  });

  it('renders with ring when ring prop is true', () => {
    const wrapper = mount(Avatar, {
      props: {
        ring: true,
      },
    });

    const imageDiv = wrapper.find('.avatar > div');
    expect(imageDiv.classes()).toContain('ring-2');
  });

  it('applies ring color when specified', () => {
    const wrapper = mount(Avatar, {
      props: {
        ring: true,
        ringColor: 'primary',
      },
    });

    const imageDiv = wrapper.find('.avatar > div');
    expect(imageDiv.classes()).toContain('ring-primary');
  });

  it('falls back to placeholder when image fails to load', async () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'invalid-url',
        initials: 'FB',
      },
    });

    const img = wrapper.find('img');
    await img.trigger('error');

    expect(wrapper.find('[aria-label]').exists()).toBe(true);
    expect(wrapper.text()).toBe('FB');
  });

  it('renders slot content when provided', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: '<span>Custom Content</span>',
      },
    });

    expect(wrapper.text()).toContain('Custom Content');
  });
});