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
        const gallerySeller = await this.commodityService.choiceCommodity({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn',
            news: 'true'
        });
        if (gallerySeller.success) {
        }
        else {
            return gallerySeller;
        }
        const latestCommodity = await this.commodityService.findPhoto({
            news: 'true',
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
            news: 'true',
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
                latestCommodity: latestCommodity.data.list,
                lookWorld: commodityOption.data,
                commentCommodity: commodityComment.data,
                hotSaleSeller: hotSaleSeller.data.list
            }
        };
    }
    async clientCommodity(payload) {
        const commodity = await this.commodityService.clientCommodity({
            locale: payload.locale,
            isLocale: true,
            commodityId: payload.commodityId,
            pageSize: payload.pageSize || 5,
            currentPage: payload.currentPage || 1,
        });
        if (!commodity.success) {
            return commodity;
        }
        let browsingHistory = {
            data: []
        };
        if (payload.userId) {
            const findBrowsingHistory = await this.myService.findBrowsingHistory({
                userId: payload.userId,
                pageSize: payload.pageSize || 4,
                currentPage: payload.currentPage || 1,
            });
            if (!findBrowsingHistory.success) {
                return findBrowsingHistory;
            }
            browsingHistory = findBrowsingHistory;
            await this.myService.addBrowsingHistory(payload);
        }
        const { seller, ...commodityData } = commodity.data;
        return {
            success: true,
            code: 10009,
            data: {
                commodity: commodityData,
                seller: seller,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHFDQUF5QztBQUN6QywyQ0FBK0M7QUFDL0MsOENBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyxxREFBeUQ7QUFDekQsc0RBQWtGO0FBSWxGLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUE4QnJCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztRQUVoQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUdELE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztZQUNoRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPO1lBQ2pDLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxhQUFhLENBQUMsT0FBTyxFQUFFO1NBR3pCO2FBQUk7WUFDSCxPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUdELE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUM1RCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUM7WUFDL0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElB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