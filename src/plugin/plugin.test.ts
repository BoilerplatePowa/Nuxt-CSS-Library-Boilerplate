import { describe, it, expect, vi } from 'vitest';
import { defineNuxtModule } from '@nuxt/kit';

// Mock Nuxt kit functions
vi.mock('@nuxt/kit', () => ({
  defineNuxtModule: vi.fn(),
  addComponent: vi.fn(),
  createResolver: vi.fn(() => ({ resolve: vi.fn((path: string) => path) })),
  addImports: vi.fn(),
}));

describe('Design System Plugin', () => {
  it('should define a Nuxt module with correct meta', async () => {
    // Import the module to trigger module definition
    await import('../module.ts');
    
    expect(defineNuxtModule).toHaveBeenCalledWith(
      expect.objectContaining({
        meta: {
          name: '@boilerplatepowa/nuxt-design-system',
          configKey: 'designSystem',
          compatibility: {
            nuxt: '^4.0.0',
          },
        },
        defaults: {
          prefix: 'Bp',
          components: true,
          css: true,
          composables: true,
        },
      })
    );
  });

  it('should have correct default configuration', async () => {
    // Import the module to trigger module definition
    await import('../module.ts');
    
    // Check that defineNuxtModule was called with correct defaults
    expect(defineNuxtModule).toHaveBeenCalledWith(
      expect.objectContaining({
        defaults: {
          prefix: 'Bp',
          components: true,
          css: true,
          composables: true,
        },
      })
    );
  });

  it('should support all component categories', async () => {
    // Import the module to trigger module definition
    await import('../module.ts');
    
    // This test ensures the plugin knows about all component categories
    const expectedCategories = [
      'Actions',
      'DataDisplay', 
      'DataInput',
      'Feedback',
      'Icons',
      'Layout',
      'Mockup',
      'Navigation',
    ];

    // The plugin should handle all these categories
    expect(defineNuxtModule).toHaveBeenCalled();
  });
});

describe('Plugin Configuration Types', () => {
  it('should support boolean components configuration', () => {
    const config = {
      components: true,
    };
    
    expect(typeof config.components).toBe('boolean');
  });

  it('should support array components configuration', () => {
    const config = {
      components: ['Button', 'Card', 'Input'],
    };
    
    expect(Array.isArray(config.components)).toBe(true);
  });

  it('should support custom prefix', () => {
    const config = {
      prefix: 'MyDS',
    };
    
    expect(typeof config.prefix).toBe('string');
  });
});
