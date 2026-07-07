import {test} from "@playwright/test"
import path from 'path'
test("File Upload",  async ({page})=>{
await page.goto("https://leafground.com/file.xhtml")
await page.waitForTimeout(2000)
let fileupload= await page.locator('(//input[@type="file"])[2]')
//await page.waitForTimeout(2000)
await fileupload.setInputFiles(['Utils/tiger.jpeg','Utils/TestLeaf Logo.png'])
await page.waitForTimeout(2000)

console.log(await page.locator('(//div[@class="ui-fileupload-filename"])[1]').innerText());
    console.log(await page.locator('(//div[@class="ui-fileupload-filename"])[2]').innerText());

} 
)
