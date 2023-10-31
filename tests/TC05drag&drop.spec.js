const { test, expect } = require('@playwright/test')

test('Drag and drop using inbuild command', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').dragTo(await page.locator('#box101'))
    await expect(page.locator('#box1')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.pause()
})

test.only('Drag and Drop using mouse actions', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box101').hover()
    await page.mouse.up()
    await page.pause()
})
