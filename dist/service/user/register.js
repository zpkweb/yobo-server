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
                html: `<p><img src="http://39.105.190.188:7001/images/user-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下，欢迎加入永宝YOROART！</p><p style="font-size:16px;">您可以点击此链接<span style="font-size: 12px; color: red">开启您的艺术之旅+（连接<a href="http://39.105.190.188:8088/">http://39.105.190.188:8088/</a>)</span></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
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
            if (userName.success && payload.identityIndex !== 5) {
                return Object.assign({}, userName, { success: false });
            }
            if (userEmail.success && payload.identityIndex !== 5) {
                return Object.assign({}, userEmail, { success: false });
            }
            newUser = await this.addUser(payload, userEmail);
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
        const userIdentity = await this.addUserIdentitys({
            identityIndexs: identityIndexs,
            userId: newUser.userId,
            userName: payload.name,
            userEmail: payload.email,
            userPhone: payload.phone
        });
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
            let userIdentity = await this.addUserIdentity({
                identityIndex: item,
                userId: payload.userId,
                userName: payload.userName,
                userEmail: payload.userEmail,
                userPhone: payload.userPhone
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
        if (identity) {
        }
        else {
            identity = await this.baseUserServer.baseCreateUserIdentity({
                ...identityList,
                userName: payload.userName,
                userEmail: payload.userEmail,
                userPhone: payload.userPhone
            });
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
        }
        return {
            success: true,
            code: 10009
        };
    }
    async addSeller(payload) {
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