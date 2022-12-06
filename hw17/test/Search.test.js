const {Builder, By, until, Keys, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('/usr/local/bin/chromedriver');
const chai = require('chai');
const expect = chai.expect

describe('Search should include search keyword', function(){
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

    it('First result include search keyword', async function (){
        await driver.get('https://chromedriver.chromium.org/home')
        const searchButton = await driver.findElement(By.css('.Wdnjke.M9Bg4d'))
        await driver.wait(until.elementIsVisible(searchButton))
        await searchButton.click()
        const searchField = await driver.findElement(By.css('input.zHQkBf'))
        await driver.wait(until.elementIsVisible(searchField))
        await searchField.click()
        await searchField.sendKeys('driver' + Key.ENTER);
        await driver.sleep(1000)
        const searchResultList = await driver.findElement(By.css(".DLXGJd"))
        await driver.wait(until.elementIsVisible(searchResultList))
        const searchResultFirstResult = await driver.findElement(By.xpath("//*[@class=\"lZsZxe\"]//div[@class=\"vH0yjd\" and a[@data-position=\"1\"]]/div[1]/b")).getText()
        expect(searchResultFirstResult).to.be.equal('driver','first search result is equal to "driver" and bold')
    })
})