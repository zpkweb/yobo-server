"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BFFService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const banner_1 = require("./banner");
const seller_1 = require("../user/seller");
const index_1 = require("../commodity/index");
const index_2 = require("../my/index");
const artworkOptions_1 = require("./artworkOptions");
let BFFService = class BFFService {
    async home(payload) {
        const banner = await this.bannerService.get();
        if (!banner.success) {
            return banner;
        }
        const gallerySeller = await this.sellerService.retrieveSellerAll({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        console.log("gallerySeller", JSON.stringify(gallerySeller));
        if (!gallerySeller.success) {
            return gallerySeller;
        }
        const searchCommodity = await this.commodityService.search({
            news: 'true',
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!searchCommodity.success) {
            return searchCommodity;
        }
        const commodityOption = await this.commodityService.commodityOptionsTypeRetrieveAll({
            type: 'theme',
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!commodityOption.success) {
            return commodityOption;
        }
        const commodityComment = await this.commodityService.commodityComment({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!commodityComment.success) {
            return commodityComment;
        }
        const hotSaleSeller = await this.sellerService.retrieveSellerAll({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!hotSaleSeller.success) {
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
        };
    }
    async buy(payload) {
        const commodity = await this.commodityService.find({
            locale: payload.locale,
            isLocale: true,
            commodityId: payload.commodityId
        });
        console.log("商品 简介", commodity);
        if (!commodity.success) {
            return commodity;
        }
        let seller = {
            data: {}
        };
        if (commodity.data.seller) {
            const findseller = await this.sellerService.find({
                sellerId: commodity.data.seller.sellerId
            });
            console.log("商家 其他作品", seller);
            if (!findseller.success) {
                return findseller;
            }
            seller = findseller;
        }
        const commoditySimilar = await this.commodityService.search({
            isLocale: true,
            pageSize: 4
        });
        console.log("类似作品", commoditySimilar);
        if (!commoditySimilar.success) {
            return commoditySimilar;
        }
        let browsingHistory = {
            data: []
        };
        if (payload.userId) {
            const findBrowsingHistory = await this.myService.findBrowsingHistory(payload.userId);
            console.log("最近浏览的作品", browsingHistory);
            if (!findBrowsingHistory.success) {
                return findBrowsingHistory;
            }
            browsingHistory = findBrowsingHistory;
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
        };
    }
    async artworkOptions(payload) {
        return await this.artworkOptionsService.get(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", banner_1.BannerService)
], BFFService.prototype, "bannerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", artworkOptions_1.ArtworkOptionsService)
], BFFService.prototype, "artworkOptionsService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], BFFService.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.CommodityService)
], BFFService.prototype, "commodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_2.MyService)
], BFFService.prototype, "myService", void 0);
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], BFFService.prototype, "host", void 0);
BFFService = __decorate([
    decorator_1.Provide()
], BFFService);
exports.BFFService = BFFService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHFDQUF5QztBQUN6QywyQ0FBK0M7QUFDL0MsOENBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyxxREFBeUQ7QUFHekQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQTJCckIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBRWhCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBR0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1lBQy9ELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUM7WUFDL0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQztZQUNyQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU87U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQzNELElBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3pCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBR0QsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1lBQ3pELElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUks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