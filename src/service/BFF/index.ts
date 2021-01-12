import { Config, Inject, Provide } from "@midwayjs/decorator";
import { BannerService } from './banner';
import { SellerService } from '../user/seller';
import { CommodityService } from '../commodity';
import { MyService } from 'src/service/my';

@Provide()
export class BFFService {

  @Inject()
  bannerService: BannerService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  commodityService: CommodityService;

  @Inject()
  myService: MyService;

  @Config('host')
  host;

  /**
   * 首页
   *
   * @param {*} payload
   * @return {*}
   * @memberof BFFService
   */
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
      news: 'true',
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
  /**
   * 购买
   *
   * @param {*} payload
   * @memberof BFFService
   */
  async buy(payload) {
    // 商品 简介
    const commodity = await this.commodityService.find({
      locale: payload.locale,
      isLocale: true,
      commodityId: payload.commodityId
    });
    console.log("商品 简介", commodity)
    if(!commodity.success) {
      return commodity;
    }

    // 相框


    // 商家
    let seller:any = {
      data: []
    }
    // 其他作品
    // let sellerCommodity:any = {
    //   data: []
    // }
    if(commodity.data.seller) {
      const findseller = await this.sellerService.find({
        sellerId: commodity.data.seller.sellerId
      })
      console.log("商家 其他作品", seller)
      if(!findseller.success) {
        return findseller;
      }
      seller = findseller;

      // const sellerCommodity = await this.
    }



    // 类似作品
    const commoditySimilar = await this.commodityService.search({
      isLocale: true,
      pageSize: 4
    })
    console.log("类似作品", commoditySimilar)
    if(!commoditySimilar.success) {
      return commoditySimilar;
    }

    // 最近浏览的作品
    let browsingHistory:any = {
      data: []
    };
    if(payload.userId) {
      const findBrowsingHistory = await this.myService.findBrowsingHistory(payload.userId);
      console.log("最近浏览的作品", browsingHistory)
      if(!findBrowsingHistory.success) {
        return findBrowsingHistory;
      }
      browsingHistory = findBrowsingHistory
    }


    return {
      success: true,
      code: 10009,
      data: {
        commodity: commodity.data,
        commoditySimilar: commoditySimilar.data.list,
        seller: seller.data,
        browsingHistory: browsingHistory.data
      }
    }
  }
}
