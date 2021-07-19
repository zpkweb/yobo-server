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
const index_3 = require("../information/index");
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
        const information = await this.serviceInformation.informationList({
            news: true,
            isTop: false,
            pageSize: 5,
            currentPage: 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn'
        });
        if (!information.success) {
            return information;
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
                information: {
                    show: '',
                    list: information.data.list,
                },
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
        const commoditySimilar = await this.commodityService.findAll({
            pageSize: payload.pageSize || 4,
            currentPage: payload.currentPage || 1,
            isLocale: true,
            locale: payload.locale || 'zh-cn',
            news: 'true'
        });
        let browsingHistory = {
            data: []
        };
        if (payload.userId) {
            const findBrowsingHistory = await this.myService.findBrowsingHistory({
                locale: payload.locale,
                isLocale: true,
                userId: payload.userId,
                pageSize: payload.pageSize || 4,
                currentPage: payload.currentPage || 1,
            });
            if (findBrowsingHistory.success) {
                browsingHistory = findBrowsingHistory.data.list;
            }
            else {
                browsingHistory = [];
            }
            await this.myService.addBrowsingHistory(payload);
        }
        const { seller, ...commodityData } = commodity.data;
        return {
            success: true,
            code: 10009,
            data: {
                commodity: commodityData,
                seller: seller,
                browsingHistory: browsingHistory,
                commoditySimilar: commoditySimilar.data.list,
            }
        };
    }
    async artworkOptions(payload) {
        return await this.artworkOptionsService.get(payload);
    }
    async informationDetail({ informationId = '', isLocale = false, locale = 'zh-cn' } = {}) {
        const information = await this.serviceInformation.informationDetail({
            informationId,
            isLocale,
            locale
        });
        return {
            data: {
                information: information.data
            },
            success: true,
            code: 10009
        };
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
    decorator_1.Inject(),
    __metadata("design:type", index_3.ServiceInformation)
], BFFService.prototype, "serviceInformation", void 0);
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], BFFService.prototype, "host", void 0);
BFFService = __decorate([
    decorator_1.Provide()
], BFFService);
exports.BFFService = BFFService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHFDQUF5QztBQUN6QywyQ0FBK0M7QUFDL0MsOENBQWdEO0FBQ2hELHVDQUEyQztBQUMzQyxxREFBeUQ7QUFDekQsc0RBQWtGO0FBQ2xGLGdEQUE0RDtBQUc1RCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBaUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87UUFFaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlDLElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFHRCxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7WUFDaEUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMvQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTztZQUNqQyxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztRQUNILElBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRTtTQUd6QjthQUFJO1lBQ0gsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFHRCxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDNUQsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxPQUFP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