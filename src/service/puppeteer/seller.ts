import { Provide } from "@midwayjs/decorator";
// import  * as puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

@Provide()
export default class PuppeteerSellerService {
  async add(payload) {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(`http://www.xinyiparis.cn/zh/artist/${payload.artist}`);
    await page.waitForTimeout(5000);

    browser.close();
    return {}
  }
}
