import { BaseIdentityServer } from "../base/user/identity";
export declare class IdentityService {
    baseIdentityServer: BaseIdentityServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveUserIdentityList(payload: any): Promise<{
        data: import("../../entity/user/identity/identity").UserIdentityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteUserIdIdentityId(payload: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
