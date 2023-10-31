const { test, expect } = require('@playwright/test')

test('Handling radioButton', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked
    await page.pause()
})

test.only('Handling Checkbox', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-0').check()
    await expect(page.locator('#vfb-6-0')).toBeChecked
    await page.pause()
})

