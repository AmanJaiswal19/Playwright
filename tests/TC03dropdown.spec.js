const { test, expect } = require('@playwright/test')

// static dropdown
test('verify static dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('3')
    await page.locator('#superheros').selectOption('am')
    await page.locator('#lang').selectOption('Python')
    await page.locator('#country').selectOption('India')
    await page.pause()
})

// dynyamic dropdown/Auto suggetion dropdown
test.only('verify dynyamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Nagpur')
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    for (let i = 0; i < optionCount; i++) {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if (text === 'pune') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.pause()
})