import { Inject, Provide } from "@midwayjs/decorator";
import PuppeteerSellerService from './seller'

@Provide()
export default class PuppeteerService {

  @Inject()
  puppeteerSellerService: PuppeteerSellerService;

  async addSeller(payload) {
    const add =  await this.puppeteerSellerService.add(payload)
    return add;
  }
}
