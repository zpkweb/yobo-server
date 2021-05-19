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
exports.UserController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../../../service/user/user");
const seller_1 = require("../../../service/user/seller");
const address_1 = require("../../../service/user/address");
let UserController = class UserController {
    async info(userId) {
        return await this.userService.findInfo(userId);
    }
    async changePassword(changePasswordBody) {
        return await this.userService.changePassword(changePasswordBody);
    }
    async updateUser(updateBody) {
        return await this.userService.update({
            userId: updateBody.userId,
            ...updateBody
        });
    }
    async getAddress(userId) {
        return await this.userAddressService.retrieve(userId);
    }
    async address(addressBody) {
        return await this.userAddressService.create(addressBody);
    }
    async addressUpdate(addressBody) {
        return await this.userAddressService.updateAddress(addressBody);
    }
    async addressRemove(userId) {
        return await this.userAddressService.remove(userId);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], UserController.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], UserController.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", address_1.default)
], UserController.prototype, "userAddressService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], UserController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], UserController.prototype, "email", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], UserController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], UserController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Get('/info', { summary: '查找个人信息' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "info", null);
__decorate([
    decorator_1.Post('/password/update', { summary: '修改密码' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新个人信息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    decorator_1.Get('/address', { summary: '获取用户地址' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAddress", null);
__decorate([
    decorator_1.Post('/address', { summary: '添加用户地址' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "address", null);
__decorate([
    decorator_1.Post('/address/update', { summary: '更新用户地址' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addressUpdate", null);
__decorate([
    decorator_1.Post('/address/remove', { summary: '删除用户地址' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addressRemove", null);
UserController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/user', { tagName: '用户' })
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2NsaWVudC91c2VyL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStHO0FBRS9HLHFEQUFvRDtBQUNwRCx5REFBd0Q7QUFDeEQsMkRBQTBEO0FBSzFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUE2QnpCLEtBQUssQ0FBQyxJQUFJLENBQVUsTUFBTTtRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVlELEtBQUssQ0FBQyxjQUFjLENBQVksa0JBQWtCO1FBQ2hELE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFVRCxLQUFLLENBQUMsVUFBVSxDQUFZLFVBQVU7UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN6QixHQUFHLFVBQVU7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBT0QsS0FBSyxDQUFDLFVBQVUsQ0FBUyxNQUFNO1FBQzdCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFPRCxLQUFLLENBQUMsT0FBTyxDQUFZLFdBQVc7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQU9ELEtBQUssQ0FBQyxhQUFhLENBQVksV0FBVztRQUN4QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBT0QsS0FBSyxDQUFDLGFBQWEsQ0FBUyxNQUFNO1FBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FJRixDQUFBO0FBakdDO0lBREMsa0JBQU0sRUFBRTs4QkFDSSxrQkFBVzttREFBQztBQUd6QjtJQURDLGtCQUFNLEVBQUU7OEJBQ00sc0JBQWE7cURBQUM7QUFHN0I7SUFEQyxrQkFBTSxFQUFFOzhCQUNXLGlCQUFrQjswREFBQztBQUd2QztJQURDLGtCQUFNLEVBQUU7OzJDQUNJO0FBR2I7SUFEQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQzs7NkNBQ1Y7QUFJTjtJQURDLGtCQUFNLEVBQUU7OzJDQUNMO0FBR0o7SUFEQyxrQkFBTSxDQUFDLEtBQUssQ0FBQzs7aURBQ0o7QUFPVjtJQURDLGVBQUcsQ0FBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDcEIsV0FBQSxpQkFBSyxFQUFFLENBQUE7Ozs7MENBRWxCO0FBWUQ7SUFEQyxnQkFBSSxDQUFDLGtCQUFrQixFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ3BCLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztvREFFOUI7QUFVRDtJQURDLGdCQUFJLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ2pCLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztnREFLMUI7QUFPRDtJQURDLGVBQUcsQ0FBQyxVQUFVLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDakIsV0FBQSxnQkFBSSxFQUFFLENBQUE7Ozs7Z0RBRXZCO0FBT0Q7SUFEQyxnQkFBSSxDQUFDLFVBQVUsRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNyQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NkNBRXZCO0FBT0Q7SUFEQyxnQkFBSSxDQUFDLGlCQUFpQixFQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3RCLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzttREFFN0I7QUFPRDtJQURDLGdCQUFJLENBQUMsaUJBQWlCLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxFQUFFLENBQUE7Ozs7bURBRTFCO0FBaEdVLGNBQWM7SUFIMUIsbUJBQU8sRUFBRTtJQUVULHNCQUFVLENBQUMsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0dBQzNCLGNBQWMsQ0FvRzFCO0FBcEdZLHdDQUFjIn0=