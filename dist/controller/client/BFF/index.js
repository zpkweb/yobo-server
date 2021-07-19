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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BFFController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/commodity/index");
const index_2 = require("../../../service/BFF/index");
let BFFController = class BFFController {
    async home(query) {
        return await this.bffService.home(query);
    }
    async commodity(query) {
        return await this.bffService.clientCommodity({
            ...query,
            locale: query.locale || 'zh-cn'
        });
    }
    async artworkOptions(locale) {
        return await this.bffService.artworkOptions({
            locale,
            isLocale: true
        });
    }
    async informationDetail(query) {
        return await this.bffService.informationDetail({
            informationId: query.informationId,
            isLocale: true,
            locale: query.locale || 'zh-cn'
        });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.CommodityService)
], BFFController.prototype, "commodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_2.BFFService)
], BFFController.prototype, "bffService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], BFFController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Get('/home', { summary: '首页' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "home", null);
__decorate([
    decorator_1.Get('/commodity', { summary: '购买' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "commodity", null);
__decorate([
    decorator_1.Get('/artwork/options', { summary: '艺术品选项' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "artworkOptions", null);
__decorate([
    decorator_1.Get('/informationDetail', { summary: "资讯详情" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "informationDetail", null);
BFFController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/BFF', { tagName: '整合前端接口' })
], BFFController);
exports.BFFController = BFFController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvQkZGL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtRjtBQUNuRiw0REFBeUQ7QUFFekQsc0RBQTZDO0FBSTdDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFheEIsS0FBSyxDQUFDLElBQUksQ0FBYSxLQUFLO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQsS0FBSyxDQUFDLFNBQVMsQ0FBYSxLQUFLO1FBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUMzQyxHQUFHLEtBQUs7WUFDUixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxPQUFPO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRCxLQUFLLENBQUMsY0FBYyxDQUFVLE1BQU07UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQzFDLE1BQU07WUFDTixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxLQUFLLENBQUMsaUJBQWlCLENBQWEsS0FBSztRQUV2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM3QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxPQUFPO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFBO0FBM0NDO0lBREMsa0JBQU0sRUFBRTs4QkFDUyx3QkFBZ0I7dURBQUM7QUFHbkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNHLGtCQUFVO2lEQUFDO0FBR3ZCO0lBREMsa0JBQU0sRUFBRTs7MENBQ0k7QUFJYjtJQURDLGVBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3lDQUVyQjtBQUlEO0lBREMsZUFBRyxDQUFDLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7OENBSzFCO0FBSUQ7SUFEQyxlQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkIsV0FBQSxpQkFBSyxFQUFFLENBQUE7Ozs7bURBSzVCO0FBSUQ7SUFEQyxlQUFHLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdEIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3NEQU9sQztBQTVDVSxhQUFhO0lBRnpCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLFVBQVUsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztHQUM5QixhQUFhLENBOEN6QjtBQTlDWSxzQ0FBYSJ9