const {Builder, By, until} = require('selenium-webdriver');
/* const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver'); */
const chai = require('chai');
const expect = chai.expect

describe('Checking title for pages -  Main and Chrome Extensions', function(){
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    })
    afterEach(async function(){
        await driver.close();
    })
    after(async function(){
        await driver.quit();
    })

    it('Main page title is changing after swithing pages', async function (){
        await driver.get('https://chromedriver.chromium.org/home')
        let homePageTitle = await driver.getTitle();
        expect(homePageTitle).to.equal('ChromeDriver - WebDriver for Chrome');
        let chromeExtentionButton = await driver.findElement(By.css('.jgXgSe.HlqNPb[href="/extensions"]'));
        await driver.wait(until.elementIsVisible(chromeExtentionButton))
        await chromeExtentionButton.click()
        let extentionPageTitle = await driver.getTitle()
        expect(extentionPageTitle).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
        await driver.sleep()
    })
})