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
const crypto = require("crypto");
let SellerService = class SellerService {
    async create(payload) {
        if (payload.user && payload.user.userId) {
            const userSeller = await this.baseSellerServer.baseApplySeller(payload.user.userId);
            if (userSeller) {
                return {
                    success: false,
                    code: 10415
                };
            }
        }
        if (payload.seller.firstname || payload.seller.lastname) {
            const sellerName = await this.baseSellerServer.BaseHasName({
                firstname: payload.firstname,
                lastname: payload.lastname,
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
                || payload.seller.tags
                || payload.seller.gender
                || payload.seller.country) {
                seller = await this.baseSellerServer.baseCreateSeller({
                    banner: payload.seller.banner,
                    choice: payload.seller.choice,
                    state: payload.seller.state,
                    type: payload.seller.type,
                    firstname: payload.seller.firstname,
                    lastname: payload.seller.lastname,
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
                || payload.metadata.profile) {
                const sellerMetadata = await this.baseSellerMetadataServer.baseCreate({
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
                    profile: payload.metadata.profile,
                });
                if (sellerMetadata) {
                    await this.baseSellerMetadataServer.relation({
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
                const sellerStudio = await this.baseSellerStudioServer.baseCreate({
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
                    await this.baseSellerServer.relation({
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
                const sellerResume = await this.baseSellerResumeServer.baseCreate({
                    resume: JSON.stringify(payload.resume)
                });
                if (sellerResume) {
                    await this.baseSellerResumeServer.relation({
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
            const user = await this.baseUserServer.baseRetrieveUserIdentity(payload.user.userId);
            if (user) {
                await this.baseSellerServer.relation({
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
            const sellerData = await this.baseSellerServer.baseRetrieveUser(payload.sellerId);
            if (sellerData) {
                const { user, ...seller } = sellerData;
                edit.seller = seller;
                if (user) {
                    edit.user = user;
                }
                const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.sellerId);
                if (sellerMetadata) {
                    edit.metadata = sellerMetadata;
                }
                const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.sellerId);
                if (sellerStudio) {
                    edit.studio = sellerStudio;
                }
                const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.sellerId);
                if (sellerResume) {
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
            const sellerData = await this.baseSellerServer.baseRetrieveSeller(payload.sellerId);
            if (sellerData) {
                const { user, ...seller } = sellerData;
                find.seller = seller;
                if (user) {
                    find.user = user;
                }
                const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.sellerId);
                if (sellerMetadata) {
                    find.metadata = sellerMetadata;
                }
                const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.sellerId);
                if (sellerStudio) {
                    find.studio = sellerStudio;
                }
                const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.sellerId);
                if (sellerResume) {
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
            const sellerData = await this.baseSellerServer.baseRetrieveUser(payload.seller.sellerId);
            if (sellerData) {
                const { user } = sellerData;
                if (user) {
                    if (payload.user) {
                        if (payload.user.userId !== user.userId) {
                            await this.baseSellerServer.relation({
                                name: "user",
                                of: sellerData.id,
                                set: null
                            });
                            await this.baseSellerServer.relation({
                                name: "user",
                                of: sellerData.id,
                                set: { userId: payload.user.userId }
                            });
                        }
                    }
                    else {
                        await this.baseSellerServer.relation({
                            name: "user",
                            of: sellerData.id,
                            set: null
                        });
                    }
                }
                else {
                    if (payload.user && payload.user.userId) {
                        await this.baseSellerServer.relation({
                            name: "user",
                            of: sellerData.id,
                            set: { userId: payload.user.userId }
                        });
                    }
                }
                const seller = await this.baseSellerServer.baseUpdateSeller({
                    sellerId: payload.seller.sellerId,
                    banner: payload.seller.banner,
                    choice: payload.seller.choice,
                    state: payload.seller.state,
                    type: payload.seller.type,
                    firstname: payload.seller.firstname,
                    lastname: payload.seller.lastname,
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
                const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.seller.sellerId);
                if (sellerMetadata) {
                    const sellerMetadata = await this.baseSellerMetadataServer.baseUpdate({
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
                        profile: payload.metadata.profile,
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
                            || payload.metadata.profile) {
                            const sellerMetadata = await this.baseSellerMetadataServer.baseCreate({
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
                                profile: payload.metadata.profile,
                            });
                            if (sellerMetadata) {
                                await this.baseSellerMetadataServer.relation({
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
                const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.seller.sellerId);
                if (sellerStudio) {
                    const sellerStudioUpdate = await this.baseSellerStudioServer.baseUpdate({
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
                            const sellerStudio = await this.baseSellerStudioServer.baseCreate({
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
                                await this.baseSellerServer.relation({
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
                const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.seller.sellerId);
                if (sellerResume) {
                    const sellerResume = await this.baseSellerResumeServer.baseUpdate({
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
                            const sellerResume = await this.baseSellerResumeServer.baseCreate({
                                resume: JSON.stringify(payload.resume)
                            });
                            if (sellerResume) {
                                await this.baseSellerResumeServer.relation({
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
        const seller = await this.baseSellerServer.baseRetrieveSeller(payload);
        if (!seller) {
            return {
                success: false,
                code: 10202
            };
        }
        if (payload.state == '1') {
            let sellerState = await this.baseSellerServer.baseSetSellerState(payload);
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
                html: `<p><img src="http://www.yoboart.com/images/artists-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！您的初始密码为 <span style="font-size: 20px; color: red">123456</span></p><p style="font-size:16px;">您可以点击此链接进行登录<a href="http://www.yoboart.com">http://www.yoboart.com</a></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
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
            let sellerState = await this.baseSellerServer.baseSetSellerState(payload);
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
        const seller = await this.baseSellerServer.baseRetrieveSeller(payload.sellerId);
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
            banner: payload.banner || '',
            choice: payload.choice || false,
            firstname: payload.firstname || '',
            lastname: payload.lastname || '',
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
        const updateSellerMetadata = await this.baseSellerMetadataServer.baseUpdate({
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
        let result = await this.baseSellerServer.baseRetrieveSellerHome(payload);
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
    async choiceSeller(payload) {
        const hotSaleSeller = await this.baseSellerServer.baseChoiceSeller({
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
        const seller = await this.baseSellerServer.baseSellerIdRetrieveSeller(payload);
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
    async retrieveSeller(sellerId) {
        const sellerData = await this.baseSellerServer.baseRetrieveSeller(sellerId);
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
    __metadata("design:type", user_2.BaseUserServer)
], SellerService.prototype, "baseUserServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.BaseSellerServer)
], SellerService.prototype, "baseSellerServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", metadata_1.BaseSellerMetadataServer)
], SellerService.prototype, "baseSellerMetadataServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", resume_1.BaseSellerResumeServer)
], SellerService.prototype, "baseSellerResumeServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", studio_1.BaseSellerStudioServer)
], SellerService.prototype, "baseSellerStudioServer", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsaURBQWtEO0FBSWxELDRDQUFtRDtBQUVuRCxrREFBa0U7QUFDbEUsc0RBQTRFO0FBQzVFLGtEQUF3RTtBQUN4RSxrREFBd0U7QUFFeEUsc0RBQTRFO0FBQzVFLHNEQUE4RTtBQUM5RSx3REFBZ0Y7QUFFaEYsaURBQWdFO0FBSWhFLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFHakMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBSWxCLElBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRixJQUFHLFVBQVUsRUFBRTtnQkFDYixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUE7YUFDRjtTQUNGO1FBSUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pELFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztnQkFDNUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2FBQzNCLENBQUMsQ0FBQTtZQUVGLElBQUcsVUFB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