import { Repository } from "typeorm";
import { UserEntity } from "../../entity/user/user";
import { UserSellerEntity } from "../../entity/user/seller/seller";
import { UserSellerMetadataEntity } from "../../entity/user/seller/metadata";
import { UserSellerStudioEntity } from "../../entity/user/seller/studio";
import { UserSellerResumeEntity } from "../../entity/user/seller/resume";
import { BaseUserServer } from "../base/user/user";
import { BaseSellerServer } from "../base/user/seller";
export declare class SellerService {
    userEntity: Repository<UserEntity>;
    userSellerEntity: Repository<UserSellerEntity>;
    userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;
    userSellerStudioEntity: Repository<UserSellerStudioEntity>;
    userSellerResumeEntity: Repository<UserSellerResumeEntity>;
    baseUserServer: BaseUserServer;
    baseSellerServer: BaseSellerServer;
    email: any;
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
        data: UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    sellerUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    updateSeller(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    applyList(): Promise<{
        data: [UserSellerEntity[], number];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    search(payload: any): Promise<{
        data: {
            list: UserSellerEntity[];
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
            list: UserSellerEntity[];
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
            list: UserSellerEntity[];
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
        data: UserSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    find(payload: any): Promise<{
        data: UserSellerEntity;
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
}
