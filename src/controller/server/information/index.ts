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

  @Get('/detail', { summary: "资讯详情" })
  async informationEdit(@Query(ALL) editQuery) {
    const data:any = await this.serviceInformation.informationDetail({
      informationId: editQuery.informationId
    })
    return data;
  }


  @Post('/update', { summary: "更新资讯" })
  async updateInformation(@Body(ALL) updateBody) {
    return await this.serviceInformation.updateInformation(updateBody)
  }

  @Get('/search', { summary: "搜索资讯" })
  async searchInformation(@Query(ALL) searchQuery) {
    const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
    const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
    const isTop = (Boolean(searchQuery.isTop) && searchQuery.isTop == 'true') ? true : false;
    const locale = searchQuery.locale ? searchQuery.locale : 'zh-cn';
    const isLocale = (Boolean(searchQuery.isLocale) && searchQuery.isLocale == 'true') ? true : false;
    const data:any = await this.serviceInformation.searchInformation({
      name: searchQuery.name,
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

  @Post('/delete', { summary: "删除资讯" })
  async deleteInformation(@Query(ALL) query) {
    return await this.serviceInformation.deleteInformation(query.informationId);
  }





}
