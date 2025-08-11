import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/Button.vue'

describe('Button', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test Button'
      }
    })
    
    expect(wrapper.text()).toBe('Test Button')
    expect(wrapper.classes()).toContain('btn')
    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('applies variant classes correctly', () => {
    const variants = ['primary', 'secondary', 'accent', 'ghost', 'outline', 'link'] as const
    
    variants.forEach(variant => {
      const wrapper = mount(Button, {
        props: { variant },
        slots: { default: 'Test' }
      })
      
      if (variant === 'outline') {
        expect(wrapper.classes()).toContain('btn-outline')
      } else if (variant === 'ghost') {
        expect(wrapper.classes()).toContain('btn-ghost')
      } else if (variant === 'link') {
        expect(wrapper.classes()).toContain('btn-link')
      } else {
        expect(wrapper.classes()).toContain(`btn-${variant}`)
      }
    })
  })

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    
    sizes.forEach(size => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Test' }
      })
      
      if (size !== 'md') {
        expect(wrapper.classes()).toContain(`btn-${size}`)
      }
    })
  })

  it('applies disabled state correctly', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Test' }
    })
    
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('applies loading state correctly', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Test' }
    })
    
    expect(wrapper.classes()).toContain('loading')
  })

  it('applies full width correctly', () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true },
      slots: { default: 'Test' }
    })
    
    expect(wrapper.classes()).toContain('btn-block')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Test' }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Test' }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click event when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Test' }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('renders icon slots correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
        'icon-left': '<span class="icon-left">←</span>',
        'icon-right': '<span class="icon-right">→</span>'
      }
    })
    
    expect(wrapper.find('.icon-left').exists()).toBe(true)
    expect(wrapper.find('.icon-right').exists()).toBe(true)
    expect(wrapper.text()).toContain('Test')
  })

  it('sets correct button type', () => {
    const types = ['button', 'submit', 'reset'] as const
    
    types.forEach(type => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: 'Test' }
      })
      
      expect(wrapper.attributes('type')).toBe(type)
    })
  })
}) 