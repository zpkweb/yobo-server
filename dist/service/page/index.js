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
const decorator_1 = require("@midwayjs/decorator");
const banner_1 = require("./banner");
let PageService = class PageService {
    async createBanner(payload) {
        return await this.pageBannerService.create(payload);
    }
    async updateBanner(payload) {
        return await this.pageBannerService.update(payload);
    }
    async getBannerAll() {
        return await this.pageBannerService.getAll();
    }
    async deleteBanner(bannerId) {
        return await this.pageBannerService.delete(bannerId);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", banner_1.PageBannerService)
], PageService.prototype, "pageBannerService", void 0);
PageService = __decorate([
    decorator_1.Provide()
], PageService);
exports.default = PageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9wYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHFDQUE2QztBQUc3QyxJQUFxQixXQUFXLEdBQWhDLE1BQXFCLFdBQVc7SUFLOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUTtRQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLGtCQUFNLEVBQUU7OEJBQ1UsMEJBQWlCO3NEQUFDO0FBSGxCLFdBQVc7SUFEL0IsbUJBQU8sRUFBRTtHQUNXLFdBQVcsQ0FxQi9CO2tCQXJCb0IsV0FBVyJ9