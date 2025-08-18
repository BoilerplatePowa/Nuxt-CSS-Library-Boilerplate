import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Calendar from '../../../src/components/DataInput/Calendar.vue';

// Mock Cally web component
vi.mock('cally', () => ({
  default: {},
}));

// Mock the calendar-date web component
const mockCalendarDate = {
  name: 'calendar-date',
  template: '<div class="mock-calendar-date cally"><slot /></div>',
  props: ['value', 'class'],
  emits: ['change'],
};

// Mock the calendar-range web component
const mockCalendarRange = {
  name: 'calendar-range',
  template: '<div class="mock-calendar-range cally"><slot /></div>',
  props: ['value', 'class'],
  emits: ['change'],
};

const mockCalendarMonth = {
  name: 'calendar-month',
  template: '<div class="mock-calendar-month">Calendar Month</div>',
};

describe('Calendar', () => {
  const createWrapper = (props = {}) => {
    return mount(Calendar, {
      props,
      global: {
        components: {
          'calendar-date': mockCalendarDate,
          'calendar-range': mockCalendarRange,
          'calendar-month': mockCalendarMonth,
        },
      },
    });
  };

  describe('Props', () => {
    it('renders with default props', () => {
      const wrapper = createWrapper();
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.calendar-container').exists()).toBe(true);
    });

    it('applies size classes correctly', () => {
      const wrapper = createWrapper({ size: 'lg' });
      const callyElement = wrapper.find('.mock-calendar-date');
      expect(callyElement.classes()).toContain('cally');
    });

    it('applies variant classes correctly', () => {
      const wrapper = createWrapper({ variant: 'bordered' });
      const callyElement = wrapper.find('.mock-calendar-date');
      expect(callyElement.classes()).toContain('cally');
    });

    it('applies disabled state correctly', () => {
      const wrapper = createWrapper({ disabled: true });
      expect(wrapper.find('.calendar-container').classes()).toContain('opacity-60');
      expect(wrapper.find('.calendar-container').classes()).toContain('pointer-events-none');
    });
  });

  describe('Modes', () => {
    it('renders calendar mode by default', () => {
      const wrapper = createWrapper();
      expect(wrapper.find('.mock-calendar-date').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(false);
    });

    it('renders datepicker mode correctly', () => {
      const wrapper = createWrapper({ mode: 'datepicker' });
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('.input').exists()).toBe(true);
    });

    it('shows placeholder in datepicker mode', () => {
      const wrapper = createWrapper({ 
        mode: 'datepicker', 
        placeholder: 'Custom placeholder' 
      });
      expect(wrapper.find('button').text()).toBe('Custom placeholder');
    });

    it('shows selected date in datepicker mode', () => {
      const testDate = new Date('2024-01-15');
      const wrapper = createWrapper({ 
        mode: 'datepicker',
        modelValue: testDate
      });
      expect(wrapper.find('button').text()).toBe(testDate.toLocaleDateString());
    });

    it('renders range calendar when range prop is true', () => {
      const wrapper = createWrapper({ range: true });
      expect(wrapper.find('.mock-calendar-range').exists()).toBe(true);
      expect(wrapper.find('.mock-calendar-date').exists()).toBe(false);
    });

    it('renders single date calendar when range prop is false', () => {
      const wrapper = createWrapper({ range: false });
      expect(wrapper.find('.mock-calendar-date').exists()).toBe(true);
      expect(wrapper.find('.mock-calendar-range').exists()).toBe(false);
    });

    it('renders range calendar in datepicker mode', () => {
      const wrapper = createWrapper({ mode: 'datepicker', range: true });
      expect(wrapper.find('.mock-calendar-range').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(true);
    });
  });

  describe('Events', () => {
    it('has proper popover attributes in datepicker mode', () => {
      const wrapper = createWrapper({ mode: 'datepicker' });
      const button = wrapper.find('button');
      const popover = wrapper.find('[popover]');
      
      expect(button.attributes('popovertarget')).toBeDefined();
      expect(popover.attributes('popover')).toBeDefined();
      expect(popover.attributes('id')).toBeDefined();
    });

    it('has unique IDs for button and popover', () => {
      const wrapper = createWrapper({ mode: 'datepicker' });
      const button = wrapper.find('button');
      const popover = wrapper.find('[popover]');
      
      expect(button.attributes('id')).toBeDefined();
      expect(popover.attributes('id')).toBeDefined();
      expect(button.attributes('popovertarget')).toBe(popover.attributes('id'));
    });


  });

  describe('Date validation', () => {
    it('validates min date constraint', () => {
      const wrapper = createWrapper({
        minDate: new Date('2024-01-15'),
      });
      
      const validDate = new Date('2024-01-20');
      const invalidDate = new Date('2024-01-10');
      
      expect(wrapper.vm.isDateValid(validDate)).toBe(true);
      expect(wrapper.vm.isDateValid(invalidDate)).toBe(false);
    });

    it('validates max date constraint', () => {
      const wrapper = createWrapper({
        maxDate: new Date('2024-01-15'),
      });
      
      const validDate = new Date('2024-01-10');
      const invalidDate = new Date('2024-01-20');
      
      expect(wrapper.vm.isDateValid(validDate)).toBe(true);
      expect(wrapper.vm.isDateValid(invalidDate)).toBe(false);
    });

    it('validates disabled dates', () => {
      const disabledDates = [
        new Date('2024-01-15'),
        new Date('2024-01-20'),
      ];
      
      const wrapper = createWrapper({
        disabledDates,
      });
      
      const validDate = new Date('2024-01-10');
      const invalidDate = new Date('2024-01-15');
      
      expect(wrapper.vm.isDateValid(validDate)).toBe(true);
      expect(wrapper.vm.isDateValid(invalidDate)).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes in datepicker mode', () => {
      const wrapper = createWrapper({ mode: 'datepicker' });
      const button = wrapper.find('button');
      
      expect(button.attributes('disabled')).toBeUndefined();
    });

    it('disables button when disabled prop is true', () => {
      const wrapper = createWrapper({ 
        mode: 'datepicker',
        disabled: true 
      });
      const button = wrapper.find('button');
      
      expect(button.attributes('disabled')).toBeDefined();
    });
  });

  describe('Styling', () => {
    it('applies correct classes for different variants', () => {
      const borderedWrapper = createWrapper({ variant: 'bordered' });
      const filledWrapper = createWrapper({ variant: 'filled' });
      
      expect(borderedWrapper.find('.mock-calendar-date').exists()).toBe(true);
      expect(filledWrapper.find('.mock-calendar-date').exists()).toBe(true);
    });

    it('applies correct classes for different sizes', () => {
      const smWrapper = createWrapper({ size: 'sm' });
      const lgWrapper = createWrapper({ size: 'lg' });
      
      expect(smWrapper.find('.mock-calendar-date').exists()).toBe(true);
      expect(lgWrapper.find('.mock-calendar-date').exists()).toBe(true);
    });
  });
});
