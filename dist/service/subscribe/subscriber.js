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
exports.SubscriberService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const subscriber_1 = require("../base/subscribe/subscriber");
const user_1 = require("../user/user");
let SubscriberService = class SubscriberService {
    async create(payload) {
        const hasEmail = await this.retrieveEmail(payload.email);
        if (hasEmail.success) {
            return {
                success: false,
                code: 10701
            };
        }
        const user = await this.userService.hasUser(payload.userId);
        if (!user.success) {
            return {
                success: false,
                code: 10202
            };
        }
        const subscriber = await this.baseSubscriberService.BaseCreate({
            email: payload.email,
            userName: user.data.name,
            userEmail: user.data.email,
            userPhone: user.data.phone
        });
        if (subscriber.identifiers[0].id) {
            await this.baseSubscriberService.BaseRelationSet({
                name: 'user',
                of: subscriber.identifiers[0].id,
                set: { userId: payload.userId }
            });
            return {
                success: true,
                code: 10702
            };
        }
        else {
            return {
                success: false,
                code: 10703
            };
        }
    }
    async retrieve({ email = '', userId = '' } = {}) {
        if (email) {
            return await this.retrieveEmail(email);
        }
        else if (userId) {
            return await this.retrieveUserId(userId);
        }
        else {
            return await this.retrieveAll();
        }
    }
    async retrieveEmail(email) {
        const retrieve = await this.baseSubscriberService.BaseRetrieveEmail(email);
        if (retrieve) {
            return {
                data: retrieve,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveUserId(userId) {
        const retrieve = await this.baseSubscriberService.BaseRetrieveUserId(userId);
        if (retrieve) {
            return {
                data: retrieve,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveEmailUserId(payload) {
        const retrieve = await this.baseSubscriberService.BaseRetrieveEmailUserId(payload);
        if (retrieve) {
            return {
                data: retrieve,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveAll() {
        const retrieve = await this.baseSubscriberService.BaseRetrieve();
        if (retrieve) {
            return {
                data: retrieve,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async delete({ email = '', userId = '' } = {}) {
        if (email) {
            return await this.deleteEmail(email);
        }
        else if (userId) {
            return await this.deleteUserId(userId);
        }
        else {
            return await this.deleteAll();
        }
    }
    async deleteEmail(email) {
        const data = await this.baseSubscriberService.BaseDeleteEmail(email);
        if (data.affected) {
            return {
                data: data,
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async deleteUserId(userId) {
        const data = await this.baseSubscriberService.BaseDeleteUserId(userId);
        if (data.affected) {
            return {
                data: data,
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async deleteAll() {
        const data = await this.baseSubscriberService.BaseDelete();
        if (data.affected) {
            return {
                data: data,
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", subscriber_1.BaseSubscriberService)
], SubscriberService.prototype, "baseSubscriberService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], SubscriberService.prototype, "userService", void 0);
SubscriberService = __decorate([
    decorator_1.Provide()
], SubscriberService);
exports.SubscriberService = SubscriberService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3N1YnNjcmliZS9zdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCw2REFBOEU7QUFDOUUsdUNBQW1EO0FBR25ELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBUTVCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUVsQixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR3pELElBQUcsUUFBUSxDQUFDLE9BQU8sRUFBQztZQUNsQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBSUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUQsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZixPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBR0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1lBQzdELEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUE7UUFDRixJQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMs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