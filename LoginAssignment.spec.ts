 to launch two separate browser instances using Playwright
import {test,chromium,webkit} from "@playwright/test"
//Launch Red Bus in an Edge browser instance
test ("Launch Redbus in msedge Browser",async()=>
{
const edgebrowser=await chromium.launch({headless:false,channel:"msedge"})
    const edgecontext = await edgebrowser.newContext()
    const redbuspage=await edgecontext.newPage()
    await redbuspage.goto("https://www.redbus.in/")
    await redbuspage.waitForTimeout(5000)
console.log('RedBus Title:', await redbuspage.title());
console.log('RedBus URL:', redbuspage.url());

//Launch Flipkart in Webkit browser instance
const webkitbrowser=await webkit.launch({headless:false,channel:"webkit"})
    const webkitcontext = await webkitbrowser.newContext()
    const flipkartpage=await webkitcontext.newPage()
    await flipkartpage.goto("https://www.flipkart.com")
   await flipkartpage.waitForTimeout(5000)
console.log('Flipkart Title:',await flipkartpage.title());
console.log('Flipkart URL:', flipkartpage.url());

});
