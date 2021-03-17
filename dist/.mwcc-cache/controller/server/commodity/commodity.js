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
    async finEdit(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const data = await this.commodityService.find({
            ...findParams,
            pageSize: pageSize,
            currentPage: currentPage,
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
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
    async delete(deleteBody) {
        return await this.commodityService.delete({
            commodityId: deleteBody.commodityId
        });
    }
    async updateCommodity(updateBody) {
        return await this.commodityService.update(updateBody);
    }
    async createOptions(type, optionsBody) {
        return await this.commodityService.createOptions({ type, options: optionsBody });
    }
    async retrieveOption(type) {
        return await this.commodityService.retrieveOptionAll({ type });
    }
    async updateOptions(type, optionsBody) {
        return await this.commodityService.updateOptions({ type, ...optionsBody });
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
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "finEdit", null);
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
    decorator_1.Post('/delete', { summary: '删除商品' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
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
    decorator_1.Get('/retrieve/:type', { summary: '查找商品选项' }),
    __param(0, decorator_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCommodityController.prototype, "retrieveOption", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL2NvbW1vZGl0eS9jb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThHO0FBQzlHLDREQUF5RDtBQUt6RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQWFuQyxLQUFLLENBQUMsZUFBZSxDQUFZLFVBQVU7UUFDekMsT0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFJLENBQWEsVUFBVTtRQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ2hELEdBQUcsVUFBVTtZQUNiLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlELEtBQUssQ0FBQyxPQUFPLENBQWEsVUFB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