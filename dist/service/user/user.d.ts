import { Repository } from 'typeorm';
import { UserEntity } from "../../entity/user/user";
import { BaseUserServer } from "../base/user/user";
export declare class UserService {
    email: any;
    userEntity: Repository<UserEntity>;
    baseUserServer: BaseUserServer;
    getUser(): Promise<number>;
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
        data: UserEntity | UserEntity[];
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
        data: UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    findSelf(userId: any): Promise<{
        data: UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
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
        data?: undefined;
    } | {
        data: UserEntity;
        success: boolean;
        code: number;
    }>;
    deleteUserIdentity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}