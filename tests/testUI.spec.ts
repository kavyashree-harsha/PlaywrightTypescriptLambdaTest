import {chromium, test, expect} from '@playwright/test'

test("Login operations for LambdaTest website", async() =>{

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        //Launch website
        await page.goto("https://ecommerce-playground.lambdatest.io");
        await page.waitForLoadState("domcontentloaded");
        //Login by entering username and password
        await page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]").hover();
        await page.locator("//a[@class='icon-left both dropdown-item']//span[contains(.,'Login')]").click();
        await page.waitForTimeout(4000);
        await page.locator("#input-email").fill("kavyashree.kestur@yahoo.com");
        await page.locator("#input-password").fill("Testing@123");
        await page.locator("//input[@value='Login']").click();
        await page.waitForLoadState("domcontentloaded");
        //Validate Home Page screen
        expect(await page.locator("#account-account").isVisible()).toEqual(true);
        

    }
);