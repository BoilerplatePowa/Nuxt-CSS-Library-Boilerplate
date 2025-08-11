import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../../src/components/Card.vue'

describe('Card', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content'
      }
    })
    
    expect(wrapper.text()).toBe('Test Content')
    expect(wrapper.classes()).toContain('card')
  })

  it('renders title when provided', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: { default: 'Test Content' }
    })
    
    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.find('.card-title').text()).toBe('Test Title')
  })

  it('renders custom header slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>'
      }
    })
    
    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.custom-header').text()).toBe('Custom Header')
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Test Content',
        footer: '<div class="custom-footer">Custom Footer</div>'
      }
    })
    
    expect(wrapper.find('.custom-footer').exists()).toBe(true)
    expect(wrapper.find('.custom-footer').text()).toBe('Custom Footer')
  })

  it('applies variant classes correctly', () => {
    const variants = ['default', 'bordered', 'glass'] as const
    
    variants.forEach(variant => {
      const wrapper = mount(Card, {
        props: { variant },
        slots: { default: 'Test' }
      })
      
      if (variant === 'bordered') {
        expect(wrapper.classes()).toContain('card-bordered')
      } else if (variant === 'glass') {
        expect(wrapper.classes()).toContain('card-glass')
      }
    })
  })

  it('applies shadow classes correctly', () => {
    const shadows = ['none', 'sm', 'md', 'lg', 'xl'] as const
    
    shadows.forEach(shadow => {
      const wrapper = mount(Card, {
        props: { shadow },
        slots: { default: 'Test' }
      })
      
      if (shadow !== 'none') {
        expect(wrapper.classes()).toContain(`shadow-${shadow}`)
      }
    })
  })

  it('applies padding classes correctly', () => {
    const paddings = ['none', 'sm', 'md', 'lg'] as const
    
    paddings.forEach(padding => {
      const wrapper = mount(Card, {
        props: { padding },
        slots: { default: 'Test' }
      })
      
      if (padding === 'none') {
        expect(wrapper.classes()).toContain('p-0')
      } else if (padding === 'sm') {
        expect(wrapper.classes()).toContain('p-2')
      } else if (padding === 'lg') {
        expect(wrapper.classes()).toContain('p-6')
      }
    })
  })

  it('does not render header when no title or header slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Test Content' }
    })
    
    expect(wrapper.find('.card-header').exists()).toBe(false)
  })

  it('does not render footer when no footer slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Test Content' }
    })
    
    expect(wrapper.find('.card-actions').exists()).toBe(false)
  })

  it('renders both title and custom header slot', () => {
    const wrapper = mount(Card, {
      props: { title: 'Default Title' },
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>'
      }
    })
    
    // Custom header should override default title
    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.card-title').exists()).toBe(false)
  })

  it('has correct structure with all sections', () => {
    const wrapper = mount(Card, {
      props: { title: 'Test Title' },
      slots: {
        default: 'Test Content',
        header: '<div class="custom-header">Custom Header</div>',
        footer: '<div class="custom-footer">Custom Footer</div>'
      }
    })
    
    expect(wrapper.find('.card-header').exists()).toBe(true)
    expect(wrapper.find('.card-body').exists()).toBe(true)
    expect(wrapper.find('.card-actions').exists()).toBe(true)
  })
}) 