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
exports.AdminCommodityController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/commodity/index");
let AdminCommodityController = class AdminCommodityController {
    async createCommodity(createBody) {
        return await this.commodityService.create(createBody);
    }
    async find(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const data = await this.commodityService.find({
            ...findParams,
            pageSize: pageSize,
            currentPage: currentPage,
            isLocale: true
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async edit(commodityId) {
        const data = await this.commodityService.edit(commodityId);
        return data;
    }
    async findAll(findAllParams) {
        const pageSize = Number(findAllParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findAllParams.currentPage) || this.pagination.currentPage;
        const data = await this.commodityService.findAll({
            ...findAllParams,
            pageSize: pageSize,
            currentPage: currentPage,
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async search(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const data = await this.commodityService.search({
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
    async searchs(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const data = await this.commodityService.serverSearch({
            ...searchParams,
            isLocale: true,
            locale: searchParams.locale || 'zh-cn',
            pageSize: pageSize,
            currentPage: currentPage,
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async delete(commodityId) {
        return await this.commodityService.delete(commodityId);
    }
    async updateCommodity(updateBody) {
        return await this.commodityService.update(updateBody);
    }
    async createOptions(type, optionsBody) {
        return await this.commodityService.createOptions({ type, options: optionsBody });
    }
    async retrieveOptions(param) {
        return await this.commodityService.retrieveOptions({
            ...param,
            isLocale: true
        });
    }
    async retrieveOption(type) {
        return await this.commodityService.retrieveOptionAll({ type });
    }
    async retrieveOptionId(param) {
        return await this.commodityService.retrieveOptionId({
            type: param.type,
            id: param.id
        });
    }
    async updateOptions(type, optionsBody) {
        return await this.commodityService.updateOptions({
            type,
            id: optionsBody.id,
            img: optionsBody.img,
            zhcn: optionsBody['zh-cn'],
            enus: optionsBody['en-us'],
            jajp: optionsBody['ja-jp'],
            eses: optionsBody['es-es']
        });
    }
    async deleteOptions(type, optionsBody) {
        return await this.commodityService.deleteOptions({ type, ...optionsBody });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.CommodityService)
], AdminCommodityController.prototype, "commodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], AdminCommodityController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], AdminCommodityController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Post('/create', { summary: '添加商品' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "createCommodity", null);
__decorate([
    decorator_1.Get('/', { summary: '查找商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "find", null);
__decorate([
    decorator_1.Get('/edit', { summary: '编辑商品' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "edit", null);
__decorate([
    decorator_1.Get('/all', { summary: '查询所有商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "findAll", null);
__decorate([
    decorator_1.Get('/search', { summary: '搜索' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "search", null);
__decorate([
    decorator_1.Get('/searchs', { summary: '搜索' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "searchs", null);
__decorate([
    decorator_1.Post('/delete', { summary: '删除商品' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "delete", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新商品' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "updateCommodity", null);
__decorate([
    decorator_1.Post('/create/:type', { summary: '添加商品选项' }),
    __param(0, decorator_1.Param()), __param(1, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "createOptions", null);
__decorate([
    decorator_1.Get('/options', { summary: '查询所有商品选项' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "retrieveOptions", null);
__decorate([
    decorator_1.Get('/retrieve/:type', { summary: '查找商品选项' }),
    __param(0, decorator_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "retrieveOption", null);
__decorate([
    decorator_1.Get('/retrieve/:type/:id', { summary: '查找商品选项' }),
    __param(0, decorator_1.Param(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "retrieveOptionId", null);
__decorate([
    decorator_1.Post('/update/:type', { summary: '更新商品选项' }),
    __param(0, decorator_1.Param()), __param(1, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "updateOptions", null);
__decorate([
    decorator_1.Post('/delete/:type', { summary: '删除商品选项' }),
    __param(0, decorator_1.Param()), __param(1, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "deleteOptions", null);
AdminCommodityController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/commodity', { tagName: '后台管理-商品' })
], AdminCommodityController);
exports.AdminCommodityController = AdminCommodityController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL2NvbW1vZGl0eS9jb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThHO0FBQzlHLDREQUF5RDtBQUt6RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQWFuQyxLQUFLLENBQUMsZUFBZSxDQUFZLFVBQVU7UUFDekMsT0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFJLENBQWEsVUFBVTtRQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ2hELEdBQUcsVUFBVTtZQUNiLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFJLENBQVUsV0FBVztRQUU3QixNQUFNLElBQUksR0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSUQsS0FBSyxDQUFDLE9BQU8sQ0FBYSxhQUFhO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDNUUsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyRixNQUFNLElBQUksR0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7WUFDcEQsR0FBRyxhQUFhO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsTUFBTSxDQUFhLFlBQVk7UUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMzRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3BGLE1BQU0sSUFBSSxHQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztZQUNsRCxHQUFHLFlBQVk7WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsS0FBSyxDQUFDLE9BQU8sQ0FBYSxZQUFZO1FBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDM0UsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwRixNQUFNLElBQUksR0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7WUFDeEQsR0FBRyxZQUFZO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sSUFBSSxPQUFPO1lBQ3RDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPRCxLQUFLLENBQUMsTUFBTSxDQUFTLFdBQVc7UUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUlELEtBQUssQ0FBQyxlQUFlLENBQVksVUFBVTtRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBTUQsS0FBSyxDQUFDLGFBQWEsQ0FBVSxJQUFJLEVBQWEsV0FBVztRQUN2RCxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBSUQsS0FBSyxDQUFDLGVBQWUsQ0FBYSxLQUFLO1FBQ3JDLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1lBQ2pELEdBQUcsS0FBSztZQUNSLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssQ0FBQyxjQUFjLENBQVUsSUFBSTtRQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBSUQsS0FBSyxDQUFDLGdCQUFnQixDQUFhLEtBQUs7UUFDdEMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELEtBQUssQ0FBQyxhQUFhLENBQVUsSUFBSSxFQUFhLFdBQVc7UUFDdkQsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDL0MsSUFBSTtZQUNKLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtZQUNsQixHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUc7WUFDcEIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhLENBQVUsSUFBSSxFQUFhLFdBQVc7UUFDdkQsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Q0FFRixDQUFBO0FBbktDO0lBREMsa0JBQU0sRUFBRTs4QkFDUyx3QkFBZ0I7a0VBQUM7QUFHbkM7SUFEQyxrQkFBTSxFQUFFOztxREFDSTtBQUdiO0lBREMsa0JBQU0sQ0FBQyxZQUFZLENBQUM7OzREQUNWO0FBSVg7SUFEQyxnQkFBSSxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNWLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzsrREFFL0I7QUFJRDtJQURDLGVBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDZCxXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7b0RBY3JCO0FBSUQ7SUFEQyxlQUFHLENBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ2xCLFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7O29EQUtsQjtBQUlEO0lBREMsZUFBRyxDQUFDLE1BQU0sRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNoQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7dURBYXhCO0FBS0Q7SUFEQyxlQUFHLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDO0lBQ2hCLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztzREFhdkI7QUFHRDtJQURDLGVBQUcsQ0FBQyxVQUFVLEVBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUM7SUFDaEIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3VEQWV4QjtBQU9EO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDbkIsV0FBQSxnQkFBSSxFQUFFLENBQUE7Ozs7c0RBRW5CO0FBSUQ7SUFEQyxnQkFBSSxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNWLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzsrREFFL0I7QUFNRDtJQURDLGdCQUFJLENBQUMsZUFBZSxFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3BCLFdBQUEsaUJBQUssRUFBRSxDQUFBLEVBQVEsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7OzZEQUU1QztBQUlEO0lBREMsZUFBRyxDQUFDLFVBQVUsRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztJQUNkLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzsrREFLaEM7QUFJRDtJQURDLGVBQUcsQ0FBQyxpQkFBaUIsRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNwQixXQUFBLGlCQUFLLEVBQUUsQ0FBQTs7Ozs4REFFNUI7QUFJRDtJQURDLGVBQUcsQ0FBQyxxQkFBcUIsRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUN0QixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7Z0VBS2pDO0FBTUQ7SUFEQyxnQkFBSSxDQUFDLGVBQWUsRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNwQixXQUFBLGlCQUFLLEVBQUUsQ0FBQSxFQUFRLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozs2REFVNUM7QUFJRDtJQURDLGdCQUFJLENBQUMsZUFBZSxFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3BCLFdBQUEsaUJBQUssRUFBRSxDQUFBLEVBQVEsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7OzZEQUU1QztBQXBLVSx3QkFBd0I7SUFGcEMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsc0JBQXNCLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7R0FDMUMsd0JBQXdCLENBc0twQztBQXRLWSw0REFBd0IifQ==