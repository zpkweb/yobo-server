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
exports.ServerSellerController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const register_1 = require("../../../service/user/register");
const seller_1 = require("../../../service/user/seller");
let ServerSellerController = class ServerSellerController {
    async find(findQuery) {
        return await this.sellerService.find(findQuery);
    }
    async update(registerBody) {
        return await this.sellerService.updateSeller(registerBody);
    }
    async setState(stateBody) {
        return await this.sellerService.updateSellerState(stateBody);
    }
    async search(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const data = await this.sellerService.search({
            ...searchParams,
            pageSize: pageSize,
            currentPage: currentPage,
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", register_1.UserRegisterService)
], ServerSellerController.prototype, "userRegisterService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], ServerSellerController.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], ServerSellerController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], ServerSellerController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], ServerSellerController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], ServerSellerController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('/', { summary: '获取艺术家详细信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServerSellerController.prototype, "find", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新艺术家信息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServerSellerController.prototype, "update", null);
__decorate([
    decorator_1.Post('/setState', { summary: '设置艺术家状态' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServerSellerController.prototype, "setState", null);
__decorate([
    decorator_1.Get('/search', { summary: '艺术家搜索' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServerSellerController.prototype, "search", null);
ServerSellerController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/seller', { tagName: '艺术家' })
], ServerSellerController);
exports.ServerSellerController = ServerSellerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvc2VsbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRztBQUUvRyw2REFBZ0U7QUFDaEUseURBQXdEO0FBSXhELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBOEJqQyxLQUFLLENBQUMsSUFBSSxDQUFhLFNBQVM7UUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFJRCxLQUFLLENBQUMsTUFBTSxDQUFZLFlBQVk7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFhRCxLQUFLLENBQUMsUUFBUSxDQUFZLFNBQVM7UUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUlELEtBQUssQ0FBQyxNQUFNLENBQWEsWUFBWTtRQUVuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxHQUFHLFlBQVk7WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBR0YsQ0FBQTtBQXZFQztJQURDLGtCQUFNLEVBQUU7OEJBQ1ksOEJBQW1CO21FQUFDO0FBR3pDO0lBREMsa0JBQU0sRUFBRTs4QkFDTSxzQkFBYTs2REFBQztBQUc3QjtJQURDLGtCQUFNLEVBQUU7O21EQUNJO0FBR2I7SUFEQyxrQkFBTSxFQUFFOzttREFDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7O3lEQUNKO0FBR1Y7SUFEQyxrQkFBTSxDQUFDLFlBQVksQ0FBQzs7MERBQ1Y7QUFZWDtJQURDLGVBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLENBQUM7SUFDbkIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2tEQUVyQjtBQUlEO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O29EQUV0QjtBQWFEO0lBREMsZ0JBQUksQ0FBQyxXQUFXLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3NEQUV4QjtBQUlEO0lBREMsZUFBRyxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQztJQUNuQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7b0RBY3ZCO0FBdkVVLHNCQUFzQjtJQUZsQyxtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxhQUFhLEVBQUMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUM7R0FDN0Isc0JBQXNCLENBMEVsQztBQTFFWSx3REFBc0IifQ==