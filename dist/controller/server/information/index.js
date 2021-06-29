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
exports.adminInformatinController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/information/index");
let adminInformatinController = class adminInformatinController {
    async createInformation(createBody) {
        return await this.serviceInformation.createInformation(createBody);
    }
    async informationList(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
        const isTop = (Boolean(findParams.isTop) && findParams.isTop == 'true') ? true : false;
        const locale = findParams.locale ? findParams.locale : 'zh-cn';
        const data = await this.serviceInformation.informationList({
            news,
            isTop,
            pageSize,
            currentPage,
            isLocale: true,
            locale
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
    __metadata("design:type", index_1.ServiceInformation)
], adminInformatinController.prototype, "serviceInformation", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], adminInformatinController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Post('/', { summary: "创建资讯" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "createInformation", null);
__decorate([
    decorator_1.Get('/', { summary: "资讯列表" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "informationList", null);
adminInformatinController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller("/api/admin/information", { tagName: "后台管理-资讯" })
], adminInformatinController);
exports.adminInformatinController = adminInformatinController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvaW5mb3JtYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLDhEQUE0RDtBQUk1RCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVNwQyxLQUFLLENBQUMsaUJBQWlCLENBQVksVUFBVTtRQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFHRCxLQUFLLENBQUMsZUFBZSxDQUFhLFVBQVU7UUFFMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRixNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxHQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztZQUM3RCxJQUFJO1lBQ0osS0FBSztZQUNMLFFBQVE7WUFDUixXQUFXO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQztDQUlGLENBQUE7QUFwQ0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNXLDBCQUFrQjtxRUFBQztBQUd2QztJQURDLGtCQUFNLENBQUMsWUFBWSxDQUFDOzs2REFDVjtBQUdYO0lBREMsZ0JBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDTixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7a0VBRWpDO0FBR0Q7SUFEQyxlQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ1AsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dFQXFCaEM7QUFuQ1UseUJBQXlCO0lBRnJDLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO0dBQ2hELHlCQUF5QixDQXVDckM7QUF2Q1ksOERBQXlCIn0=