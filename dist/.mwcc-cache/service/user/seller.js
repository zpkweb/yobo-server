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
            const password = await this.baseUserServer.baseUpdateUser({
                userId: seller.user.userId,
                avatar: seller.user.avatar,
                name: seller.user.name,
                email: seller.user.email,
                phone: seller.user.phone,
                password: '123456'
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
                subject: '恭喜您通过申请',
                html: `<p>恭喜您通过申请！初始密码 <span style="font-size: 18px; color: red">123456</span></p>`
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
            console.log("seller", sellerState);
            if (!sellerState.affected) {
                return {
                    success: false,
                    code: 10008
                };
            }
            const sendmail = await this.sendMailSellerApply({
                ...payload,
                email: seller.user.email,
                subject: '非常抱歉，您未能通过申请',
                html: `<p>非常抱歉，您未能通过申请！</p>`
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
        console.log("update seller ", seller);
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
        console.log("searchSeller result", result);
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
        console.log("searchSeller", result);
        let data = result[0];
        let total = result[1];
        if (payload.isLocale) {
            data = this.retrieveSellerAllFilter(payload.locale, data);
        }
        console.log("searchSellerFilter", data);
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
        console.log("deleteSeller", sellerId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsaURBQWtEO0FBQ2xELDREQUFpRTtBQUNqRSxnRUFBMkU7QUFDM0UsNERBQXVFO0FBQ3ZFLDREQUF1RTtBQUN2RSx5Q0FBeUM7QUFDekMsNENBQW1EO0FBQ25ELGdEQUF1RDtBQUV2RCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBbUN4QixLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTztRQUU3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1QsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtRQUNELElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUM7WUFFdEIsSUFBSSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUUsSUFBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUM7Z0JBQ3ZCLE9BQU87b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsSUFBSSxFQUFHLEtBQUs7aUJBQ2IsQ0FBQTthQUNGO1lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDeEQsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDMUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDMUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDdEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDeEIsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFBO1lBQ0YsSUFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUM7Z0JBQ3BCLE9BQU87b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsSUFBSSxFQUFHLEtBQUs7aUJBQ2IsQ0FBQTthQUNGO1lBR0QsTUFBTSxRQUFRLEdBQUksTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQy9DLEdBQUcsT0FBTztnQkFDVixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsU0FBUztnQkFDbEIsSUFBSSxFQUFFLDZFQUE2RTthQUNwRixDQUFDLENBQUM7WUFDSCxJQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUM7Z0JBQ3BCLE9BQU87b0JBQ0wsT0FBTyxFQUFFLElBQUk7b0JBQ2IsSUFBSSxFQUFHLEtBQUs7aUJBQ2IsQ0FBQTthQUNGO2lCQUFJO2dCQUNILE9BQU87b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsSUFBSSxFQUFHLEtBQUs7aUJBQ2IsQ0FBQTthQUNGO1NBRUY7YUFBSyxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFDO1lBRTVCLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRTFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBRWxDLElBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFDO2dCQUN2QixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRyxLQUFLO2lCQUNiLENBQUE7YUFDRjtZQUdELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QyxHQUFHLE9BQU87Z0JBQ1YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDeEIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLElBQUksRUFBRSxzQkFBc0I7YUFDN0IsQ0FBQyxDQUFDO1lBQ0gsSUFBRyxRQUFRLENBQUMsU0FBUyxFQUFDO2dCQUNwQixPQUFPO29CQUNMLE9BQU8sRUFBRSxJQUFJO29CQUNiLElBQUksRUFBRyxLQUFLO2lCQUNiLENBQUE7YUFDRjtpQkFBSTtnQkFDSCxPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRyxLQUFLO2lCQUNiLENBQUE7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPO1FBRS9CLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFFM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMzQixJQUFJLEVBQUUsR0FBRztZQUNULGdCQUFnQixFQUFFLElBQUk7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDdEI7U0FDRixDQUFDLENBQUM7UUFHSCxPQUFRLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBRW5CLENBQUMsQ0FBQztJQUdMLENBQUM7SUFRRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU87UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQU1ELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBRXhCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDVCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUVyQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1lBQ3BELE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hELEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7U0FDN0IsQ0FBQyxDQUFBO1FBQ0YsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDaEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUM7U0FDSDtRQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1lBQ2hFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUU7WUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3hCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTtZQUM1QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQy9CLENBQUMsQ0FBQTtRQUNGLElBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDO1lBQ3hCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFDO1NBQ0g7UUFFRCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO1lBQ2hGLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDNUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRTtZQUNwQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFO1lBQ3BDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUM5QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDNUIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRTtZQUN0QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUM5QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQy9CLENBQUMsQ0FBQTtRQUNGLElBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUM7WUFDaEMsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUlELEtBQUssQ0FBQyxTQUFTO1FBQ2IsTUFBTSxTQUFTLEdBQUksTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7WUFDOUQsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUE7UUFFRixJQUFHLFNBQVMsRUFBQztZQUNYLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBUUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNqRSxJQUFHLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDbEM7YUFBSTtZQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3RDO0lBQ0gsQ0FBQztJQUVGLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLO2lCQUNOO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBRUwsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPO1FBQzdCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUMxRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLO2lCQUNOO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0wsQ0FBQztJQUVELHVCQUF1QixDQUFDLElBQUksRUFBRSxPQUFPO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUcvSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVE7UUFDdEIsTUFBTSxNQUFNLEdBQUksTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNELElBQUcsTUFBTSxFQUFDO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNMLENBQUM7SUFNRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87UUFPaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckUsSUFBRyxNQUFNLEVBQUM7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBQ0wsQ0FBQztJQVFELEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNyQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUM7WUFFakIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNILENBQUM7Q0FFRixDQUFBO0FBL1lDO0lBREMsdUJBQWlCLENBQUMsaUJBQVUsQ0FBQzs4QkFDbEIsb0JBQVU7aURBQWE7QUFHbkM7SUFEQyx1QkFBaUIsQ0FBQyx5QkFBZ0IsQ0FBQzs4QkFDbEIsb0JBQVU7dURBQW1CO0FBRy9DO0lBREMsdUJBQWlCLENBQUMsbUNBQXdCLENBQUM7OEJBQ2xCLG9CQUFVOytEQUEyQjtBQUcvRDtJQURDLHVCQUFpQixDQUFDLCtCQUFzQixDQUFDOzhCQUNsQixvQkFBVTs2REFBeUI7QUFHM0Q7SUFEQyx1QkFBaUIsQ0FBQywrQkFBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7NkRBQXlCO0FBRzNEO0lBREMsa0JBQU0sRUFBRTs4QkFDTyxxQkFBYztxREFBQztBQUcvQjtJQURDLGtCQUFNLEVBQUU7OEJBQ1MseUJBQWdCO3VEQUFDO0FBR25DO0lBREMsa0JBQU0sQ0FBQyxPQUFPLENBQUM7OzRDQUNWO0FBeEJLLGFBQWE7SUFEekIsbUJBQU8sRUFBRTtHQUNHLGFBQWEsQ0FrWnpCO0FBbFpZLHNDQUFhIn0=