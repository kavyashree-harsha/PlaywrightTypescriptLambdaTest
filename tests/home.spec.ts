import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { Utilities } from '../utilities/utilities';

test("Validating Home Page screen", async({page})=>{
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const utilitiesPage = new Utilities(page);
    let userID = process.env.userID;
    let password = process.env.password;
    await page.goto(loginPage.url);
    await utilitiesPage.waitForPageDomLoad(page);
    await loginPage.login(userID, password);

    //Validate the My account, My Orders and My Affiliate Account tabs
    await utilitiesPage.shortWait(page);
    expect(await homePage.validateHomePageHeaders()).toEqual(true);

    //Validate the menu options in My Account tab
    await homePage.validateMyAccountOptions(page);

    //Validate the menu options in My Order tab

    //Validate the menu options in My Affiliate Account tab

})
