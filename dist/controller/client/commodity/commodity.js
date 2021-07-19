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
exports.CommodityController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/commodity/index");
let CommodityController = class CommodityController {
    async find(findQuery) {
        const { pageSize, currentPage, ...query } = findQuery;
        const getPageSize = Number(pageSize) || this.pagination.pageSize;
        const getCurrentPage = Number(currentPage) || this.pagination.currentPage;
        let data;
        if (query && Object.keys(query).length) {
            data = await this.commodityService.find({
                ...findQuery,
                isLocale: true
            });
        }
        else {
            data = await this.commodityService.findAll({
                ...findQuery,
                pageSize: getPageSize,
                currentPage: getCurrentPage,
                isLocale: true
            });
        }
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async search(searchQuery) {
        const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
        const data = await this.commodityService.search({
            ...searchQuery,
            news,
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
    async searchTest(searchQuery) {
        const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
        const data = await this.commodityService.searchTest({
            ...searchQuery,
            news,
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
    async searchs(searchQuery) {
        const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
        const data = await this.commodityService.clientSearch({
            ...searchQuery,
            news,
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
    async options(type) {
        return await this.commodityService.retrieveOptionAll({
            type,
            isLocale: true
        });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.CommodityService)
], CommodityController.prototype, "commodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], CommodityController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], CommodityController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('', { summary: '查找商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "find", null);
__decorate([
    decorator_1.Get('/search', { summary: '搜索商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "search", null);
__decorate([
    decorator_1.Get('/searchTest', { summary: '测试搜索商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "searchTest", null);
__decorate([
    decorator_1.Get('/searchs', { summary: '搜索商品' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "searchs", null);
__decorate([
    decorator_1.Get('/options/:type', { summary: '查找商品选项' }),
    __param(0, decorator_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "options", null);
CommodityController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/commodity', { tagName: '前端-商品' })
], CommodityController);
exports.CommodityController = CommodityController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvY2xpZW50L2NvbW1vZGl0eS9jb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtHO0FBQ2xHLDREQUF5RDtBQUt6RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWE5QixLQUFLLENBQUMsSUFBSSxDQUFhLFNBQVM7UUFDOUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDdEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2pFLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMxRSxJQUFJLElBQVEsQ0FBQztRQUNiLElBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFDO1lBQ3BDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLEdBQUcsU0FBUztnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO2FBQUk7WUFDSCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxHQUFHLFNBQVM7Z0JBQ1osUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFB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