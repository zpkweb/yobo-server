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
const theme_1 = require("../commodity/options/theme");
let BFFService = class BFFService {
    async home(payload) {
        const banner = await this.bannerService.get();
        if (!banner.success) {
            return banner;
        }
        const gallerySeller = await this.sellerService.retrieveSellerHome({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!gallerySeller.success) {
            return gallerySeller;
        }
        const latestCommodity = await this.commodityService.findPhoto({
            news: true,
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!latestCommodity.success) {
            return latestCommodity;
        }
        const commodityOption = await this.commodityOptionsThemeService.retrieveSize({
            pageSize: payload.pageSize || 6,
            currentPage: payload.currentPage || 1,
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
                gallerySeller: gallerySeller.data.list,
                latestCommodity: latestCommodity.data.list,
                lookWorld: commodityOption.data,
                commentCommodity: commodityComment.data,
                hotSaleSeller: hotSaleSeller.data.list
            }
        };
    }
    async buy(payload) {
        const commodity = await this.commodityService.buy({
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
        let browsingHistory = {
            data: []
        };
        if (payload.userId) {
            const findBrowsingHistory = await this.myService.findBrowsingHistory(payload);
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
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityOptionsThemeService)
], BFFService.prototype, "commodityOptionsThemeService", void 0);
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], BFFService.prototype, "host", void 0);
BFFService = __decorate([
    decorator_1.Provide()
], BFFService);
exports.BFFService = BFFService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHFDQUF5QztBQUN6QywyQ0FBK0M7QUFDL0MsOENBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyxxREFBeUQ7QUFDekQsc0RBQWtGO0FBSWxGLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUE4QnJCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztRQUVoQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUdELE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3pCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBR0QsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQzVELElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMvQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxJ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