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
exports.MyController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/my/index");
let MyController = class MyController {
    async setSeller(sellerBody) {
        return await this.myService.setSeller(sellerBody);
    }
    async getSeller(userId) {
        return await this.myService.getSeller(userId);
    }
    async hasSeller(sellerQuery) {
        return await this.myService.hasSeller(sellerQuery);
    }
    async delSeller(sellerBody) {
        return await this.myService.delSeller(sellerBody);
    }
    async delSellerAll(userId) {
        return await this.myService.delSellerAll(userId);
    }
    async setCommodity(commodityBody) {
        return await this.myService.setCommodity(commodityBody);
    }
    async getCommodity(query) {
        return await this.myService.getCommodity({
            ...query,
            isLocale: true,
            locale: query.locale || 'zh-cn'
        });
    }
    async hasCommodity(commodityQuery) {
        return await this.myService.hasCommodity(commodityQuery);
    }
    async delCommodity(commodityBody) {
        return await this.myService.delCommodity(commodityBody);
    }
    async delCommodityAll(userId) {
        return await this.myService.delCommodityAll(userId);
    }
    async addBrowsingHistory(browsingHistoryBody) {
        return await this.myService.addBrowsingHistory({
            userId: browsingHistoryBody.userId,
            userName: browsingHistoryBody.userName || '',
            commodityId: browsingHistoryBody.commodityId,
            commodityName: browsingHistoryBody.commodityName || ''
        });
    }
    async findBrowsingHistory(findQuery) {
        const { pageSize, currentPage, ...query } = findQuery;
        const getPageSize = Number(pageSize) || this.pagination.pageSize;
        const getCurrentPage = Number(currentPage) || this.pagination.currentPage;
        let data;
        data = await this.myService.findBrowsingHistory({
            ...query,
            pageSize: getPageSize,
            currentPage: getCurrentPage,
            isLocale: true
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async findOrder() {
        return await this.myService.findOrder();
    }
    async findShoppingCart() {
        return await this.myService.findShoppingCart();
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.MyService)
], MyController.prototype, "myService", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], MyController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Post('/seller', { summary: '添加我喜欢的商家' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "setSeller", null);
__decorate([
    decorator_1.Get('/seller', { summary: '查找我喜欢的商家' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "getSeller", null);
__decorate([
    decorator_1.Get('/seller/has', { summary: '查找我喜欢的商家是否存在' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "hasSeller", null);
__decorate([
    decorator_1.Post('/seller/del', { summary: '删除我喜欢的商家' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "delSeller", null);
__decorate([
    decorator_1.Post('/seller/delAll', { summary: '删除我喜欢的所有商家' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "delSellerAll", null);
__decorate([
    decorator_1.Post('/commodity', { summary: '添加我喜欢的商品' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "setCommodity", null);
__decorate([
    decorator_1.Get('/commodity', { summary: '查找我喜欢的商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "getCommodity", null);
__decorate([
    decorator_1.Get('/commodity/has', { summary: '查找我喜欢的商品是否存在' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "hasCommodity", null);
__decorate([
    decorator_1.Post('/commodity/del', { summary: '删除我喜欢的商品' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "delCommodity", null);
__decorate([
    decorator_1.Post('/commodity/delAll', { summary: '删除我喜欢的所有商品' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "delCommodityAll", null);
__decorate([
    decorator_1.Post('/browsingHistory', { summary: '添加我的浏览记录' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "addBrowsingHistory", null);
__decorate([
    decorator_1.Get('/browsingHistory', { summary: '查找我的浏览记录' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyController.prototype, "findBrowsingHistory", null);
__decorate([
    decorator_1.Get('/order', { summary: '查找我的订单' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyController.prototype, "findOrder", null);
__decorate([
    decorator_1.Get('/shoppingCart', { summary: '查找我的购物车' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyController.prototype, "findShoppingCart", null);
MyController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/my', { tagName: '前端-我的' })
], MyController);
exports.MyController = MyController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvbXkvbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLHFEQUEyQztBQUkzQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBVXZCLEtBQUssQ0FBQyxTQUFTLENBQVksVUFBVTtRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQVUsTUFBTTtRQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQWEsV0FBVztRQUNyQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQVksVUFBVTtRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlELEtBQUssQ0FBQyxZQUFZLENBQVMsTUFBTTtRQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQU1ELEtBQUssQ0FBQyxZQUFZLENBQVksYUFBYTtRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUlELEtBQUssQ0FBQyxZQUFZLENBQWEsS0FBSztRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFD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