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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportInfo = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../controller/client/user/user");
const login_1 = require("../controller/client/user/login");
const user_2 = require("../controller/server/user/user");
const login_2 = require("../controller/server/user/login");
const register_1 = require("../controller/server/user/register");
const seller_1 = require("../controller/server/user/seller");
const commodity_1 = require("../controller/client/commodity/commodity");
const commodity_2 = require("../controller/server/commodity/commodity");
let ReportInfo = class ReportInfo {
    async afterReturn(point, result) {
        const resultData = await result;
        return {
            code: resultData.code,
            success: resultData.success,
            status: resultData.success ? 200 : 500,
            message: point.target.ctx.__(resultData.code),
            data: resultData.data
        };
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], ReportInfo.prototype, "ctx", void 0);
ReportInfo = __decorate([
    decorator_1.Provide(),
    decorator_1.Aspect([
        user_1.UserController,
        login_1.UserLoginController,
        user_2.AdminUserController,
        login_2.AdminUserLoginController,
        register_1.AdminUserRegisterController,
        seller_1.AdminUserSellerController,
        commodity_1.CommodityController,
        commodity_2.AdminCommodityController
    ])
], ReportInfo);
exports.ReportInfo = ReportInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImFzcGVjdC9yZXBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXdGO0FBRXhGLHlEQUFpRTtBQUNqRSwyREFBdUU7QUFFdkUseURBQXNFO0FBQ3RFLDJEQUE0RTtBQUM1RSxpRUFBa0Y7QUFDbEYsNkRBQThFO0FBRTlFLHdFQUFnRjtBQUNoRix3RUFBcUY7QUFhckYsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUtyQixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQWdCLEVBQUUsTUFBTTtRQUV4QyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU0sQ0FBQztRQUVoQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztZQUMzQixNQUFNLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3RDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM3QyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7U0FDdEIsQ0FBQTtJQUdILENBQUM7Q0FPRixDQUFBO0FBdEJDO0lBREMsa0JBQU0sRUFBRTs7dUNBQ0k7QUFIRixVQUFVO0lBWHRCLG1CQUFPLEVBQUU7SUFDVCxrQkFBTSxDQUFDO1FBQ04scUJBQWM7UUFDZCwyQkFBbUI7UUFDbkIsMEJBQW1CO1FBQ25CLGdDQUF3QjtRQUN4QixzQ0FBMkI7UUFDM0Isa0NBQXlCO1FBQ3pCLCtCQUFtQjtRQUNuQixvQ0FBd0I7S0FDekIsQ0FBQztHQUNXLFVBQVUsQ0F5QnRCO0FBekJZLGdDQUFVIn0=