const { test, expect } = require('@playwright/test')

//Mouse actions 
//click()
//dblclick()
//hover()
//rightClick()

test('verify the mouse action dbclick', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await page.pause()
})

test('verify the mouse action rightclick', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await page.pause()
})

test.only('verify the mouse hover', async ({ page }) => {
    await page.goto('https://demoqa.com/menu')
    await page.getByText('Main Item 2').hover()
    await page.getByText('SUB SUB LIST »').hover()
    await page.getByText('Sub Sub Item 1').click()
    await expect(page).toHaveURL('https://demoqa.com/menu#')
    await page.pause()
})