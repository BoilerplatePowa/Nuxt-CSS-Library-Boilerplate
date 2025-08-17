import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Tabs from '../../../src/components/DataDisplay/Tabs.vue';

describe('Tabs', () => {
  const sampleTabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];

  it('renders correctly with default props', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
      },
    });

    expect(wrapper.find('.tabs').exists()).toBe(true);
    expect(wrapper.findAll('.tab')).toHaveLength(3);
    expect(wrapper.text()).toContain('Tab 1');
    expect(wrapper.text()).toContain('Tab 2');
    expect(wrapper.text()).toContain('Tab 3');
  });

  it('renders tab content correctly', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
        modelValue: 'Tab 1',
      },
    });

    expect(wrapper.text()).toContain('Content 1');
  });

  it('applies variant classes correctly', () => {
    const variants = ['default', 'bordered', 'lifted', 'boxed'] as const;

    variants.forEach(variant => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant,
        },
      });

      if (variant !== 'default') {
        expect(wrapper.find('.tabs').classes()).toContain(`tabs-${variant}`);
      }
    });
  });

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach(size => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          size,
        },
      });

      if (size !== 'md') {
        expect(wrapper.find('.tabs').classes()).toContain(`tabs-${size}`);
      }
    });
  });

  it('emits update:modelValue when tab is clicked', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
        modelValue: 'Tab 1',
      },
    });

    const secondTab = wrapper.findAll('.tab')[1];
    await secondTab.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Tab 2']);
  });

  it('emits tab-change event when tab is clicked', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
        modelValue: 'Tab 1',
      },
    });

    const secondTab = wrapper.findAll('.tab')[1];
    await secondTab.trigger('click');

    expect(wrapper.emitted('tab-change')).toBeTruthy();
    expect(wrapper.emitted('tab-change')?.[0]).toEqual(['Tab 2']);
  });

  it('shows active tab correctly', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
        modelValue: 'Tab 2',
      },
    });

    const tabs = wrapper.findAll('.tab');
    expect(tabs[0].classes()).not.toContain('tab-active');
    expect(tabs[1].classes()).toContain('tab-active');
    expect(tabs[2].classes()).not.toContain('tab-active');
  });

  it('handles disabled tabs correctly', () => {
    const tabsWithDisabled = [
      { label: 'Tab 1', content: 'Content 1' },
      { label: 'Tab 2', content: 'Content 2', disabled: true },
      { label: 'Tab 3', content: 'Content 3' },
    ];

    const wrapper = mount(Tabs, {
      props: {
        tabs: tabsWithDisabled,
        modelValue: 'Tab 1',
      },
    });

    const tabs = wrapper.findAll('.tab');
    expect(tabs[1].classes()).toContain('tab-disabled');
  });

  it('renders badges when provided', () => {
    const tabsWithBadges = [
      { label: 'Messages', content: 'Messages content', badge: '5' },
      { label: 'Settings', content: 'Settings content' },
    ];

    const wrapper = mount(Tabs, {
      props: {
        tabs: tabsWithBadges,
      },
    });

    expect(wrapper.find('.badge').exists()).toBe(true);
    expect(wrapper.find('.badge').text()).toBe('5');
  });

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: sampleTabs,
        disabled: true,
      },
    });

    const tabs = wrapper.findAll('.tab');
    tabs.forEach(tab => {
      expect(tab.classes()).toContain('tab-disabled');
    });
  });

  it('handles empty tabs array', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: [],
      },
    });

    expect(wrapper.findAll('.tab')).toHaveLength(0);
  });

  it('has distinct styling for different variants', () => {
    const variants = ['bordered', 'lifted', 'boxed'] as const;
    
    variants.forEach(variant => {
      const wrapper = mount(Tabs, {
        props: {
          tabs: sampleTabs,
          variant,
        },
      });

      const tabsContainer = wrapper.find('.tabs');
      expect(tabsContainer.classes()).toContain(`tabs-${variant}`);
      
      // Verify that the variant class is applied
      expect(tabsContainer.classes()).toContain(`tabs-${variant}`);
    });
  });
});
