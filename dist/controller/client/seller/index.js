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
exports.ServiceSellerController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const register_1 = require("../../../service/user/register");
const seller_1 = require("../../../service/user/seller");
let ServiceSellerController = class ServiceSellerController {
    async find(queryAll) {
        return await this.sellerService.find({
            sellerId: queryAll.sellerId,
            locale: queryAll.locale || 'zh-cn',
            isLocale: true
        });
    }
    async choice(queryAll) {
        return await this.sellerService.choiceSeller({
            pageSize: queryAll.pageSize || 5,
            currentPage: queryAll.currentPage || 1,
            news: queryAll.news || 'true'
        });
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
        const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
        const data = await this.sellerService.search({
            ...searchParams,
            news,
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
], ServiceSellerController.prototype, "userRegisterService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], ServiceSellerController.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], ServiceSellerController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], ServiceSellerController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], ServiceSellerController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], ServiceSellerController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('/', { summary: '获取艺术家详细信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceSellerController.prototype, "find", null);
__decorate([
    decorator_1.Get('/choice', { summary: '精选艺术家' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceSellerController.prototype, "choice", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新艺术家信息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceSellerController.prototype, "update", null);
__decorate([
    decorator_1.Post('/setState', { summary: '设置艺术家状态' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceSellerController.prototype, "setState", null);
__decorate([
    decorator_1.Get('/search', { summary: '艺术家搜索' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceSellerController.prototype, "search", null);
ServiceSellerController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/seller', { tagName: '艺术家' })
], ServiceSellerController);
exports.ServiceSellerController = ServiceSellerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvc2VsbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRztBQUUvRyw2REFBZ0U7QUFDaEUseURBQXdEO0FBSXhELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBOEJsQyxLQUFLLENBQUMsSUFBSSxDQUFhLFFBQVE7UUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxPQUFPO1lBQ2xDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELEtBQUssQ0FBQyxNQUFNLENBQWEsUUFBUTtRQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDM0MsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQztZQUNoQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVcsSUFBSSxDQUFDO1lBQ3RDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLE1BQU07U0FDOUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlELEtBQUssQ0FBQyxNQUFNLENBQVksWUFBWTtRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWFELEtBQUssQ0FBQyxRQUFRLENBQVksU0FBUztRQUNqQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBSUQsS0FBSyxDQUFDLE1BQU0sQ0FBYSxZQUFZO1FBRW5DLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDM0UsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwRixNQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDeEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxHQUFHLFlBQVk7WUFDZixJQUFJO1lBQ0osUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUdGLENBQUE7QUF0RkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNZLDhCQUFtQjtvRUFBQztBQUd6QztJQURDLGtCQUFNLEVBQUU7OEJBQ00sc0JBQWE7OERBQUM7QUFHN0I7SUFEQyxrQkFBTSxFQUFFOztvREFDSTtBQUdiO0lBREMsa0JBQU0sRUFBRTs7b0RBQ0w7QUFHSjtJQURDLGtCQUFNLENBQUMsS0FBSyxDQUFDOzswREFDSjtBQUdWO0lBREMsa0JBQU0sQ0FBQyxZQUFZLENBQUM7OzJEQUNWO0FBWVg7SUFEQyxlQUFHLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxDQUFDO0lBQ25CLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzttREFNckI7QUFHRDtJQURDLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7SUFDbkIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3FEQU12QjtBQUlEO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3FEQUV0QjtBQWFEO0lBREMsZ0JBQUksQ0FBQyxXQUFXLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3VEQUV4QjtBQUlEO0lBREMsZUFBRyxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQztJQUNuQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cURBZ0J2QjtBQXRGVSx1QkFBdUI7SUFGbkMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsYUFBYSxFQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDO0dBQzdCLHVCQUF1QixDQXlGbkM7QUF6RlksMERBQXVCIn0=