const { test, expect } = require('@playwright/test')

test('verify login functionality with valid credentials', async ({ page }) => {
    //step 1 nevigate to the URl
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //step 2 Enter the Username 
    await page.locator('[name="username"]').fill('Admin')
    //step 3  enter password
    await page.locator('[name="password"]').fill('admin123')
    //step 4 click on login button
    await page.locator('[type="submit"]').click()
    //Step 5 validation 
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.pause()
})

test.only('verify login functionality with invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin12345')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
    await page.pause()
})
