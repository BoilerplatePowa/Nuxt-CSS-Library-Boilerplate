describe('Design System Components', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Button component should be accessible', () => {
    cy.contains('Components/Button').click();
    cy.contains('Canvas').click();

    // Check if button is rendered
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('contain', 'Primary Button').should('be.visible');
    });

    // Run accessibility tests
    cy.checkA11y();
  });

  it('Button variants should work correctly', () => {
    cy.contains('Components/Button').click();
    cy.contains('Canvas').click();

    // Test different variants
    cy.get('[name="variant"]').select('secondary');
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('have.class', 'btn-secondary');
    });

    cy.get('[name="variant"]').select('outline');
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('have.class', 'btn-outline');
    });
  });

  it('Button should handle click events', () => {
    cy.contains('Components/Button').click();
    cy.contains('Canvas').click();

    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').contains('Primary Button').click();
    });

    // Check if action was logged (in Storybook actions panel)
    cy.contains('Actions').click();
    cy.get('.action-logger-inspector').should('contain', 'clicked');
  });

  it('Card component should be accessible', () => {
    cy.contains('Components/Card').click();
    cy.contains('Canvas').click();

    // Check if card is rendered
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('.card').should('be.visible');
    });

    // Run accessibility tests
    cy.checkA11y();
  });

  it('Input component should be accessible', () => {
    cy.contains('Components/Input').click();
    cy.contains('Canvas').click();

    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');

      // Check if input is rendered with proper label
      cy.wrap($body).find('input[type="email"]').should('be.visible');

      // Test input functionality
      cy.wrap($body).find('input[type="email"]').type('test@example.com');
      cy.wrap($body).find('input[type="email"]').should('have.value', 'test@example.com');
    });

    // Run accessibility tests
    cy.checkA11y();
  });

  it('Modal component should handle keyboard navigation', () => {
    cy.contains('Components/Modal').click();
    cy.contains('Canvas').click();

    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');

      // Open modal
      cy.wrap($body).find('button').contains('Open Modal').click();
      cy.wrap($body).find('[role="dialog"]').should('be.visible');

      // Test ESC key closes modal
      cy.wrap($body).type('{esc}');
      cy.wrap($body).find('[role="dialog"]').should('not.exist');

      // Test accessibility
      cy.wrap($body).find('button').contains('Open Modal').click();
    });

    cy.checkA11y();
  });

  it('All components page should load correctly', () => {
    cy.contains('Example/Introduction').click();

    // Check if the page loads without errors
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('h1').should('contain', 'Design System');
    });
  });

  it('Components should be responsive', () => {
    cy.contains('Components/Button').click();
    cy.contains('Canvas').click();

    // Test mobile viewport
    cy.viewport(375, 667);
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('be.visible');
    });

    // Test tablet viewport
    cy.viewport(768, 1024);
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('be.visible');
    });

    // Test desktop viewport
    cy.viewport(1920, 1080);
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('button').should('be.visible');
    });
  });

  it('Theme switching should work', () => {
    // Go to any component story
    cy.contains('Components/Button').click();

    // Look for theme controls in Storybook toolbar
    cy.get('[title="Change the theme of the preview"]').then($themeSelector => {
      if ($themeSelector.length > 0) {
        cy.wrap($themeSelector).click();
        // Test if themes can be switched
        cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
          const $body = $iframe.contents().find('body');
          cy.wrap($body).find('[data-theme]').should('have.attr', 'data-theme');
        });
      }
    });
  });

  it('Storybook docs should be generated', () => {
    cy.contains('Components/Button').click();
    cy.contains('Docs').click();

    // Check if docs are generated
    cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('.sbdocs').should('be.visible');
      cy.wrap($body).find('h1').should('contain', 'Button');
    });
  });
});

describe('Accessibility Tests', () => {
  it('All component stories should pass accessibility tests', () => {
    const components = ['Button', 'Card', 'Input', 'Modal'];

    components.forEach(component => {
      cy.visit(`/?path=/story/components-${component.toLowerCase()}--default`);
      cy.wait(1000); // Wait for story to load

      cy.get('iframe[id="storybook-preview-iframe"]').then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).injectAxe();
        cy.wrap($body).checkA11y();
      });
    });
  });
});
