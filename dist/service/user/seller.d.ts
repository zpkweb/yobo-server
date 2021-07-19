import { Repository } from "typeorm";
import { UserEntity } from "../../entity/user/user";
import { BaseUserService } from "../base/user/user";
import { BaseSellerService } from "../base/seller/seller";
import { BaseSellerMetadataService } from "../base/seller/metadata";
import { BaseSellerResumeService } from "../base/seller/resume";
import { BaseSellerStudioService } from "../base/seller/studio";
import { CommodityCommodityService } from "../commodity/commodity";
import { CommodityAttributeName } from "../commodity/attribute/name";
import { CommodityAttributePhoto } from "../commodity/attribute/photo";
import { MyLikeSellerService } from "../my/likeSeller";
export declare class SellerService {
    userEntity: Repository<UserEntity>;
    baseUserService: BaseUserService;
    baseSellerService: BaseSellerService;
    baseSellerMetadataService: BaseSellerMetadataService;
    baseSellerResumeService: BaseSellerResumeService;
    baseSellerStudioService: BaseSellerStudioService;
    commodityCommodityService: CommodityCommodityService;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributePhoto: CommodityAttributePhoto;
    myLikeSellerService: MyLikeSellerService;
    email: any;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: {
            sellerId: any;
        };
        success: boolean;
        code: number;
    }>;
    edit(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    find(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    update(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateSellerState(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    sendMailSellerApply(payload: any): Promise<any>;
    adminUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    sellerUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    updateSeller(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    applyList(): Promise<{
        data: [import("../../entity/user/seller/seller").UserSellerEntity[], number];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    search(payload: any): Promise<{
        data: {
            list: import("../../entity/user/seller/seller").UserSellerEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    searchSeller(payload: any): Promise<{
        data: {
            list: import("../../entity/user/seller/seller").UserSellerEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveSellerAll(payload: any): Promise<{
        data: {
            list: import("../../entity/user/seller/seller").UserSellerEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveSellerHome(payload: any): Promise<{
        data: {
            list: import("../../entity/user/seller/seller").UserSellerEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveSellerAllFilter(type: any, payload: any): any;
    hasSeller(sellerId: any): Promise<{
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    choiceSeller(payload: any): Promise<{
        data: import("../../entity/user/seller/seller").UserSellerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    sellerIdFind(payload: any): Promise<{
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    sellerFollowTotal(sellerId: any): Promise<{
        data: number;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteSeller(sellerId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateMetadata(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateResume(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    retrieveSeller(sellerId: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    baseRetrieveSellerCommoditysPhotos(sellerId: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    likes(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
