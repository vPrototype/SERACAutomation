import { config } from '../config/globalSettings';
import { expect, Page, Locator } from "@playwright/test";

export class HomePage {

  //Aquí van los localizadores 
  private readonly headerHome: Locator;
  private readonly userModule: Locator;
  private readonly userSubModuleUser: Locator;
  private readonly userSubModuleProfile: Locator;
  private readonly subModuleUserTittle: Locator;
  private readonly subModuleProfileTittle: Locator;
  

  //Aquí van las url del .env
  private readonly seracHome: string;
  private readonly userSubModuleUserUrl: string;
  private readonly profileSubModuleUserUrl: string;
  

  constructor(private readonly page: Page) {

    //llamando desde el globalSettings
    this.seracHome = config.urls.Home_Url;
    this.userSubModuleUserUrl = config.urls.UserModule_SubUser_Url;
    this.profileSubModuleUserUrl = config.urls.UserModule_SubProfile_Url;

    //selectores
    this.headerHome = page.locator("#header-user-info");
    this.userModule = page.getByRole("listitem").filter({ hasText: "Usuarios" });
    this.userSubModuleUser = page.getByRole("link", { name: "Usuarios" });
    this.userSubModuleProfile = page.getByRole('link', { name: 'Perfiles' });
    this.subModuleUserTittle = page.locator("div").filter({ hasText: /^Usuarios$/ });
    this.subModuleProfileTittle = page.locator('div').filter({ hasText: /^Perfiles$/ })
    
  }

  async validateSeracHomeHeader() {

    await expect(this.page).toHaveURL(this.seracHome);
    await expect(this.headerHome).toBeVisible({ timeout:5000 });

  }

  async goToModuleUserSubmoduleUser(){

    await this.userModule.click();
    await this.userSubModuleUser.click();
    await expect(this.page).toHaveURL(this.userSubModuleUserUrl);
    await expect(this.subModuleUserTittle).toBeVisible({ timeout:5000 });
    
  }

  async goToModuleUserSubmoduleProfile(){

    await this.userModule.click();
    await this.userSubModuleProfile.click();
    await expect(this.page).toHaveURL(this.profileSubModuleUserUrl);
    await expect(this.subModuleProfileTittle).toBeVisible({ timeout: 5000 });
    
  }
}
