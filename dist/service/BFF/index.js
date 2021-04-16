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
        const commodityOption = await this.commodityService.retrieveOptionAll({
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
            pageSize: payload.pageSize || 5,
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
            if (!findseller.success) {
                return findseller;
            }
            seller = findseller;
        }
        const commoditySimilar = await this.commodityService.search({
            isLocale: true,
            pageSize: 4
        });
        if (!commoditySimilar.success) {
            return commoditySimilar;
        }
        let browsingHistory = {
            data: []
        };
        if (payload.userId) {
            const findBrowsingHistory = await this.myService.findBrowsingHistory(payload.userId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHFDQUF5QztBQUN6QywyQ0FBK0M7QUFDL0MsOENBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyxxREFBeUQ7QUFHekQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQTJCckIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBRWhCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBR0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1lBQy9ELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUM7WUFDL0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQztZQUNyQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU87U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDekIsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFHRCxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFN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