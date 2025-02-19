import { test } from '@playwright/test';
import { Helper } from '../utils/Helpers';
import { HomePage } from '../page-objects/HomePage';
import { config } from '../config/globalSettings';


test.beforeEach(async ({ page }) =>{

    const seracAdminUser = config.credentials.adminUser;
    const seracAdminPass = config.credentials.adminPass;
    const seracUrl = config.urls.Login_Url;

    const helper = new Helper(page)

    await page.goto(seracUrl);
    await helper.loginAdmin(seracAdminUser,seracAdminPass);

    await page.waitForLoadState('networkidle');

});

test('accessToHomePage', async ({ page }) => {


    const homePage = new HomePage(page)
    
    await homePage.validateSeracHomeHeader();
    
  });

  test('accessToUserModule_SubmoduleUser', async ({ page }) => {

    const homePage = new HomePage(page)
    
    await homePage.goToModuleUserSubmoduleUser();
    
  });

  test('accessToUserModule_SubmoduleProfile', async ({ page }) => {

    const homePage = new HomePage(page)
    
    await homePage.goToModuleUserSubmoduleProfile();
    
  });

  
