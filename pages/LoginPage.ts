import {Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page:Page
    readonly accountMenu: Locator
    readonly loginMenu: Locator
    readonly emailIdField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page:Page){
        this.page = page;
        this.accountMenu = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        this.loginMenu = page.locator("//a[@class='icon-left both dropdown-item']//span[contains(.,'Login')]")
        this.emailIdField = page.locator("#input-email");
        this.passwordField = page.locator("#input-password");
        this.loginButton = page.locator("//input[@value='Login']");
    }
}