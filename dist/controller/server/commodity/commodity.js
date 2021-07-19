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
    async edit(queryAll) {
        const data = await this.commodityService.edit(queryAll);
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
        const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
        const data = await this.commodityService.search({
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
    async searchs(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
        const data = await this.commodityService.ServiceSearch({
            ...searchParams,
            isLocale: true,
            news,
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
    __param(0, decorator_1.Query(decorator_1.ALL)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL2NvbW1vZGl0eS9jb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThHO0FBQzlHLDREQUF5RDtBQUt6RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQWFuQyxLQUFLLENBQUMsZUFBZSxDQUFZLFVBQVU7UUFDekMsT0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFJLENBQWEsVUFBVTtRQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3pFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ2hELEdBQUcsVUFBVTtZQUNiLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFJLENBQWEsUUFB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