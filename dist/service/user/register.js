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
const nodemailer = require("nodemailer");
let UserRegisterService = class UserRegisterService {
    async registerUser(payload) {
        const registerUser = await this.register(Object.assign({}, {
            sourceType: 'user',
            identityIndex: 80,
            name: payload.name || '',
            phone: payload.phone || '',
            email: payload.email || '',
            password: payload.password || '',
            avatar: payload.avatar || '',
        }, payload));
        if (registerUser.success) {
            let transporter = nodemailer.createTransport({
                service: this.email.service,
                port: 465,
                secureConnection: true,
                auth: {
                    user: this.email.user,
                    pass: this.email.pass
                },
            });
            await transporter.sendMail({
                from: this.email.user,
                to: payload.email,
                subject: 'yobo-注册成功',
                html: `<p>恭喜您注册成功！</p>`
            });
        }
        return registerUser;
    }
    async applySeller(payload) {
        let userId = payload.userId;
        if (payload.email) {
            const user = await this.hasUserEmail(payload.email);
            if (user.success) {
                userId = user.data.userId;
            }
        }
        if (userId) {
            const applySeller = await this.baseSellerServer.baseApplySeller(userId);
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
        let userName;
        let userEmail;
        let newUser;
        if (payload.userId) {
            newUser = {
                success: true,
                userId: payload.userId
            };
        }
        else {
            user = await this.hasUser(payload);
            userName = await this.hasUserName(payload.name);
            userEmail = await this.hasUserEmail(payload.email);
            console.log("user", user);
            if (userName.success && payload.identityIndex !== 5) {
                return Object.assign({}, userName, { success: false });
            }
            if (userEmail.success && payload.identityIndex !== 5) {
                return Object.assign({}, userEmail, { success: false });
            }
            newUser = await this.addUser(payload, userEmail);
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
            user = await this.baseUserServer.baseRetrieveUserId(newUser.userId);
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
    async hasUserName(name) {
        const user = await this.baseUserServer.baseRetrieveUserName(name);
        console.log("user", user);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10208
            };
        }
        else {
            return {
                success: false,
                code: 10209
            };
        }
    }
    async hasUserEmail(email) {
        const user = await this.baseUserServer.baseRetrieveUserEmail(email);
        console.log("user", user);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10210
            };
        }
        else {
            return {
                success: false,
                code: 10211
            };
        }
    }
    async addUser(payload, user) {
        console.log("addUser", payload, user);
        if (user.success) {
            if (payload.identityIndex == '5') {
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
        let identity;
        identity = await this.baseUserServer.baseRetrieveUserIdentity({
            userId: payload.userId,
            zhcn: identityList['zh-cn']
        });
        console.log("查询用户身份", identity);
        if (identity) {
        }
        else {
            identity = await this.baseUserServer.baseCreateUserIdentity(identityList);
            console.log("identity", identity);
            if (!identity) {
                return {
                    success: false,
                    code: 10010
                };
            }
            console.log("用户身份 关联 用户身份列表", {
                of: identity.identifiers[0].id,
                set: identityList.id
            });
            await this.userIdentityEntity
                .createQueryBuilder()
                .relation(identity_1.UserIdentityEntity, "identityList")
                .of(identity.identifiers[0].id)
                .set(identityList.id);
            console.log("用户身份 关联 用户", {
                id: identity.identifiers[0].id,
                userId: payload.userId
            });
            await this.userIdentityEntity
                .createQueryBuilder()
                .relation(identity_1.UserIdentityEntity, "user")
                .of(identity.identifiers[0].id)
                .set({ userId: payload.userId });
        }
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
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], UserRegisterService.prototype, "email", void 0);
UserRegisterService = __decorate([
    decorator_1.Provide()
], UserRegisterService);
exports.UserRegisterService = UserRegisterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS91c2VyL3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUM5RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGlEQUFrRDtBQUNsRCw0REFBaUU7QUFDakUsZ0VBQTJFO0FBQzNFLDREQUF1RTtBQUN2RSw0REFBdUU7QUFDdkUsa0VBQXVFO0FBQ3ZFLHlEQUE4RDtBQUM5RCx1RkFBNEY7QUFDNUYsNENBQW1EO0FBQ25ELGdEQUF1RDtBQUN2RCxxREFBb0U7QUFDcEUseUNBQXlDO0FBR3pDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBMkM5QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ3pELFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDaEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTtTQUM3QixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFYixJQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUM7WUFDdEIsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztnQkFFM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMs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