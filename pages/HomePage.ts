import {Page, Locator} from '@playwright/test'

export class HomePage{
    readonly page:Page
    readonly url:string
    readonly myAccountHeader: Locator
    readonly myOrders: Locator
    readonly myAffiliateAccount: Locator
   // readonly myaccountOptions: Locator[]

    constructor(page:Page){
        this.url = "https://ecommerce-playground.lambdatest.io";
        this.myAccountHeader = page.locator("//h2[.='My Account']");
        this.myOrders = page.locator("//h2[.='My Orders']");
        this.myAffiliateAccount = page.locator("//h2[.='My Affiliate Account']");
        //this.myaccountOptions[] = page.$$("(//div[@class='card-body text-center'])[1]//a");
    }

    async validateHomePageHeaders():Promise<boolean>{
        let flag:boolean=false;
        if(await this.myAccountHeader.isVisible() && await this.myOrders.isVisible() && await this.myAffiliateAccount.isVisible()){
            flag = true;
        }
        return flag;
    }

    async validateMyAccountOptions(page:Page){
        for(const element of await page.locator("(//div[@class='card-body text-center'])[1]//a").all()){
            console.log(await element.textContent());
        }
        
    }
}