
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays bot choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const choicesCont = await driver.findElement(By.id('choices'))
    const displayed = await choicesCont.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to Duo button displays player-duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const addToDuo = await driver.findElement(By.css(`.bot-btn`)).click()
    await driver.sleep(3000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})