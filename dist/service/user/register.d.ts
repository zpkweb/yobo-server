import { Repository } from 'typeorm';
import { UserEntity } from "../../entity/user/user";
import { UserSellerEntity } from "../../entity/user/seller/seller";
import { UserSellerMetadataEntity } from "../../entity/user/seller/metadata";
import { UserSellerStudioEntity } from "../../entity/user/seller/studio";
import { UserSellerResumeEntity } from "../../entity/user/seller/resume";
import { UserIdentityEntity } from "../../entity/user/identity/identity";
import { UserAdminEntity } from "../../entity/user/admin/admin";
import { UserCustomerServiceEntity } from "../../entity/user/customerService/customerService";
import { BaseUserService } from "../base/user/user";
import { BaseSellerService } from "../base/seller/seller";
import { BaseSellerMetadataService } from "../base/seller/metadata";
import { BaseIdentityListService } from "../base/user/identityList";
export declare class UserRegisterService {
    userEntity: Repository<UserEntity>;
    userSellerEntity: Repository<UserSellerEntity>;
    userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;
    userSellerStudioEntity: Repository<UserSellerStudioEntity>;
    userSellerResumeEntity: Repository<UserSellerResumeEntity>;
    userIdentityEntity: Repository<UserIdentityEntity>;
    userAdminEntity: Repository<UserAdminEntity>;
    userCustomerServiceEntity: Repository<UserCustomerServiceEntity>;
    baseUserService: BaseUserService;
    baseSellerService: BaseSellerService;
    baseSellerMetadataService: BaseSellerMetadataService;
    baseIdentityListService: BaseIdentityListService;
    email: any;
    registerUser(payload: any): Promise<any>;
    applySeller(payload: any): Promise<any>;
    adminRegister(payload: any): Promise<any>;
    adminRegisterUser(payload: any): Promise<any>;
    registerSeller(payload: any): Promise<any>;
    createCustomerService(payload: any): Promise<any>;
    createAdmin(payload: any): Promise<any>;
    createSuperAdmin(payload: any): Promise<any>;
    register(payload: any): Promise<any>;
    hasUser(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasUserName(name: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasUserEmail(email: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    addUser(payload: any, user: any): Promise<{
        userId: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        userId?: undefined;
    }>;
    addUserIdentitys(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    addUserIdentity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    addSeller(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
