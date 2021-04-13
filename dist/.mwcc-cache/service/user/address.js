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
        console.log("create address", address);
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
        console.log("update", payload);
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
        console.log("addressUpdate", payload);
        let updateAddress;
        const userAddress = await this.retrieve(payload.userId);
        console.log("userAddress", userAddress);
        if (userAddress.success) {
            updateAddress = await this.update({
                name: payload.name || payload.firstname + payload.lastname || '',
                phone: payload.phone || '',
                country: payload.country || '',
                city: payload.city || '',
                address: payload.detail || '',
                userId: payload.userId || ''
            });
            console.log("updateAddress", updateAddress);
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
            console.log("createAddress", updateAddress);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3VzZXIvYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHVEQUE0RDtBQUM1RCw0Q0FBbUQ7QUFHbkQsSUFBcUIsa0JBQWtCLEdBQXZDLE1BQXFCLGtCQUFrQjtJQVlyQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdEMsSUFBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUUzQixNQUFNLElBQUksQ0FBQyxpQkFBaUI7aUJBQ3pCLGtCQUFrQixFQUFFO2lCQUNwQixRQUFRLENBQUMsMkJBQWlCLEVBQUUsTUFBTSxDQUFDO2lCQUNuQyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzdCLEdBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtZQUVoQyxJQUFJLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BGLElBQUcsV0FBVyxFQUFDO2dCQUNiLE9BQU87b0JBQ0wsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJO29CQUNiLElBQUksRUFBRyxLQUFLO2lCQUNiLENBQUE7YUFDRjtpQkFBSTtn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