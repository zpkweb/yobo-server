import { BaseIdentityListServer } from "../base/user/identity/list";
export declare class IdentityListService {
    baseIdentityListServer: BaseIdentityListServer;
    createIdentityList(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/identity/list").UserIdentityListEntity[];
        success: boolean;
        code: number;
    }>;
    retrieveIdentityList(payload?: any): Promise<{
        data: import("../../entity/user/identity/list").UserIdentityListEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/identity/list").UserIdentityListEntity[];
        success: boolean;
        code: number;
    }>;
    updateIdentityList(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/identity/list").UserIdentityListEntity;
        success: boolean;
        code: number;
    }>;
    deleteIdentityList(payload: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
