const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');
const chai = require('chai');
const expect = chai.expect

describe('Mobile Emulation page has correct attributes', function(){
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

    it('Mobile Emulation url includes /mobile-emulation', async function (){
        await driver.get('https://chromedriver.chromium.org/home')
        const moreButton = await driver.findElement(By.xpath('//*[text()="More"]'))
        await driver.wait(until.elementIsVisible(moreButton))
        await driver.actions({async:true}).move({origin:moreButton}).perform()
        const emulatorPage = await driver.findElement(By.xpath('//li[@class="VsJjtf oXBWEc"]//a[text()="Mobile Emulation"]'));
        await driver.wait(until.elementIsVisible(emulatorPage))
        await emulatorPage.click()
        const emulatorPageUrl =  await driver.getCurrentUrl();
        expect(emulatorPageUrl).to.include('/mobile-emulation')
        
    })
})