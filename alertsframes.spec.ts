import { test } from "@playwright/test"


test("Frames", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.waitForTimeout(5000)
    page.on('dialog',async(alert) =>
    {

alert.accept()

    }
   
)

    const frame = await page.frameLocator('//iframe[@id="iframeResult"]');
    await page.waitForTimeout(5000)
   await frame.locator('//button[text()="Try it"]').click();
   
   await page.waitForTimeout(2000)
   const textMessage = await frame.locator("#demo").innerText();
    await page.waitForTimeout(2000)
   console.log(textMessage);
   
   
})
