import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Design System Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Button component should be accessible', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Button' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Check if button is rendered
    await expect(page.getByRole('button', { name: 'Primary Button' })).toBeVisible()
    
    // Run accessibility tests
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Button variants should work correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Button' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Test different variants
    const variantControl = page.locator('[name="variant"]')
    await variantControl.selectOption('secondary')
    await expect(page.getByRole('button')).toHaveClass(/btn-secondary/)
    
    await variantControl.selectOption('outline')
    await expect(page.getByRole('button')).toHaveClass(/btn-outline/)
  })

  test('Button should handle click events', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Button' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    const button = page.getByRole('button', { name: 'Primary Button' })
    await button.click()
    
    // Check if action was logged (in Storybook actions panel)
    await page.getByRole('tab', { name: 'Actions' }).click()
    await expect(page.locator('.action-logger-inspector')).toContainText('clicked')
  })

  test('Card component should be accessible', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Card' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Check if card is rendered
    await expect(page.locator('.card')).toBeVisible()
    
    // Run accessibility tests
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Input component should be accessible', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Input' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Check if input is rendered with proper label
    await expect(page.getByLabel('Email')).toBeVisible()
    
    // Test input functionality
    await page.getByLabel('Email').fill('test@example.com')
    await expect(page.getByLabel('Email')).toHaveValue('test@example.com')
    
    // Run accessibility tests
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Modal component should handle keyboard navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Modal' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Open modal
    await page.getByRole('button', { name: 'Open Modal' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    
    // Test ESC key closes modal
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
    
    // Test accessibility
    await page.getByRole('button', { name: 'Open Modal' }).click()
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('All components page should load correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Example/Introduction' }).click()
    
    // Check if the page loads without errors
    await expect(page.locator('h1')).toContainText('Design System')
  })

  test('Components should be responsive', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Button' }).click()
    await page.getByRole('tab', { name: 'Canvas' }).click()
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByRole('button')).toBeVisible()
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.getByRole('button')).toBeVisible()
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 })
    await expect(page.getByRole('button')).toBeVisible()
  })

  test('Theme switching should work', async ({ page }) => {
    // Go to any component story
    await page.getByRole('link', { name: 'Components/Button' }).click()
    
    // Look for theme controls in Storybook toolbar
    const themeSelector = page.locator('[title="Change the theme of the preview"]')
    if (await themeSelector.isVisible()) {
      await themeSelector.click()
      // Test if themes can be switched
      await expect(page.locator('[data-theme]')).toHaveAttribute('data-theme')
    }
  })

  test('Storybook docs should be generated', async ({ page }) => {
    await page.getByRole('link', { name: 'Components/Button' }).click()
    await page.getByRole('tab', { name: 'Docs' }).click()
    
    // Check if docs are generated
    await expect(page.locator('.sbdocs')).toBeVisible()
    await expect(page.locator('h1')).toContainText('Button')
  })
})

test.describe('Accessibility Tests', () => {
  test('All component stories should pass accessibility tests', async ({ page }) => {
    const components = ['Button', 'Card', 'Input', 'Modal']
    
    for (const component of components) {
      await page.goto(`/?path=/story/components-${component.toLowerCase()}--default`)
      await page.waitForLoadState('networkidle')
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
      
      expect(accessibilityScanResults.violations, `${component} component has accessibility violations`).toEqual([])
    }
  })
})