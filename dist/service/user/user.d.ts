import { Repository } from 'typeorm';
import { UserEntity } from "../../entity/user/user";
import { BaseUserService } from "../base/user/user";
import { BaseIdentityService } from "../base/user/identity";
import { IdentityService } from "./identity";
export declare class UserService {
    email: any;
    userEntity: Repository<UserEntity>;
    baseUserService: BaseUserService;
    baseIdentityService: BaseIdentityService;
    identityService: IdentityService;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    search(payload: any): Promise<{
        data: {
            list: UserEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: UserEntity[];
        success: boolean;
        code: number;
    }>;
    find(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveUserId(userId: any): Promise<{
        data: UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    edit(userId: any): Promise<{
        data: UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    remove(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    findInfo(userId: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    hasUser(userId: any): Promise<{
        data: UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    changePassword(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    passwordRetrieveCodeSend(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: UserEntity;
        success: boolean;
        code: number;
    }>;
    passwordRetrieveCodeVerify(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    update(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    deleteUserIdentity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
