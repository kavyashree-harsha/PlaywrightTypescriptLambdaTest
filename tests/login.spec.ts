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
        await page.goto("https://ecommerce-playground.lambdatest.io");
        await utilitiesPage.waitForPageDomLoad(page);
        //Login by entering username and password
        await loginPage.accountMenu.hover();
        await loginPage.loginMenu.click();
        await utilitiesPage.shortWait(page);
        await loginPage.emailIdField.fill("kavyashree.kestur@yahoo.com");
        await loginPage.passwordField.fill("Testing@123");
        await loginPage.loginButton.click();
        await utilitiesPage.waitForPageDomLoad(page);
        //Validate Home Page screen
        expect(await page.locator("#account-account").isVisible()).toEqual(true);
        

    }
);