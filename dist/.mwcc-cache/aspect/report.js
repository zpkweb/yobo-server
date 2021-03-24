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
const subscriber_1 = require("../controller/client/subscribe/subscriber");
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
        commodity_2.AdminCommodityController,
        subscriber_1.SubscriberController
    ])
], ReportInfo);
exports.ReportInfo = ReportInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImFzcGVjdC9yZXBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXdGO0FBRXhGLHlEQUFpRTtBQUNqRSwyREFBdUU7QUFFdkUseURBQXNFO0FBQ3RFLDJEQUE0RTtBQUM1RSxpRUFBa0Y7QUFDbEYsNkRBQThFO0FBRTlFLHdFQUFnRjtBQUNoRix3RUFBcUY7QUFFckYsMEVBQWlGO0FBY2pGLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFLckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFnQixFQUFFLE1BQU07UUFFeEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNLENBQUM7UUFFaEMsT0FBTztZQUNMLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87WUFDM0IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUN0QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1NBQ3RCLENBQUE7SUFHSCxDQUFDO0NBT0YsQ0FBQTtBQXRCQztJQURDLGtCQUFNLEVBQUU7O3VDQUNJO0FBSEYsVUFBVTtJQVp0QixtQkFBTyxFQUFFO0lBQ1Qsa0JBQU0sQ0FBQztRQUNOLHFCQUFjO1FBQ2QsMkJBQW1CO1FBQ25CLDBCQUFtQjtRQUNuQixnQ0FBd0I7UUFDeEIsc0NBQTJCO1FBQzNCLGtDQUF5QjtRQUN6QiwrQkFBbUI7UUFDbkIsb0NBQXdCO1FBQ3hCLGlDQUFvQjtLQUNyQixDQUFDO0dBQ1csVUFBVSxDQXlCdEI7QUF6QlksZ0NBQVUifQ==