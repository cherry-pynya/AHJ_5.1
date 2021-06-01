import puppetteer from 'puppeteer';

jest.setTimeout(60000);
describe(('manual test'), () => {
  let browser = null;
  let page = null;
  const url = 'http://localhost:8888';

  beforeAll(async () => {
    browser = await puppetteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Open page', async () => {
    await page.goto(url);
  });
  test('click to reveal', async () => {
    await page.goto(url);
    const button = await page.$('button');
    button.click().catch((e) => e);
    await page.waitForSelector('.popover-container');
  });
});
