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
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const address_1 = require("../../entity/user/address");
const user_1 = require("../base/user/user");
let UserAddressService = class UserAddressService {
    async create(payload) {
        let address = await this.baseUserServer.baseCreateUserAddress(payload);
        if (address.identifiers[0].id) {
            await this.userAddressEntity
                .createQueryBuilder()
                .relation(address_1.UserAddressEntity, "user")
                .of(address.identifiers[0].id)
                .set({ userId: payload.userId });
            let userAddress = await this.baseUserServer.baseRetrieveUserAddress(payload.userId);
            if (userAddress) {
                return {
                    data: userAddress,
                    success: true,
                    code: 10003
                };
            }
            else {
                return {
                    success: false,
                    code: 10010
                };
            }
        }
        else {
            return {
                success: false,
                code: 10004
            };
        }
    }
    async retrieve(userId) {
        const address = await this.baseUserServer.baseRetrieveUserAddress(userId);
        if (address) {
            return {
                data: address,
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
    async update(payload) {
        const address = await this.baseUserServer.baseUpdateUserAddress({
            name: payload.name || '',
            phone: payload.phone || '',
            country: payload.country || '',
            city: payload.city || '',
            address: payload.address || '',
            userId: payload.userId || ''
        });
        if (address.affected) {
            let user = await this.baseUserServer.baseRetrieveUserAddress(payload.userId);
            if (user) {
                return {
                    data: user,
                    success: true,
                    code: 10007
                };
            }
            else {
                return {
                    success: false,
                    code: 10010
                };
            }
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async remove(userId) {
        const address = await this.baseUserServer.baseDeleteUserAddress(userId);
        if (address.affected) {
            return {
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
    async updateAddress(payload) {
        let updateAddress;
        const userAddress = await this.retrieve(payload.userId);
        if (userAddress.success) {
            updateAddress = await this.update({
                name: payload.name || payload.firstname + payload.lastname || '',
                phone: payload.phone || '',
                country: payload.country || '',
                city: payload.city || '',
                address: payload.detail || '',
                userId: payload.userId || ''
            });
            if (!updateAddress.success) {
                return updateAddress;
            }
        }
        else {
            updateAddress = await this.create({
                name: payload.name || '',
                phone: payload.phone || '',
                country: payload.country || '',
                city: payload.city || '',
                address: payload.detail || '',
                userId: payload.userId || ''
            });
            if (!updateAddress.success) {
                return updateAddress;
            }
        }
        return updateAddress;
    }
};
__decorate([
    orm_1.InjectEntityModel(address_1.UserAddressEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserAddressService.prototype, "userAddressEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.BaseUserServer)
], UserAddressService.prototype, "baseUserServer", void 0);
UserAddressService = __decorate([
    decorator_1.Provide()
], UserAddressService);
exports.default = UserAddressService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3VzZXIvYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHVEQUE0RDtBQUM1RCw0Q0FBbUQ7QUFHbkQsSUFBcUIsa0JBQWtCLEdBQXZDLE1BQXFCLGtCQUFrQjtJQVlyQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7WUFFM0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCO2lCQUN6QixrQkFBa0IsRUFBRTtpQkFDcEIsUUFBUSxDQUFDLDJCQUFpQixFQUFFLE1BQU0sQ0FBQztpQkFDbkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUM3QixHQUFHLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFFaEMsSUFBSSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRixJQUFHLFdBQVcsRUFBQztnQkFDYixPQUFPO29CQUNMLElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPLEVBQUUsSUFBSTtvQkFDYixJQUFJLEVBQUcsS0FBSztpQkFDYixDQUFBO2FBQ0Y7aUJBQUk7Z0JBQ0gsT0FBTTtvQkFDSixPQUFPLEVBQUUsS0FBSztvQkFDZCxJQUFJLEVBQUUsS0FBSztp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