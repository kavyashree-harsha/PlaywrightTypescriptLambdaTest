import {Page, Locator} from '@playwright/test'
import { Utilities } from '../utilities/utilities';

export class LoginPage{
    readonly page:Page
    readonly url:string
    readonly accountMenu: Locator
    readonly loginMenu: Locator
    readonly emailIdField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly homePageLayout: Locator
    

    constructor(page:Page){
        this.page = page;
        this.url = "https://ecommerce-playground.lambdatest.io";
        this.accountMenu = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        this.loginMenu = page.locator("//a[@class='icon-left both dropdown-item']//span[contains(.,'Login')]")
        this.emailIdField = page.locator("#input-email");
        this.passwordField = page.locator("#input-password");
        this.loginButton = page.locator("//input[@value='Login']");
        this.homePageLayout = page.locator("#account-account");
    }

    async login(username:string, password:string){
        
        await this.accountMenu.hover();
        await this.loginMenu.click();
        const utilitiesPage = new Utilities(this.page);
        await utilitiesPage.shortWait(this.page);
        await this.emailIdField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}