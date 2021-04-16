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
exports.SellerService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../entity/user/user");
const seller_1 = require("../../entity/user/seller/seller");
const metadata_1 = require("../../entity/user/seller/metadata");
const studio_1 = require("../../entity/user/seller/studio");
const resume_1 = require("../../entity/user/seller/resume");
const nodemailer = require("nodemailer");
const user_2 = require("../base/user/user");
const seller_2 = require("../base/user/seller");
const crypto = require("crypto");
let SellerService = class SellerService {
    async updateSellerState(payload) {
        const seller = await this.baseSellerServer.baseRetrieveSeller(payload);
        if (!seller) {
            return {
                success: false,
                code: 10202
            };
        }
        if (payload.state == '1') {
            let sellerState = await this.baseSellerServer.basseSetSellerState(payload);
            if (!sellerState.affected) {
                return {
                    success: false,
                    code: 10008
                };
            }
            const passwordCrypto = crypto.createHash('md5').update('123456').digest('hex');
            const password = await this.baseUserServer.baseUpdateUser({
                userId: seller.user.userId,
                avatar: seller.user.avatar,
                name: seller.user.name,
                email: seller.user.email,
                phone: seller.user.phone,
                password: passwordCrypto
            });
            if (!password.affected) {
                return {
                    success: false,
                    code: 10008
                };
            }
            const sendmail = await this.sendMailSellerApply({
                ...payload,
                email: seller.user.email,
                subject: 'yobo-审核通过',
                html: `<p><img src="http://39.105.190.188:7001/images/artists-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！您的初始密码为 <span style="font-size: 20px; color: red">123456</span></p><p style="font-size:16px;">您可以点击此链接进行登录<a href="http://39.105.190.188:8088/">http://39.105.190.188:8088/</a></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
            });
            if (sendmail.messageId) {
                return {
                    success: true,
                    code: 10403
                };
            }
            else {
                return {
                    success: false,
                    code: 10404
                };
            }
        }
        else if (payload.state == '2') {
            let sellerState = await this.baseSellerServer.basseSetSellerState(payload);
            if (!sellerState.affected) {
                return {
                    success: false,
                    code: 10008
                };
            }
            const sendmail = await this.sendMailSellerApply({
                ...payload,
                email: seller.user.email,
                subject: 'yobo-审核未通过',
                html: `<p>尊贵的阁下，抱歉您提交的信息未通过审核，请完善或修改信息后重新提交申请。</p><p>永宝YOBOART期待您的加入！</p>`
            });
            if (sendmail.messageId) {
                return {
                    success: true,
                    code: 10409
                };
            }
            else {
                return {
                    success: false,
                    code: 10410
                };
            }
        }
    }
    async sendMailSellerApply(payload) {
        let transporter = nodemailer.createTransport({
            service: this.email.service,
            port: 465,
            secureConnection: true,
            auth: {
                user: this.email.user,
                pass: this.email.pass
            },
        });
        return await transporter.sendMail({
            from: this.email.user,
            to: payload.email,
            subject: payload.subject,
            html: payload.html
        });
    }
    async adminUpdate(payload) {
        return await this.updateSeller(payload);
    }
    async sellerUpdate(payload) {
        return await this.updateSeller(payload);
    }
    async updateSeller(payload) {
        const seller = await this.baseSellerServer.baseRetrieveSeller(payload);
        if (!seller) {
            return {
                success: false,
                code: 10202
            };
        }
        const user = await this.baseUserServer.baseUpdateUser({
            userId: seller.user.userId,
            name: payload.firstname + payload.lastname || '',
            email: payload.email || '',
            phone: payload.phone || '',
            password: payload.password || '',
            avatar: payload.avatar || '',
        });
        if (!user.affected) {
            return {
                success: false,
                code: 10008
            };
        }
        const updateSeller = await this.baseSellerServer.baseUpdateSeller({
            sellerId: seller.sellerId,
            state: payload.state || 0,
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
            tags: payload.tags || '',
            label: payload.label || '',
            gender: payload.gender || '',
            country: payload.country || ''
        });
        if (!updateSeller.affected) {
            return {
                success: false,
                code: 10008
            };
        }
        const updateSellerMetadata = await this.baseSellerServer.baseUpdateSellerMetadata({
            sellerId: seller.sellerId,
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
            profile: payload.profile || ''
        });
        if (!updateSellerMetadata.affected) {
            return {
                success: false,
                code: 10008
            };
        }
        return {
            data: seller,
            success: true,
            code: 10007
        };
    }
    async applyList() {
        const applyList = await this.baseSellerServer.baseSearchSeller({
            state: 0
        });
        if (applyList) {
            return {
                data: applyList,
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
    async search(payload) {
        const { locale, currentPage, pageSize, ...searchData } = payload;
        if (searchData && Object.keys(searchData).length) {
            return this.searchSeller(payload);
        }
        else {
            return this.retrieveSellerAll(payload);
        }
    }
    async searchSeller(payload) {
        let result = await this.baseSellerServer.baseSearchSeller(payload);
        let data = result[0];
        let total = result[1];
        if (data) {
            return {
                data: {
                    list: data,
                    total
                },
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
    async retrieveSellerAll(payload) {
        let result = await this.baseSellerServer.baseRetrieveSellerAll(payload);
        let data = result[0];
        let total = result[1];
        if (payload.isLocale) {
            data = this.retrieveSellerAllFilter(payload.locale, data);
        }
        if (data) {
            return {
                data: {
                    list: data,
                    total
                },
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
    retrieveSellerAllFilter(type, payload) {
        return payload.map(item => {
            return Object.assign(item, { commodityName: item.commodityName && item.commodityName[type] ? item.commodityName[type] : '' });
        });
    }
    async hasSeller(sellerId) {
        const seller = await this.baseSellerServer.BaseHas(sellerId);
        if (seller) {
            return {
                data: seller,
                success: true,
                code: 10411
            };
        }
        else {
            return {
                success: false,
                code: 10412
            };
        }
    }
    async find(payload) {
        const seller = await this.baseSellerServer.baseRetrieveSeller(payload);
        if (seller) {
            return {
                data: seller,
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
    async deleteSeller(sellerId) {
        const seller = await this.baseSellerServer.baseDeleteSeller(sellerId);
        if (seller.affected) {
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
};
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(seller_1.UserSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userSellerEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(metadata_1.UserSellerMetadataEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userSellerMetadataEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(studio_1.UserSellerStudioEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userSellerStudioEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(resume_1.UserSellerResumeEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userSellerResumeEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_2.BaseUserServer)
], SellerService.prototype, "baseUserServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_2.BaseSellerServer)
], SellerService.prototype, "baseSellerServer", void 0);
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], SellerService.prototype, "email", void 0);
SellerService = __decorate([
    decorator_1.Provide()
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsaURBQWtEO0FBQ2xELDREQUFpRTtBQUNqRSxnRUFBMkU7QUFDM0UsNERBQXVFO0FBQ3ZFLDREQUF1RTtBQUN2RSx5Q0FBeUM7QUFDekMsNENBQW1EO0FBQ25ELGdEQUF1RDtBQUN2RCxpQ0FBaUM7QUFHakMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQW1DeEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU87UUFFN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEUsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNULE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7UUFDRCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFDO1lBRXRCLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFFLElBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFDO2dCQUN2QixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRyxLQUFLO2lCQUNiLENBQUE7YUFDRjtZQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRSxNQUFNLFFB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