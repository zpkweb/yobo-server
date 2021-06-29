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
const user_2 = require("../base/user/user");
const seller_1 = require("../base/seller/seller");
const metadata_1 = require("../base/seller/metadata");
const resume_1 = require("../base/seller/resume");
const studio_1 = require("../base/seller/studio");
const commodity_1 = require("../commodity/commodity");
const name_1 = require("../commodity/attribute/name");
const photo_1 = require("../commodity/attribute/photo");
const likeSeller_1 = require("../my/likeSeller");
const nodemailer = require("nodemailer");
let SellerService = class SellerService {
    async create(payload) {
        if (payload.user && payload.user.userId) {
            const userSeller = await this.baseSellerService.baseApplySeller(payload.user.userId);
            if (userSeller) {
                return {
                    success: false,
                    code: 10415
                };
            }
        }
        if (payload.seller.firstname || payload.seller.lastname) {
            const sellerName = await this.baseSellerService.BaseHasName({
                firstname: payload.seller.firstname,
                lastname: payload.seller.lastname,
            });
            if (sellerName) {
                return {
                    success: false,
                    code: 10414
                };
            }
        }
        let seller;
        if (payload.seller) {
            if (payload.seller.banner
                || payload.seller.choice
                || payload.seller.state
                || payload.seller.type
                || payload.seller.firstname
                || payload.seller.lastname
                || payload.seller.searchName
                || payload.seller.tags
                || payload.seller.gender
                || payload.seller.country) {
                seller = await this.baseSellerService.baseCreateSeller({
                    banner: payload.seller.banner,
                    choice: payload.seller.choice,
                    state: payload.seller.state,
                    type: payload.seller.type,
                    firstname: payload.seller.firstname,
                    lastname: payload.seller.lastname,
                    searchName: payload.seller.searchName,
                    tags: payload.seller.tags,
                    gender: payload.seller.gender,
                    country: payload.seller.country,
                });
                if (!seller) {
                    return {
                        success: false,
                        code: 10004
                    };
                }
            }
            else {
                return {
                    success: false,
                    code: 10104
                };
            }
        }
        else {
            return {
                success: false,
                code: 10104
            };
        }
        if (payload.metadata) {
            if (payload.metadata.language
                || payload.metadata.findUs
                || payload.metadata.isFullTime
                || payload.metadata.onlineSell
                || payload.metadata.sold
                || payload.metadata.channel
                || payload.metadata.gallery
                || payload.metadata.medium
                || payload.metadata.galleryInfo
                || payload.metadata.recommend
                || payload.metadata.prize
                || payload.metadata.website
                || payload.metadata.profileZhcn
                || payload.metadata.profileEnus
                || payload.metadata.profileJajp
                || payload.metadata.profileEses) {
                const sellerMetadata = await this.baseSellerMetadataService.baseCreate({
                    language: payload.metadata.language,
                    findUs: payload.metadata.findUs,
                    isFullTime: payload.metadata.isFullTime,
                    onlineSell: payload.metadata.onlineSell,
                    sold: payload.metadata.sold,
                    channel: payload.metadata.channel,
                    gallery: payload.metadata.gallery,
                    medium: payload.metadata.medium,
                    galleryInfo: payload.metadata.galleryInfo,
                    recommend: payload.metadata.recommend,
                    prize: payload.metadata.prize,
                    website: payload.metadata.website,
                    profileZhcn: payload.metadata.profileZhcn,
                    profileEnus: payload.metadata.profileEnus,
                    profileJajp: payload.metadata.profileJajp,
                    profileEses: payload.metadata.profileEses,
                });
                if (sellerMetadata) {
                    await this.baseSellerMetadataService.relation({
                        name: "seller",
                        of: sellerMetadata.identifiers[0].id,
                        set: { sellerId: seller.generatedMaps[0].sellerId }
                    });
                }
                else {
                    return {
                        success: false,
                        code: 10004
                    };
                }
            }
        }
        if (payload.studio) {
            if (payload.studio.name
                || payload.studio.photo
                || payload.studio.video
                || payload.studio.ccId
                || payload.studio.siteId
                || payload.studio.videoPhoto
                || payload.studio.banner
                || payload.studio.introduce) {
                const sellerStudio = await this.baseSellerStudioService.baseCreate({
                    sellerId: seller.generatedMaps[0].sellerId,
                    name: payload.studio.name,
                    photo: payload.studio.photo,
                    video: payload.studio.video,
                    ccId: payload.studio.ccId,
                    siteId: payload.studio.siteId,
                    videoPhoto: payload.studio.videoPhoto,
                    banner: payload.studio.banner,
                    introduce: payload.studio.introduce,
                });
                if (sellerStudio) {
                    await this.baseSellerService.relation({
                        name: "studio",
                        of: seller.identifiers[0].id,
                        set: sellerStudio.identifiers[0].id,
                    });
                }
                else {
                    return {
                        success: false,
                        code: 10004
                    };
                }
            }
        }
        if (payload.resume) {
            if (payload.resume.prize.length
                || payload.resume.individua.length
                || payload.resume.organizing.length
                || payload.resume.publish.length) {
                const sellerResume = await this.baseSellerResumeService.baseCreate({
                    resume: JSON.stringify(payload.resume)
                });
                if (sellerResume) {
                    await this.baseSellerResumeService.relation({
                        name: "seller",
                        of: sellerResume.identifiers[0].id,
                        set: { sellerId: seller.generatedMaps[0].sellerId }
                    });
                }
                else {
                    return {
                        success: false,
                        code: 10004
                    };
                }
            }
        }
        if (payload.user && payload.user.userId) {
            const user = await this.baseUserService.baseRetrieveUserIdentity(payload.user.userId);
            if (user) {
                await this.baseSellerService.relation({
                    name: "user",
                    of: seller.identifiers[0].id,
                    set: { userId: payload.user.userId }
                });
            }
            else {
                return {
                    success: false,
                    code: 10202
                };
            }
        }
        return {
            data: { sellerId: seller.generatedMaps[0].sellerId },
            success: true,
            code: 10003
        };
    }
    async edit(payload) {
        if (payload.sellerId) {
            let edit = {};
            const sellerData = await this.baseSellerService.baseRetrieveUser(payload.sellerId);
            if (sellerData) {
                const { user, ...seller } = sellerData;
                edit.seller = seller;
                if (user) {
                    edit.user = user;
                }
                const sellerMetadata = await this.baseSellerMetadataService.baseRetrieve(payload.sellerId);
                if (sellerMetadata) {
                    edit.metadata = sellerMetadata;
                }
                const sellerStudio = await this.baseSellerStudioService.baseRetrieve(payload.sellerId);
                if (sellerStudio) {
                    edit.studio = sellerStudio;
                }
                const sellerResume = await this.baseSellerResumeService.baseRetrieve(payload.sellerId);
                if (sellerResume && sellerResume.resume) {
                    edit.resume = JSON.parse(sellerResume.resume);
                }
            }
            else {
                return {
                    success: false,
                    code: 10412
                };
            }
            return {
                data: edit,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10104
            };
        }
    }
    async find(payload) {
        if (payload.sellerId) {
            let find = {};
            const sellerData = await this.baseSellerService.baseRetrieveSeller(payload.sellerId);
            if (sellerData) {
                const { user, ...seller } = sellerData;
                find.seller = seller;
                if (user) {
                    find.user = user;
                }
                const sellerMetadata = await this.baseSellerMetadataService.baseRetrieve(payload.sellerId);
                if (sellerMetadata) {
                    find.metadata = sellerMetadata;
                }
                const sellerStudio = await this.baseSellerStudioService.baseRetrieve(payload.sellerId);
                if (sellerStudio) {
                    find.studio = sellerStudio;
                }
                const sellerResume = await this.baseSellerResumeService.baseRetrieve(payload.sellerId);
                if (sellerResume && sellerResume.resume) {
                    find.resume = JSON.parse(sellerResume.resume);
                }
                const commoditys = await this.commodityCommodityService.retrieveCommmoditySellerId(payload.sellerId);
                if (commoditys.success && commoditys.data && commoditys.data.length) {
                    for (let item of commoditys.data) {
                        const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                        if (commodityAttributeName) {
                            item.name = commodityAttributeName.data[payload.locale];
                        }
                        const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                        if (commodityAttributePhoto) {
                            item.photos = commodityAttributePhoto.data.map(item => item.src);
                        }
                    }
                    find.commoditys = commoditys.data;
                }
            }
            else {
                return {
                    success: false,
                    code: 10412
                };
            }
            return {
                data: find,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10104
            };
        }
    }
    async update(payload) {
        if (payload.seller.sellerId) {
            const sellerData = await this.baseSellerService.baseRetrieveUser(payload.seller.sellerId);
            if (sellerData) {
                const { user } = sellerData;
                if (user) {
                    if (payload.user) {
                        if (payload.user.userId !== user.userId) {
                            await this.baseSellerService.relation({
                                name: "user",
                                of: sellerData.id,
                                set: null
                            });
                            await this.baseSellerService.relation({
                                name: "user",
                                of: sellerData.id,
                                set: { userId: payload.user.userId }
                            });
                        }
                    }
                    else {
                        await this.baseSellerService.relation({
                            name: "user",
                            of: sellerData.id,
                            set: null
                        });
                    }
                }
                else {
                    if (payload.user && payload.user.userId) {
                        await this.baseSellerService.relation({
                            name: "user",
                            of: sellerData.id,
                            set: { userId: payload.user.userId }
                        });
                    }
                }
                const seller = await this.baseSellerService.baseUpdateSeller({
                    sellerId: payload.seller.sellerId,
                    banner: payload.seller.banner,
                    choice: payload.seller.choice,
                    state: payload.seller.state,
                    type: payload.seller.type,
                    firstname: payload.seller.firstname,
                    lastname: payload.seller.lastname,
                    searchName: payload.seller.searchName,
                    tags: payload.seller.tags,
                    gender: payload.seller.gender,
                    country: payload.seller.country,
                });
                if (!seller.affected) {
                    return {
                        success: false,
                        code: 10008
                    };
                }
            }
            else {
                return {
                    success: false,
                    code: 10412
                };
            }
            if (payload.metadata) {
                const sellerMetadata = await this.baseSellerMetadataService.baseRetrieve(payload.seller.sellerId);
                if (sellerMetadata) {
                    const sellerMetadata = await this.baseSellerMetadataService.baseUpdate({
                        sellerId: payload.seller.sellerId,
                        language: payload.metadata.language,
                        findUs: payload.metadata.findUs,
                        isFullTime: payload.metadata.isFullTime,
                        onlineSell: payload.metadata.onlineSell,
                        sold: payload.metadata.sold,
                        channel: payload.metadata.channel,
                        gallery: payload.metadata.gallery,
                        medium: payload.metadata.medium,
                        galleryInfo: payload.metadata.galleryInfo,
                        recommend: payload.metadata.recommend,
                        prize: payload.metadata.prize,
                        website: payload.metadata.website,
                        profileZhcn: payload.metadata.profileZhcn,
                        profileEnus: payload.metadata.profileEnus,
                        profileJajp: payload.metadata.profileJajp,
                        profileEses: payload.metadata.profileEses,
                    });
                    if (!sellerMetadata.affected) {
                        return {
                            success: false,
                            code: 10008
                        };
                    }
                }
                else {
                    if (payload.metadata) {
                        if (payload.metadata.language
                            || payload.metadata.findUs
                            || payload.metadata.isFullTime
                            || payload.metadata.onlineSell
                            || payload.metadata.sold
                            || payload.metadata.channel
                            || payload.metadata.gallery
                            || payload.metadata.medium
                            || payload.metadata.galleryInfo
                            || payload.metadata.recommend
                            || payload.metadata.prize
                            || payload.metadata.website
                            || payload.metadata.profileZhcn
                            || payload.metadata.profileEnus
                            || payload.metadata.profileJajp
                            || payload.metadata.profileEses) {
                            const sellerMetadata = await this.baseSellerMetadataService.baseCreate({
                                language: payload.metadata.language,
                                findUs: payload.metadata.findUs,
                                isFullTime: payload.metadata.isFullTime,
                                onlineSell: payload.metadata.onlineSell,
                                sold: payload.metadata.sold,
                                channel: payload.metadata.channel,
                                gallery: payload.metadata.gallery,
                                medium: payload.metadata.medium,
                                galleryInfo: payload.metadata.galleryInfo,
                                recommend: payload.metadata.recommend,
                                prize: payload.metadata.prize,
                                website: payload.metadata.website,
                                profileZhcn: payload.metadata.profileZhcn,
                                profileEnus: payload.metadata.profileEnus,
                                profileJajp: payload.metadata.profileJajp,
                                profileEses: payload.metadata.profileEses,
                            });
                            if (sellerMetadata) {
                                await this.baseSellerMetadataService.relation({
                                    name: "seller",
                                    of: sellerMetadata.identifiers[0].id,
                                    set: { sellerId: payload.seller.sellerId }
                                });
                            }
                            else {
                                return {
                                    success: false,
                                    code: 10004
                                };
                            }
                        }
                    }
                }
            }
            if (payload.studio) {
                const sellerStudio = await this.baseSellerStudioService.baseRetrieve(payload.seller.sellerId);
                if (sellerStudio) {
                    const sellerStudioUpdate = await this.baseSellerStudioService.baseUpdate({
                        sellerId: payload.seller.sellerId,
                        name: payload.studio.name,
                        photo: payload.studio.photo,
                        video: payload.studio.video,
                        ccId: payload.studio.ccId,
                        siteId: payload.studio.siteId,
                        videoPhoto: payload.studio.videoPhoto,
                        banner: payload.studio.banner,
                        introduce: payload.studio.introduce,
                    });
                    if (!sellerStudioUpdate.affected) {
                        return {
                            success: false,
                            code: 10008
                        };
                    }
                }
                else {
                    if (payload.studio) {
                        if (payload.studio.name
                            || payload.studio.photo
                            || payload.studio.video
                            || payload.studio.ccId
                            || payload.studio.siteId
                            || payload.studio.videoPhoto
                            || payload.studio.banner
                            || payload.studio.introduce) {
                            const sellerStudio = await this.baseSellerStudioService.baseCreate({
                                sellerId: payload.seller.sellerId,
                                name: payload.studio.name,
                                photo: payload.studio.photo,
                                video: payload.studio.video,
                                ccId: payload.studio.ccId,
                                siteId: payload.studio.siteId,
                                videoPhoto: payload.studio.videoPhoto,
                                banner: payload.studio.banner,
                                introduce: payload.studio.introduce,
                            });
                            if (sellerStudio) {
                                await this.baseSellerService.relation({
                                    name: "studio",
                                    of: { sellerId: payload.seller.sellerId },
                                    set: sellerStudio.identifiers[0].id,
                                });
                            }
                            else {
                                return {
                                    success: false,
                                    code: 10004
                                };
                            }
                        }
                    }
                }
            }
            if (payload.resume) {
                const sellerResume = await this.baseSellerResumeService.baseRetrieve(payload.seller.sellerId);
                if (sellerResume) {
                    const sellerResume = await this.baseSellerResumeService.baseUpdate({
                        sellerId: payload.seller.sellerId,
                        resume: JSON.stringify(payload.resume),
                    });
                    if (!sellerResume.affected) {
                        return {
                            success: false,
                            code: 10008
                        };
                    }
                }
                else {
                    if (payload.resume) {
                        if (payload.resume.prize.length
                            || payload.resume.individua.length
                            || payload.resume.organizing.length
                            || payload.resume.publish.length) {
                            const sellerResume = await this.baseSellerResumeService.baseCreate({
                                resume: JSON.stringify(payload.resume)
                            });
                            if (sellerResume) {
                                await this.baseSellerResumeService.relation({
                                    name: "seller",
                                    of: sellerResume.identifiers[0].id,
                                    set: { sellerId: payload.seller.sellerId }
                                });
                            }
                            else {
                                return {
                                    success: false,
                                    code: 10004
                                };
                            }
                        }
                    }
                }
            }
            return {
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10104
            };
        }
    }
    async updateSellerState(payload) {
        const seller = await this.baseSellerService.baseRetrieveSeller(payload);
        if (!seller) {
            return {
                success: false,
                code: 10202
            };
        }
        if (payload.state == '1') {
            let sellerState = await this.baseSellerService.baseSetSellerState(payload);
            if (!sellerState.affected) {
                return {
                    success: false,
                    code: 10008
                };
            }
            const sendmail = await this.sendMailSellerApply({
                ...payload,
                email: seller.user.email,
                subject: 'yobo-审核通过',
                html: `<p><img src="http://www.yoboart.com/images/artists-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！</p><p style="font-size:16px;">您可以点击此链接进行登录<a href="http://www.yoboart.com">http://www.yoboart.com</a></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
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
            let sellerState = await this.baseSellerService.baseSetSellerState(payload);
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
            port: this.email.port,
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
        const seller = await this.baseSellerService.baseRetrieveSeller(payload.sellerId);
        if (!seller) {
            return {
                success: false,
                code: 10202
            };
        }
        const user = await this.baseUserService.baseUpdateUser({
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
        const updateSeller = await this.baseSellerService.baseUpdateSeller({
            sellerId: seller.sellerId,
            state: payload.state || 0,
            banner: payload.banner || '',
            choice: payload.choice || false,
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
            searchName: payload.searchName || '',
            tags: payload.tags || '',
            gender: payload.gender || '',
            country: payload.country || ''
        });
        if (!updateSeller.affected) {
            return {
                success: false,
                code: 10008
            };
        }
        const updateSellerMetadata = await this.baseSellerMetadataService.baseUpdate({
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
            profileZhcn: payload.profileZhcn || '',
            profileEnus: payload.profileEnus || '',
            profileJajp: payload.profileJajp || '',
            profileEses: payload.profileEses || ''
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
        const applyList = await this.baseSellerService.baseSearchSeller({
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
        let result = await this.baseSellerService.baseSearchSeller(payload);
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
        let result = await this.baseSellerService.baseRetrieveSellerAll(payload);
        if (result) {
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
    }
    async retrieveSellerHome(payload) {
        let result = await this.baseSellerService.baseRetrieveSellerHome(payload);
        if (result) {
            let data = result[0];
            let total = result[1];
            if (data) {
                if (payload.isLocale) {
                    data = this.retrieveSellerAllFilter(payload.locale, data);
                }
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
    }
    retrieveSellerAllFilter(type, payload) {
        return payload.map(item => {
            if (item.commodityName) {
                item.commodityName = item.commodityName[type];
            }
            if (item.commodityPhotos) {
                item.commodityPhotos = item.commodityPhotos.map(item => item.src);
            }
            return item;
        });
    }
    async hasSeller(sellerId) {
        const seller = await this.baseSellerService.BaseHas(sellerId);
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
    async choiceSeller(payload) {
        const hotSaleSeller = await this.baseSellerService.baseChoiceSeller({
            pageSize: payload.pageSize,
            currentPage: payload.currentPage,
            news: payload.news
        });
        if (hotSaleSeller) {
            return {
                data: hotSaleSeller,
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
    async sellerIdFind(payload) {
        const seller = await this.baseSellerService.baseSellerIdRetrieveSeller(payload);
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
    async sellerFollowTotal(sellerId) {
        const followTotal = await this.myLikeSellerService.retrieveFollow(sellerId);
        if (followTotal) {
            return {
                data: followTotal.data,
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
        const seller = await this.baseSellerService.baseDeleteSeller(sellerId);
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
    async updateMetadata(payload) {
        const seller = await this.baseSellerMetadataService.baseUpdateMetadata(payload);
        if (seller.affected) {
            return {
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async updateResume(payload) {
        const seller = await this.baseSellerResumeService.baseUpdateResume(payload);
        if (seller.affected) {
            return {
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async retrieveSeller(sellerId) {
        const sellerData = await this.baseSellerService.baseRetrieveSeller(sellerId);
        if (sellerData) {
            return {
                data: sellerData,
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
};
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], SellerService.prototype, "userEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_2.BaseUserService)
], SellerService.prototype, "baseUserService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.BaseSellerService)
], SellerService.prototype, "baseSellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", metadata_1.BaseSellerMetadataService)
], SellerService.prototype, "baseSellerMetadataService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", resume_1.BaseSellerResumeService)
], SellerService.prototype, "baseSellerResumeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", studio_1.BaseSellerStudioService)
], SellerService.prototype, "baseSellerStudioService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.CommodityCommodityService)
], SellerService.prototype, "commodityCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.CommodityAttributeName)
], SellerService.prototype, "commodityAttributeName", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", photo_1.CommodityAttributePhoto)
], SellerService.prototype, "commodityAttributePhoto", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likeSeller_1.MyLikeSellerService)
], SellerService.prototype, "myLikeSellerService", void 0);
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], SellerService.prototype, "email", void 0);
SellerService = __decorate([
    decorator_1.Provide()
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsaURBQWtEO0FBSWxELDRDQUFvRDtBQUVwRCxrREFBbUU7QUFDbkUsc0RBQTZFO0FBQzdFLGtEQUF5RTtBQUN6RSxrREFBeUU7QUFFekUsc0RBQTRFO0FBQzVFLHNEQUE4RTtBQUM5RSx3REFBZ0Y7QUFFaEYsaURBQWdFO0FBSWhFLHlDQUF5QztBQUl6QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBcUN4QixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFJbEIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JGLElBQUcsVUFBVSxFQUFFO2dCQUNiLE9BQU87b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsSUFBSSxFQUFFLEtBQUs7aUJBQ1osQ0FBQTthQUNGO1NBQ0Y7UUFJQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztnQkFDMUQsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUztnQkFDbkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTthQUNsQyxDQUFDLENBQUE7WUFFRixJ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