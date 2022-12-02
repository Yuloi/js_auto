const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');
const chai = require('chai');
const expect = chai.expect

describe('search', function(){
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    })
    after(async function(){
        //await driver.quit()
    })

    it('Mobile Emulation url includes /mobile-emulation', async function (){
        await driver.get('https://chromedriver.chromium.org/home')
        const searchButton = await driver.findElement(By.css('.Wdnjke.M9Bg4d'))
        await driver.wait(until.elementIsVisible(searchButton))
        await searchButton.click()
        const searchField = await driver.findElement(By.css('input.zHQkBf'))
        await driver.wait(until.elementIsVisible(searchField))
        await searchField.click()
        await searchField.sendKeys('driver')
    })
})