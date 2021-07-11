import { Config, Inject, Provide } from "@midwayjs/decorator";
import { BannerService } from './banner';
import { SellerService } from '../user/seller';
import { CommodityService } from '../commodity';
import { MyService } from 'src/service/my';
import { ArtworkOptionsService } from './artworkOptions';
import { CommodityOptionsThemeService } from 'src/service/commodity/options/theme'
import { ServiceInformation } from "src/service/information"

@Provide()
export class BFFService {

  @Inject()
  bannerService: BannerService;

  @Inject()
  artworkOptionsService: ArtworkOptionsService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  commodityService: CommodityService;

  @Inject()
  myService: MyService;

  @Inject()
  commodityOptionsThemeService: CommodityOptionsThemeService;

  @Inject()
  serviceInformation: ServiceInformation;

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

    // 您的线上画廊:搜索艺术品
    const gallerySeller = await this.commodityService.choiceCommodity({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn',
      news: 'true'
    });
    if(gallerySeller.success) {


    }else{
      return gallerySeller;
    }

    // 最新上线的艺术作品:搜索艺术品
    const latestCommodity = await this.commodityService.findPhoto({
      news: 'true',
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    if(!latestCommodity.success) {
      return latestCommodity;
    }

    // 通过画作看世界:艺术品分类
    const commodityOption = await this.commodityOptionsThemeService.retrieveSize({
      pageSize: payload.pageSize || 6,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    })
    if(!commodityOption.success) {
      return commodityOption;
    }

    // 商品评论
    // const commodityComment = await this.commodityService.commodityComment({
    //   pageSize: payload.pageSize || 4,
    //   currentPage: payload.currentPage || 1,
    //   isLocale: true,
    //   locale: payload.locale || 'zh-cn'
    // });
    // if(!commodityComment.success) {
    //   return commodityComment;
    // }

    // 资讯
    const information:any = await this.serviceInformation.informationList({
      news: true,
      isTop: false,
      pageSize: 5,
      currentPage: 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn'
    });
    // if(data.success){
    //   information.data.pageSize = payload.pageSize;
    //   information.data.currentPage = payload.currentPage;
    // }
    if(!information.success) {
      return information;
    }

    // 我们热卖的艺术家
    const hotSaleSeller = await this.sellerService.retrieveSellerAll({
      pageSize: payload.pageSize || 5,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      news: 'true',
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
        latestCommodity: latestCommodity.data.list,
        lookWorld: commodityOption.data,
        // commentCommodity: commodityComment.data,
        information: {
          show: '',
          list: information.data.list,
        },
        hotSaleSeller: hotSaleSeller.data.list
      }
    }
  }

  /**
   * 购买
   *
   * @param {*} payload
   * @memberof BFFService
   */
  async clientCommodity(payload) {
    // 商品 简介
    const commodity = await this.commodityService.clientCommodity({
      locale: payload.locale,
      isLocale: true,
      commodityId: payload.commodityId,
      pageSize: payload.pageSize || 5,
      currentPage: payload.currentPage || 1,
    });

    if(!commodity.success) {
      return commodity;
    }

    // 相框


    // 商家
    // let seller:any = {
    //   data: {}
    // }
    // 其他作品
    // let sellerCommodity:any = {
    //   data: []
    // }

    // 商品关联的商家
    // if(commodity.data.seller && commodity.data.seller.sellerId) {
    //   const findseller = await this.sellerService.findSellerMetadata({
    //     sellerId: commodity.data.seller.sellerId,
    //     locale: payload.locale
    //   })
    //   if(!findseller.success) {
    //     return findseller;
    //   }
    //   seller = findseller;

    //   // const sellerCommodity = await this.
    // }



    // 类似作品
    // const commoditySimilar = await this.commodityService.search({
    //   isLocale: true,
    //   pageSize: 4
    // })
    // if(!commoditySimilar.success) {
    //   return commoditySimilar;
    // }

    const commoditySimilar = await this.commodityService.findAll({
      pageSize: payload.pageSize || 4,
      currentPage: payload.currentPage || 1,
      isLocale: true,
      locale: payload.locale || 'zh-cn',
      news: 'true'
    });

    // 最近浏览的作品
    let browsingHistory:any = {
      data: []
    };

    if(payload.userId) {

      const findBrowsingHistory = await this.myService.findBrowsingHistory({
        locale: payload.locale,
        isLocale: true,
        userId: payload.userId,
        pageSize: payload.pageSize || 4,
        currentPage: payload.currentPage || 1,
      });
      console.log("findBrowsingHistory", findBrowsingHistory)
      // console.log("findBrowsingHistory", findBrowsingHistory)
      if(findBrowsingHistory.success) {
        browsingHistory = findBrowsingHistory.data.list;
      }else{
        browsingHistory = [];
      }

      // 添加浏览记录
      await this.myService.addBrowsingHistory(payload);

    }
    const { seller, ...commodityData } = commodity.data;
    console.log("commodity", {
      commodity: commodityData,
      // commoditySimilar: commoditySimilar.data.list,
      seller: seller,
      browsingHistory: browsingHistory,
      commoditySimilar: commoditySimilar.data.list,
    })
    return {
      success: true,
      code: 10009,
      data: {
        commodity: commodityData,
        // commoditySimilar: commoditySimilar.data.list,
        seller: seller,
        browsingHistory: browsingHistory,
        commoditySimilar: commoditySimilar.data.list,
      }
    }
  }

  /**
   * 艺术品选项
   *
   * @memberof BFFService
   */
  async artworkOptions(payload) {
    return await this.artworkOptionsService.get(payload);
  }


  // 资讯详情：
  // 视频：视频播放列表，正在观看人数， 视频累计观看人数
  // 资讯详情， 资讯评论数，评论列表，
  async informationDetail({
    informationId = '',
    isLocale = false,
    locale = 'zh-cn'
  } = {}) {
    // 资讯
    const information:any = await this.serviceInformation.informationDetail({
      informationId,
      isLocale,
      locale
    });

    // 资讯评论
      // news: true,
      // isTop: false,
      // pageSize: 5,
      // currentPage: 1,
      // isLocale: true,
      // locale: payload.locale || 'zh-cn'

    return {
      data: {
        information: information.data
      },
      success: true,
      code: 10009
    };
  }
}
