import { test } from '@playwright/test'

test('Evaluate in browser context', async ({ page }) => {
    await page.goto('/')
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        }
    })
    console.log(dimensions)
})
