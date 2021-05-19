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
    async editUser(findQuery) {
        return await this.userService.edit({
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
    decorator_1.Get('/edit', { summary: '编辑用户' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserController.prototype, "editUser", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL3NlcnZlci91c2VyL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStHO0FBRS9HLHFEQUFtRDtBQUluRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQW9COUIsS0FBSyxDQUFDLFVBQVUsQ0FBVSxNQUFNO1FBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsS0FBSyxDQUFDLFVBQVUsQ0FBWSxVQUFVO1FBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsS0FBSyxDQUFDLFFBQVEsQ0FBYSxTQUFTO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxLQUFLLENBQUMsUUFBUSxDQUFhLFNBQVM7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssQ0FBQyxVQUFVLENBQWEsWUFBWTtRQUl2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM3QyxHQUFHLFlBQVk7WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDO0lBSUQsS0FBSyxDQUFDLGtCQUFrQixDQUFhLG1CQUFtQjtRQUN0RCxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FFRixDQUFBO0FBdkVDO0lBREMsa0JBQU0sRUFBRTs4QkFDSSxrQkFBVzt3REFBQztBQUd6QjtJQURDLGtCQUFNLEVBQUU7O2dEQUNJO0FBR2I7SUFEQyxrQkFBTSxFQUFFOztnREFDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7O3NEQUNKO0FBR1Y7SUFEQyxrQkFBTSxDQUFDLFlBQVksQ0FBQzs7dURBQ1Y7QUFLWDtJQUZDLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDL0IsZUFBRyxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNkLFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7O3FEQUV4QjtBQUlEO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDZixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cURBRTFCO0FBSUQ7SUFEQyxlQUFHLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ1YsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O21EQUt6QjtBQUdEO0lBREMsZUFBRyxDQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNkLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzttREFLekI7QUFJRDtJQURDLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDZCxXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cURBaUIzQjtBQUlEO0lBREMsZUFBRyxDQUFDLGtCQUFrQixFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ2pCLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozs2REFFbkM7QUF4RVUsbUJBQW1CO0lBRi9CLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLGlCQUFpQixFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDO0dBQ3JDLG1CQUFtQixDQTBFL0I7QUExRVksa0RBQW1CIn0=