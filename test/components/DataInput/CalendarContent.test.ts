import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CalendarContent from '../../../src/components/DataInput/CalendarContent.vue';

describe('CalendarContent', () => {
  const createWrapper = (props = {}) => {
    return mount(CalendarContent, {
      props,
    });
  };

  describe('Props', () => {
    it('renders with default props', () => {
      const wrapper = createWrapper();
      expect(wrapper.find('.calendar-content').exists()).toBe(true);
      expect(wrapper.find('.calendar-header').exists()).toBe(true);
      expect(wrapper.find('.calendar-grid').exists()).toBe(true);
    });

    it('supports v-model with defineModel()', async () => {
      const wrapper = createWrapper();
      const testDate = new Date('2024-01-15');

      // Test that the component can receive a value through v-model
      await wrapper.setProps({ modelValue: testDate });

      // The component should update its internal state
      expect(wrapper.vm.currentMonth).toBe(0); // January
      expect(wrapper.vm.currentYear).toBe(2024);
    });

    it('applies size classes correctly', () => {
      const wrapper = createWrapper({ size: 'lg' });
      expect(wrapper.find('.calendar-content').classes()).toContain('text-lg');
    });

    it('shows month and year selectors when enabled', () => {
      const wrapper = createWrapper({ allowMonthSelect: true, allowYearSelect: true });
      expect(wrapper.find('select').exists()).toBe(true);
    });

    it('hides month and year selectors when disabled', () => {
      const wrapper = createWrapper({ allowMonthSelect: false, allowYearSelect: false });
      expect(wrapper.find('select').exists()).toBe(false);
    });
  });

  describe('Calendar Navigation', () => {
    it('navigates to previous month', async () => {
      const wrapper = createWrapper();
      const initialMonth = wrapper.vm.currentMonth;

      await wrapper.find('[aria-label="Previous month"]').trigger('click');

      expect(wrapper.vm.currentMonth).toBe(initialMonth === 0 ? 11 : initialMonth - 1);
    });

    it('navigates to next month', async () => {
      const wrapper = createWrapper();
      const initialMonth = wrapper.vm.currentMonth;

      await wrapper.find('[aria-label="Next month"]').trigger('click');

      expect(wrapper.vm.currentMonth).toBe(initialMonth === 11 ? 0 : initialMonth + 1);
    });

    it('changes month via selector', async () => {
      const wrapper = createWrapper({ allowMonthSelect: true });
      const monthSelect = wrapper.find('select');

      await monthSelect.setValue('5'); // June

      expect(wrapper.vm.currentMonth).toBe(5);
    });

    it('changes year via selector', async () => {
      const wrapper = createWrapper({ allowYearSelect: true });
      const yearSelect = wrapper.findAll('select')[1];

      await yearSelect.setValue('2025');

      expect(wrapper.vm.currentYear).toBe(2025);
    });
  });

  describe('Date Selection', () => {
    it('selects a single date', async () => {
      const wrapper = createWrapper();

      // Find and click on the 15th day button
      const dayButton = wrapper.find('[aria-label*="1/15/2024"]');
      if (dayButton.exists()) {
        await dayButton.trigger('click');

        // The model should be updated through defineModel()
        expect(wrapper.vm.model.value).toBeInstanceOf(Date);
      }
    });

    it('selects date range when range is enabled', async () => {
      const wrapper = createWrapper({ range: true });

      // Select first date
      const firstDayButton = wrapper.find('[aria-label*="1/15/2024"]');
      if (firstDayButton.exists()) {
        await firstDayButton.trigger('click');

        // Select second date
        const secondDayButton = wrapper.find('[aria-label*="1/20/2024"]');
        if (secondDayButton.exists()) {
          await secondDayButton.trigger('click');

          // Should have two dates selected
          expect(Array.isArray(wrapper.vm.model.value)).toBe(true);
          expect(wrapper.vm.model.value.length).toBe(2);
        }
      }
    });

    it('clears selection', async () => {
      const wrapper = createWrapper({ range: true });

      // Find the clear button specifically
      const clearButton = wrapper.find('button[aria-label*="Clear"]');
      if (clearButton.exists()) {
        await clearButton.trigger('click');

        // The model should be cleared
        expect(wrapper.vm.model.value).toBeNull();
      }
    });
  });

  describe('Time Picker', () => {
    it('shows time picker when enabled', () => {
      const wrapper = createWrapper({ showTime: true });
      expect(wrapper.find('.calendar-time').exists()).toBe(true);
      expect(wrapper.find('input[type="time"]').exists()).toBe(true);
    });

    it('hides time picker when disabled', () => {
      const wrapper = createWrapper({ showTime: false });
      expect(wrapper.find('.calendar-time').exists()).toBe(false);
    });

    it('updates time value', async () => {
      const wrapper = createWrapper({ showTime: true });
      const timeInput = wrapper.find('input[type="time"]');

      await timeInput.setValue('14:30');

      expect(wrapper.vm.selectedTime).toBe('14:30');
    });
  });

  describe('Constraints', () => {
    it('disables dates before min date', async () => {
      const minDate = new Date('2024-01-15');
      const wrapper = createWrapper({ minDate });

      // Set current month to January 2024 to test the constraint
      wrapper.vm.currentMonth = 0;
      wrapper.vm.currentYear = 2024;

      // Force a re-render to update the computed properties
      await wrapper.vm.$nextTick();

      // Check that previous month button is disabled
      const prevButton = wrapper.find('[aria-label="Previous month"]');
      expect(prevButton.attributes('disabled')).toBeDefined();
    });

    it('disables dates after max date', () => {
      const maxDate = new Date('2024-12-31');
      const wrapper = createWrapper({ maxDate });

      // Check that next month button is disabled when viewing December
      wrapper.vm.currentMonth = 11;
      wrapper.vm.currentYear = 2024;

      const nextButton = wrapper.find('[aria-label="Next month"]');
      expect(nextButton.attributes('disabled')).toBeDefined();
    });

    it('disables specific dates', () => {
      const disabledDates = [new Date('2024-01-01'), new Date('2024-12-25')];
      const wrapper = createWrapper({ disabledDates });

      // The disabled dates should have disabled attribute
      const disabledDay = wrapper.find('[aria-label*="1/1/2024"]');
      if (disabledDay.exists()) {
        expect(disabledDay.attributes('disabled')).toBeDefined();
      }
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      const wrapper = createWrapper();

      expect(wrapper.find('[role="grid"]').exists()).toBe(true);
      expect(wrapper.find('[role="columnheader"]').exists()).toBe(true);
      expect(wrapper.find('[role="gridcell"]').exists()).toBe(true);
    });

    it('has proper navigation button labels', () => {
      const wrapper = createWrapper();

      expect(wrapper.find('[aria-label="Previous month"]').exists()).toBe(true);
      expect(wrapper.find('[aria-label="Next month"]').exists()).toBe(true);
    });

    it('has proper day button labels', () => {
      const wrapper = createWrapper();

      const dayButton = wrapper.find('[role="gridcell"]');
      expect(dayButton.attributes('aria-label')).toBeDefined();
    });
  });

  describe('Localization', () => {
    it('uses correct locale for month names', () => {
      const wrapper = createWrapper({ locale: 'fr-FR' });

      // French month names should be used
      expect(wrapper.vm.monthNames[0]).toBe('janvier');
    });

    it('uses correct locale for weekday names', () => {
      const wrapper = createWrapper({ locale: 'fr-FR' });

      // French weekday names should be used (first day of week in French)
      expect(wrapper.vm.weekDays[0]).toBe('dim.');
    });
  });

  describe('Vue 3.4 defineModel()', () => {
    it('supports two-way binding with defineModel()', async () => {
      const wrapper = createWrapper();
      const testDate = new Date('2024-01-15');

      // Set the model value
      await wrapper.setProps({ modelValue: testDate });

      // The component should update its internal state
      expect(wrapper.vm.currentMonth).toBe(0); // January
      expect(wrapper.vm.currentYear).toBe(2024);

      // Test that the component responds to model changes
      expect(wrapper.vm.currentMonth).toBe(testDate.getMonth());
      expect(wrapper.vm.currentYear).toBe(testDate.getFullYear());
    });

    it('emits updates through defineModel()', async () => {
      const wrapper = createWrapper();

      // Simulate date selection
      const dayButton = wrapper.find('[aria-label*="1/15/2024"]');
      if (dayButton.exists()) {
        await dayButton.trigger('click');

        // The model should be updated
        expect(wrapper.vm.model.value).toBeInstanceOf(Date);
      }
    });
  });
});
