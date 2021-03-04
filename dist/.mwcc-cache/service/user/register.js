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
exports.UserRegisterService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../entity/user/user");
const seller_1 = require("../../entity/user/seller/seller");
const metadata_1 = require("../../entity/user/seller/metadata");
const studio_1 = require("../../entity/user/seller/studio");
const resume_1 = require("../../entity/user/seller/resume");
const identity_1 = require("../../entity/user/identity/identity");
const admin_1 = require("../../entity/user/admin/admin");
const customerService_1 = require("../../entity/user/customerService/customerService");
const user_2 = require("../base/user/user");
const seller_2 = require("../base/user/seller");
const list_1 = require("../base/user/identity/list");
let UserRegisterService = class UserRegisterService {
    async registerUser(payload) {
        return await this.register(Object.assign({}, {
            sourceType: 'user',
            identityIndex: 80,
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
            avatar: payload.avatar || '',
        }, payload));
    }
    async applySeller(payload) {
        if (payload.userId) {
            const applySeller = await this.baseSellerServer.baseApplySeller(payload.userId);
            console.log("applySeller", applySeller);
            if (applySeller) {
                return {
                    success: false,
                    code: 10411
                };
            }
        }
        return await this.register(Object.assign({}, {
            sourceType: 'user',
            identityIndex: 5,
            name: payload.firstname + payload.lastname || '',
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
            state: 0,
            avatar: payload.avatar || '',
        }, payload));
    }
    async adminRegister(payload) {
        let adminRegister;
        switch (payload.identity) {
            case 'ordinary':
                adminRegister = await this.adminRegisterUser(payload);
                break;
            case 'seller':
                adminRegister = await this.registerSeller(payload);
                break;
            case 'customerService':
                adminRegister = await this.createCustomerService(payload);
                break;
            case 'admin':
                adminRegister = await this.createAdmin(payload);
                break;
            case 'superAdmin':
                adminRegister = await this.createSuperAdmin(payload);
                break;
        }
        return adminRegister;
    }
    async adminRegisterUser(payload) {
        return await this.register(Object.assign({}, {
            sourceType: 'admin',
            identityIndex: 80,
            avatar: payload.avatar || '',
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
        }, payload));
    }
    async registerSeller(payload) {
        console.log("registerSeller", payload);
        return await this.register(Object.assign({}, {
            sourceType: 'admin',
            identityIndex: 5,
            avatar: payload.avatar || '',
            name: payload.firstname + payload.lastname || '',
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
            state: payload.state || 1,
        }, payload));
    }
    async createCustomerService(payload) {
        return await this.register(Object.assign({}, {
            sourceType: 'admin',
            identityIndex: 3,
            avatar: payload.avatar || '',
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
        }, payload));
    }
    async createAdmin(payload) {
        return await this.register(Object.assign({}, {
            sourceType: 'admin',
            identityIndex: 2,
            avatar: payload.avatar || '',
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
        }, payload));
    }
    async createSuperAdmin(payload) {
        return await this.register(Object.assign({}, {
            sourceType: 'superAdmin',
            identityIndex: 1,
            avatar: payload.avatar || '',
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
        }, payload));
    }
    async register(payload) {
        console.log("register", payload);
        let user;
        let newUser;
        if (payload.userId) {
            newUser = {
                success: true,
                userId: payload.userId
            };
        }
        else {
            user = await this.hasUser(payload);
            console.log("user", user);
            if (user.success && payload.identityIndex !== 5) {
                return {
                    data: user.data,
                    success: false,
                    code: 10201
                };
            }
            newUser = await this.addUser(payload, user);
            console.log("newUser", newUser);
            if (!newUser.success) {
                return newUser;
            }
        }
        let identityIndexs = [];
        switch (payload.identityIndex) {
            case 1:
            case 2:
            case 3:
            case 5:
                identityIndexs = ["80", payload.identityIndex];
                break;
            case 70:
            case 80:
            case 90:
            default:
                identityIndexs = [payload.identityIndex];
                break;
        }
        console.log("identityIndexs", identityIndexs);
        const userIdentity = await this.addUserIdentitys({
            identityIndexs: identityIndexs,
            userId: newUser.userId
        });
        console.log("userIdentity", userIdentity);
        if (!userIdentity.success) {
            return userIdentity;
        }
        if (payload.identityIndex === 5) {
            let seller = await this.addSeller({
                ...payload,
                userId: newUser.userId
            });
            if (!seller.success) {
                return seller;
            }
        }
        if (newUser.success) {
            if (payload.userId) {
                user = await this.baseUserServer.baseRetrieveUserId(payload.userId);
            }
            else {
                user = await this.baseUserServer.baseRetrieveUser(payload);
            }
            console.log("register user", user);
            return {
                data: user,
                success: true,
                code: 10003
            };
        }
        else {
            return {
                success: false,
                code: 10004
            };
        }
    }
    async hasUser(payload) {
        const user = await this.baseUserServer.baseRetrieveUser(payload);
        console.log("user", user);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10201
            };
        }
        else {
            return {
                success: false,
                code: 10202
            };
        }
    }
    async addUser(payload, user) {
        if (user.success) {
            if (payload.identityIndex === '5') {
                return {
                    userId: user.data.userId,
                    success: true,
                    code: 10201
                };
            }
            else {
                return {
                    success: false,
                    code: 10201
                };
            }
        }
        else {
            let newUser = await this.baseUserServer.baseCreateUser(payload);
            if (newUser.generatedMaps[0].userId) {
                return {
                    userId: newUser.generatedMaps[0].userId,
                    success: true,
                    code: 10003
                };
            }
            else {
                return {
                    success: false,
                    code: 10004
                };
            }
        }
    }
    async addUserIdentitys(payload) {
        for (let item of payload.identityIndexs) {
            console.log(item);
            let userIdentity = await this.addUserIdentity({
                identityIndex: item,
                userId: payload.userId
            });
            if (!userIdentity.success) {
                return userIdentity;
            }
        }
        return {
            success: true,
            code: 10009
        };
        ;
    }
    async addUserIdentity(payload) {
        let identityList = await this.baseIdentityListServer.baseRetrieveIdentityList({
            index: payload.identityIndex
        });
        console.log("identityList", identityList);
        if (!identityList) {
            return {
                success: false,
                code: 10010
            };
        }
        let identity = await this.baseUserServer.baseCreateUserIdentity(identityList);
        console.log("identity", identity);
        if (!identity) {
            return {
                success: false,
                code: 10010
            };
        }
        await this.userIdentityEntity
            .createQueryBuilder()
            .relation(identity_1.UserIdentityEntity, "identityList")
            .of(identity.identifiers[0].id)
            .set(identityList.id);
        await this.userIdentityEntity
            .createQueryBuilder()
            .relation(identity_1.UserIdentityEntity, "user")
            .of(identity.identifiers[0].id)
            .set({ userId: payload.userId });
        return {
            success: true,
            code: 10009
        };
    }
    async addSeller(payload) {
        console.log("addSeller", payload);
        const seller = await this.baseSellerServer.baseCreateSeller({
            state: payload.state,
            type: payload.type || 0,
            typeName: payload.typeName || '',
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
            tags: payload.tags || [],
            label: payload.label || '',
            gender: payload.gender || '',
            country: payload.country || '',
        });
        console.log("add seller", seller);
        if (!seller.identifiers[0].id) {
            return {
                success: false,
                code: 10004
            };
        }
        const sellerMetadata = await this.baseSellerServer.baseCreateSellerMetadata({
            language: payload.language || '',
            findUs: payload.findUs || '',
            isFullTime: payload.isFullTime || '',
            onlineSell: payload.onlineSell || '',
            sold: payload.sold || '',
            channel: payload.channel || '',
            gallery: payload.gallery || '',
            medium: payload.medium || '',
            galleryInfo: payload.galleryInfo || '',
            recommend: payload.recommend || '',
            prize: payload.prize || '',
            website: payload.website || '',
            profile: payload.profile || '',
        });
        console.log("add sellerMetadata", sellerMetadata);
        if (!sellerMetadata.identifiers[0].id) {
            return {
                success: false,
                code: 10004
            };
        }
        await this.userSellerEntity
            .createQueryBuilder()
            .relation(seller_1.UserSellerEntity, "metadata")
            .of({ sellerId: seller.generatedMaps[0].sellerId })
            .set(sellerMetadata.identifiers[0].id);
        await this.userSellerEntity
            .createQueryBuilder()
            .relation(seller_1.UserSellerEntity, "user")
            .of(seller.identifiers[0].id)
            .set({ userId: payload.userId });
        return {
            success: true,
            code: 10003
        };
    }
};
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(seller_1.UserSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userSellerEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(metadata_1.UserSellerMetadataEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userSellerMetadataEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(studio_1.UserSellerStudioEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userSellerStudioEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(resume_1.UserSellerResumeEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userSellerResumeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(identity_1.UserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userIdentityEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(admin_1.UserAdminEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userAdminEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(customerService_1.UserCustomerServiceEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserRegisterService.prototype, "userCustomerServiceEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_2.BaseUserServer)
], UserRegisterService.prototype, "baseUserServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_2.BaseSellerServer)
], UserRegisterService.prototype, "baseSellerServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", list_1.BaseIdentityListServer)
], UserRegisterService.prototype, "baseIdentityListServer", void 0);
UserRegisterService = __decorate([
    decorator_1.Provide()
], UserRegisterService);
exports.UserRegisterService = UserRegisterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS91c2VyL3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGlEQUFrRDtBQUNsRCw0REFBaUU7QUFDakUsZ0VBQTJFO0FBQzNFLDREQUF1RTtBQUN2RSw0REFBdUU7QUFDdkUsa0VBQXVFO0FBQ3ZFLHlEQUE4RDtBQUM5RCx1RkFBNEY7QUFDNUYsNENBQW1EO0FBQ25ELGdEQUF1RDtBQUN2RCxxREFBb0U7QUFFcEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUF3QzlCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxVQUFVLEVBQUUsTUFBTTtZQUNsQixhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3hCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7U0FDN0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTztRQUV2QixJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFNakIsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9B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