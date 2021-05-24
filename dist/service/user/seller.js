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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThEO0FBQzlELHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsaURBQWtEO0FBSWxELDRDQUFtRDtBQUVuRCxrREFBa0U7QUFDbEUsc0RBQTRFO0FBQzVFLGtEQUF3RTtBQUN4RSxrREFBd0U7QUFFeEUsc0RBQTRFO0FBQzVFLHNEQUE4RTtBQUM5RSx3REFBZ0Y7QUFFaEYsaURBQWdFO0FBSWhFLHlDQUF5QztBQUN6QyxpQ0FBaUM7QUFHakMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBSWxCLElBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRixJQUFHLFVBQVUsRUFBRTtnQkFDYixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUE7YUFDRjtTQUNGO1FBSUMsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pELFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7YUFDbEMsQ0FB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