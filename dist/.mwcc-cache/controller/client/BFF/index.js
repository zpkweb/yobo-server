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
    async buy(query) {
        return await this.bffService.buy(query);
    }
    async artworkOptions(locale) {
        return await this.bffService.artworkOptions({
            locale,
            isLocale: true
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
    decorator_1.Get('/buy', { summary: '购买' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "buy", null);
__decorate([
    decorator_1.Get('/artwork/options', { summary: '艺术品选项' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BFFController.prototype, "artworkOptions", null);
BFFController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api', { tagName: '整合前端接口' })
], BFFController);
exports.BFFController = BFFController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvQkZGL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtRjtBQUNuRiw0REFBeUQ7QUFFekQsc0RBQTZDO0FBSTdDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFheEIsS0FBSyxDQUFDLElBQUksQ0FBYSxLQUFLO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQsS0FBSyxDQUFDLEdBQUcsQ0FBYSxLQUFLO1FBQ3pCLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBSUQsS0FBSyxDQUFDLGNBQWMsQ0FBVSxNQUFNO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUMxQyxNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQTVCQztJQURDLGtCQUFNLEVBQUU7OEJBQ1Msd0JBQWdCO3VEQUFDO0FBR25DO0lBREMsa0JBQU0sRUFBRTs4QkFDRyxrQkFBVTtpREFBQztBQUd2QjtJQURDLGtCQUFNLEVBQUU7OzBDQUNJO0FBSWI7SUFEQyxlQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25CLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozt5Q0FFckI7QUFJRDtJQURDLGVBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3dDQUVwQjtBQUlEO0lBREMsZUFBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7O21EQUs1QjtBQTlCVSxhQUFhO0lBRnpCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztHQUMxQixhQUFhLENBK0J6QjtBQS9CWSxzQ0FBYSJ9