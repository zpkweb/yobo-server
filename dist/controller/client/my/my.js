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
            isLocale: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvbXkvbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLHFEQUEyQztBQUkzQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBVXZCLEtBQUssQ0FBQyxTQUFTLENBQVksVUFBVTtRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQVUsTUFBTTtRQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQWEsV0FBVztRQUNyQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTLENBQVksVUFBVTtRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUlELEtBQUssQ0FBQyxZQUFZLENBQVMsTUFBTTtRQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQU1ELEtBQUssQ0FBQyxZQUFZLENBQVksYUFBYTtRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUlELEtBQUssQ0FBQyxZQUFZLENBQWEsS0FBSztRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDdkMsR0FBRyxLQUFLO1lBQ1IsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsS0FBSyxDQUFDLFlBQVksQ0FBYSxjQUFjO1FBQzNDLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSUQsS0FBSyxDQUFDLFlBQVksQ0FBWSxhQUFhO1FBQ3pDLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBSUQsS0FBSyxDQUFDLGVBQWUsQ0FBUyxNQUFNO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBT0QsS0FBSyxDQUFDLGtCQUFrQixDQUFZLG1CQUFtQjtRQUNyRCxPQUFRLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztZQUM5QyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtZQUNsQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDNUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFdBQVc7WUFDNUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLGFBQWEsSUFBSSxFQUFFO1NBQ3ZELENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxLQUFLLENBQUMsbUJBQW1CLENBQWEsU0FBUztRQUM3QyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUN0RCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDakUsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzFFLElBQUksSUFBUSxDQUFDO1FBRWIsSUFBSSxHQUFJLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztZQUMvQyxHQUFHLEtBQUs7WUFDUixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsY0FBYztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUVkLENBQUM7SUFPRCxLQUFLLENBQUMsU0FBUztRQUNiLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFJRCxLQUFLLENBQUMsZ0JBQWdCO1FBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakQsQ0FBQztDQUVGLENBQUE7QUExSEM7SUFEQyxrQkFBTSxFQUFFOzhCQUNFLGlCQUFTOytDQUFDO0FBR3JCO0lBREMsa0JBQU0sQ0FBQyxZQUFZLENBQUM7O2dEQUNWO0FBSVg7SUFEQyxnQkFBSSxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQztJQUNyQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NkNBRXpCO0FBSUQ7SUFEQyxlQUFHLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDO0lBQ3BCLFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7OzZDQUV2QjtBQUlEO0lBREMsZUFBRyxDQUFDLGFBQWEsRUFBQyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsQ0FBQztJQUMzQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NkNBRTFCO0FBSUQ7SUFEQyxnQkFBSSxDQUFDLGFBQWEsRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztJQUN4QixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NkNBRXpCO0FBSUQ7SUFEQyxnQkFBSSxDQUFDLGdCQUFnQixFQUFDLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxDQUFDO0lBQzFCLFdBQUEsZ0JBQUksRUFBRSxDQUFBOzs7O2dEQUV6QjtBQU1EO0lBREMsZ0JBQUksQ0FBQyxZQUFZLEVBQUMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLENBQUM7SUFDcEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dEQUU1QjtBQUlEO0lBREMsZUFBRyxDQUFDLFlBQVksRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztJQUNuQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7Z0RBSzdCO0FBSUQ7SUFEQyxlQUFHLENBQUMsZ0JBQWdCLEVBQUMsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLENBQUM7SUFDM0IsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dEQUU3QjtBQUlEO0lBREMsZ0JBQUksQ0FBQyxnQkFBZ0IsRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztJQUN4QixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7Z0RBRTVCO0FBSUQ7SUFEQyxnQkFBSSxDQUFDLG1CQUFtQixFQUFDLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxDQUFDO0lBQzFCLFdBQUEsZ0JBQUksRUFBRSxDQUFBOzs7O21EQUU1QjtBQU9EO0lBREMsZ0JBQUksQ0FBQyxrQkFBa0IsRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztJQUNwQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7c0RBT2xDO0FBSUQ7SUFEQyxlQUFHLENBQUMsa0JBQWtCLEVBQUMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLENBQUM7SUFDbEIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3VEQW1CcEM7QUFPRDtJQURDLGVBQUcsQ0FBQyxRQUFRLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7Ozs7NkNBR2hDO0FBSUQ7SUFEQyxlQUFHLENBQUMsZUFBZSxFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDOzs7O29EQUd4QztBQTNIVSxZQUFZO0lBRnhCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztHQUM3QixZQUFZLENBNkh4QjtBQTdIWSxvQ0FBWSJ9