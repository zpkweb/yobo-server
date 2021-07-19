import { Controller, Provide, Inject, Post, Body, ALL, Get, Query, Config } from "@midwayjs/decorator";
import { ServiceInformation } from "src/service/information"

@Provide()
@Controller("/api/information", { tagName: "官网-资讯" })
export class informatinController {

  @Inject()
  serviceInformation: ServiceInformation;

  @Config('pagination')
  pagination;

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

  @Post('/video/comment', { summary: "视频评论" })
  async videoComment(@Body(ALL) createBody) {
    return await this.serviceInformation.videoComment(createBody)
  }

  @Post('/video/comment/reply', { summary: "视频评论回复" })
  async commentReply(@Body(ALL) createBody) {
    return await this.serviceInformation.commentReply(createBody)
  }

  @Post('/video/comment/reply/reply', { summary: "视频评论回复回复" })
  async replyReply(@Body(ALL) createBody) {
    return await this.serviceInformation.replyReply(createBody)
  }

  @Get('/video/comment', { summary: "视频评论列表" })
  async commentList(@Query(ALL) findParams) {

    const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
    const isTop = (Boolean(findParams.isTop) && findParams.isTop == 'true') ? true : false;
    const locale = findParams.locale ? findParams.locale : 'zh-cn';
    const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
    const videoId = findParams.videoId;
    const data:any = await this.serviceInformation.commentList({
      videoId,
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

  @Post('/video/comment/likes', { summary: "视频评论点赞" })
  async videoCommentLikes(@Body(ALL) createBody) {
    return await this.serviceInformation.likes(createBody)
  }

  @Post('/video/watchs', { summary: "视频观看" })
  async videoWatchs(@Body(ALL) createBody) {
    return await this.serviceInformation.watchs(createBody)
  }


}
