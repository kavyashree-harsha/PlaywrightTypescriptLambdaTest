import {chromium, test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Utilities } from '../utilities/utilities';

test("Login operations for LambdaTest website", async() =>{

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        const utilitiesPage = new Utilities(page);
        //Launch website
        await page.goto(loginPage.url);
        await utilitiesPage.waitForPageDomLoad(page);
        //Login to the page
        await loginPage.login("kavyashree.kestur@yahoo.com", "Testing@123");
        await utilitiesPage.waitForPageDomLoad(page);
        //Validate Home Page screen
        expect(await loginPage.homePageLayout.isVisible()).toEqual(true);
        
    }
);