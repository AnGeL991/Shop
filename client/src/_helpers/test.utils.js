import puppeteer from "puppeteer";

export let browser;
export let page;

export const before = (path) =>
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo:50
    });
    page = await browser.newPage();
    page.setViewport({
      width: 1024,
      height: 1000,
    });
    await page.goto(path);
  }, 60000);

export const close = () => afterEach(async () => await browser.close());

const selector = async (selector) => await page.waitForSelector(selector);

const inputSelector = async (name, value) => {
  await page.click(`[name='${name}']`);
  await page.type(`[name='${name}']`, value);
};

const action = async (location, message) => {
  const action = await page.$eval(location, (e) => e.innerHTML);
  expect(action).toBe(message);
};

export const actions = { selector, inputSelector, action, };
