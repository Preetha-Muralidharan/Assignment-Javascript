import {test,expect} from "@playwright/test"

test ("file download Activity",async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/download")
      
    //create event listener
    const fdown = page.waitForEvent("download")
    //trigger click action
    // await page.getByText("background.jpg").click()
     await page.getByRole('link', { name: 'background.jpg' }).click();
    
    //resolve promise
    const downloading = await fdown
    await downloading.saveAs('Data/background.jpg')
    //await downloading.saveAs(`Utils/${downloading.suggestedFilename()}`)
    expect (downloading).toBeTruthy()
   // expect (downloading.suggestedFilename()).toContain("background")
    
})
