import { Config, Inject, Provide } from "@midwayjs/decorator";
import { BannerService } from './banner';
import { SellerService } from '../user/seller';
import { CommodityService } from '../commodity';

@Provide()
export class BFFService {

  @Inject()
  bannerService: BannerService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  commodityService: CommodityService;

  @Config('host')
  host;

  async home(payload) {
    // banner轮播图
    const banner = await this.bannerService.get();
    if(!banner.success) {
      return banner;
    }

    // 您的线上画廊:搜索艺术家-画廊
    const gallerySeller = await this.sellerService.retrieveSellerAll({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    if(!gallerySeller.success) {
      return gallerySeller;
    }

    // 最新上线的艺术作品:搜索艺术品
    const searchCommodity = await this.commodityService.search({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    if(!searchCommodity.success) {
      return searchCommodity;
    }

    // 通过画作看世界:艺术品分类
    const commodityOption = await this.commodityService.commodityOptionsTypeRetrieveAll({
      type: 'theme',
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    })
    if(!commodityOption.success) {
      return commodityOption;
    }

    // 商品评论
    const commodityComment = await this.commodityService.commodityComment({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    if(!commodityComment.success) {
      return commodityComment;
    }

    // 我们热卖的艺术家
    const hotSaleSeller = await this.sellerService.retrieveSellerAll({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    if(!hotSaleSeller.success) {
      return hotSaleSeller;
    }


    return {
      success: true,
      code: 10009,
      data: {
        banner: banner.data,
        gallerySeller: gallerySeller.data,
        latestCommodity: searchCommodity.data,
        lookWorld: commodityOption.data,
        commentCommodity: commodityComment.data,
        hotSaleSeller: hotSaleSeller.data
      }
    }
  }
}
