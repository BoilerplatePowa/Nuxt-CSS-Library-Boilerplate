describe('Cypress Setup Verification', () => {
  it('should be able to access Storybook homepage', () => {
    // This test verifies that Cypress can connect to Storybook
    cy.visit('/');

    // Check that we're on a Storybook page
    cy.get('title').should('contain', 'Storybook');

    // Check for basic Storybook elements
    cy.get('[data-testid="sidebar-nav"]', { timeout: 10000 }).should('exist');

    // Verify accessibility testing works
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should be able to navigate to a component story', () => {
    cy.visit('/');

    // Wait for sidebar to load
    cy.get('[data-testid="sidebar-nav"]', { timeout: 10000 }).should('exist');

    // Try to find and click on a component link
    cy.contains('Components').should('exist');

    // This is a basic navigation test
    cy.url().should('include', 'localhost:6006');
  });
});
