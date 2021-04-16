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
exports.AdminUserController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../../../service/user/user");
let AdminUserController = class AdminUserController {
    async removeUser(userId) {
        return await this.userService.remove(userId);
    }
    async updateUser(updateBody) {
        return await this.userService.update(updateBody);
    }
    async findUser(findQuery) {
        return await this.userService.find({
            type: findQuery.type,
            userId: findQuery.userId
        });
    }
    async searchUser(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const data = await this.userService.search({
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
    async deleteUserIdentity(identityDeleteQuery) {
        return await this.userService.deleteUserIdentity(identityDeleteQuery);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], AdminUserController.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], AdminUserController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AdminUserController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AdminUserController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], AdminUserController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('/remove', { summary: '删除用户' }),
    decorator_1.Get('/delete', { summary: '删除用户' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "removeUser", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新用户' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "updateUser", null);
__decorate([
    decorator_1.Get('/', { summary: '查找用户' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "findUser", null);
__decorate([
    decorator_1.Get('/search', { summary: '搜索用户' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "searchUser", null);
__decorate([
    decorator_1.Get('/identity/delete', { summary: '删除用户身份' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "deleteUserIdentity", null);
AdminUserController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/user', { tagName: '后台管理-用户' })
], AdminUserController);
exports.AdminUserController = AdminUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL3NlcnZlci91c2VyL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStHO0FBRS9HLHFEQUFtRDtBQUluRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQW9COUIsS0FBSyxDQUFDLFVBQVUsQ0FBVSxNQUFNO1FBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsS0FBSyxDQUFDLFVBQVUsQ0FBWSxVQUFVO1FBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsS0FBSyxDQUFDLFFBQVEsQ0FBYSxTQUFTO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxLQUFLLENBQUMsVUFBVSxDQUFhLFlBQVk7UUFJdkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMzRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3BGLE1BQU0sSUFBSSxHQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0MsR0FBRyxZQUFZO1lBQ2YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUlELEtBQUssQ0FBQyxrQkFBa0IsQ0FBYSxtQkFBbUI7UUFDdEQsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBRUYsQ0FBQTtBQS9EQztJQURDLGtCQUFNLEVBQUU7OEJBQ0ksa0JBQVc7d0RBQUM7QUFHekI7SUFEQyxrQkFBTSxFQUFFOztnREFDSTtBQUdiO0lBREMsa0JBQU0sRUFBRTs7Z0RBQ0w7QUFHSjtJQURDLGtCQUFNLENBQUMsS0FBSyxDQUFDOztzREFDSjtBQUdWO0lBREMsa0JBQU0sQ0FBQyxZQUFZLENBQUM7O3VEQUNWO0FBS1g7SUFGQyxlQUFHLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBQy9CLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDZCxXQUFBLGlCQUFLLEVBQUUsQ0FBQTs7OztxREFFeEI7QUFJRDtJQURDLGdCQUFJLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ2YsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3FEQUUxQjtBQUlEO0lBREMsZUFBRyxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNWLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzttREFLekI7QUFJRDtJQURDLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDZCxXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cURBaUIzQjtBQUlEO0lBREMsZUFBRyxDQUFDLGtCQUFrQixFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ2pCLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozs2REFFbkM7QUFoRVUsbUJBQW1CO0lBRi9CLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLGlCQUFpQixFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDO0dBQ3JDLG1CQUFtQixDQWtFL0I7QUFsRVksa0RBQW1CIn0=