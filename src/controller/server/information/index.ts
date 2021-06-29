import { Controller, Provide, Inject, Post, Body, ALL, Get, Query, Config } from "@midwayjs/decorator";
import { ServiceInformation } from "src/service/information"

@Provide()
@Controller("/api/admin/information", { tagName: "后台管理-资讯" })
export class adminInformatinController {

  @Inject()
  serviceInformation: ServiceInformation;

  @Config('pagination')
  pagination;

  @Post('/', { summary: "创建资讯" })
  async createInformation(@Body(ALL) createBody) {
    return await this.serviceInformation.createInformation(createBody)
  }

  @Get('/', { summary: "资讯列表" })
  async informationList(@Query(ALL) findParams) {

    const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
    const isTop = (Boolean(findParams.isTop) && findParams.isTop == 'true') ? true : false;
    const locale = findParams.locale ? findParams.locale : 'zh-cn';
    const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
    const data:any = await this.serviceInformation.informationList({
      news,
      isTop,
      pageSize,
      currentPage,
      isLocale,
      locale
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;

  }



}
