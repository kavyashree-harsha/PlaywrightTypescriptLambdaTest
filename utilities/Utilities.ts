import {Page} from '@playwright/test' 
export class Utilities{
    readonly page;
    constructor(page:Page){
        this.page = page;
    }

    async waitForPageDomLoad(page){
        await page.waitForLoadState("domcontentloaded");
    }

    async shortWait(page){
        await page.waitForTimeout(4000);
    }

}