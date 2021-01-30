import { Controller, Get, Inject, Provide, Query, ALL } from "@midwayjs/decorator";
import PuppeteerService from 'src/service/puppeteer'

@Provide()
@Controller('/api/admin/puppeteer')
export class AdminPuppeteerController {

  @Inject()
  puppeteerService: PuppeteerService;

  @Get('/addSeller')
  async puppeteer(@Query(ALL) query) {
    const data = await this.puppeteerService.addSeller(query);
    return data;
  }
}
