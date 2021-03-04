import { IdentityListService } from "../../../service/user/identityList";
export declare class AdminUserIdentityController {
    identityListService: IdentityListService;
    createIdentityList(identityListBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/identity/list").UserIdentityListEntity[];
        success: boolean;
        code: number;
    }>;
    retrieveIdentity(retrieveQuery: any): Promise<{
        data: import("../../../entity/user/identity/list").UserIdentityListEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/identity/list").UserIdentityListEntity[];
        success: boolean;
        code: number;
    }>;
    updateIdentityList(identityListBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/identity/list").UserIdentityListEntity;
        success: boolean;
        code: number;
    }>;
    deleteIdentityList(deleteQuery: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
