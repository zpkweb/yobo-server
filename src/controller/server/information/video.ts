import { Controller, Provide, Inject, Post, Body, ALL, Get, Query, Config, Param } from "@midwayjs/decorator";
import { ServiceInformation } from "src/service/information"

@Provide()
@Controller("/api/admin/information/video", { tagName: "后台管理-资讯视频" })
export class adminInformatinVideoController {

  @Inject()
  serviceInformation: ServiceInformation;

  @Config('pagination')
  pagination;

  @Post('/', { summary: "创建资讯视频" })
  async createInformation(@Body(ALL) createBody) {
    return await this.serviceInformation.createInformationVideo(createBody)
  }

  @Get('/', { summary: "资讯视频列表" })
  async informationList(@Query(ALL) findParams) {

    const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
    const locale = findParams.locale ? findParams.locale : 'zh-cn';
    const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
    const data:any = await this.serviceInformation.informationVideoList({
      news,
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

  @Get('/find', { summary: "编辑资讯视频" })
  async informationFind(@Query(ALL) query) {
    const locale = query.locale ? query.locale : 'zh-cn';
    const isLocale = (Boolean(query.isLocale) && query.isLocale == 'true') ? true : false;
    const data:any = await this.serviceInformation.informationVideoId({
      videoId: query.videoId,
      locale,
      isLocale,
    })
    return data;
  }





  @Post('/update', { summary: "更新资讯视频" })
  async updateInformation(@Body(ALL) updateBody) {
    return await this.serviceInformation.updateInformationVideo(updateBody)
  }

  @Get('/search', { summary: "搜索资讯视频" })
  async searchInformation(@Query(ALL) searchQuery) {
    const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
    const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
    const isTop = (Boolean(searchQuery.isTop) && searchQuery.isTop == 'true') ? true : false;
    const locale = searchQuery.locale ? searchQuery.locale : 'zh-cn';
    const isLocale = (Boolean(searchQuery.isLocale) && searchQuery.isLocale == 'true') ? true : false;
    const data:any = await this.serviceInformation.searchInformationVideo({
      title: searchQuery.title,
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

  @Get('/:videoId', { summary: "编辑资讯视频" })
  async informationFindVideoId(@Param() videoId) {
    const data:any = await this.serviceInformation.informationVideoId({
      videoId
    })
    return data;
  }





}
