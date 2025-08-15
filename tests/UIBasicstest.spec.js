const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser}) =>
    {
        const userName = page.locator('#username');
        const passWord = page.locator("[type='password']");
        const signIn = page.locator('#signInBtn');

        //chrome - plugins / cookies
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        //css, xpath selectors
        await userName.fill("rahulshetty");
        await passWord.fill("learning");
        await signIn.click();
        //webdriverwait if in selenium
        console.log(await page.locator("[style='display: block;']").textContent());
        await expect(page.locator("[style='display: block;']")).toContainText('Incorrect ');
        //fill also clears the existing content
        await userName.fill("");
        await passWord.fill("rahulshettyacademy");



    }
);

test('Page Playwright test', async ({page}) =>
    {
        await page.goto("https://google.com");
        //get title - assertion
        console.log (await page.title());
        await expect(page).toHaveTitle("Google");
    }
);