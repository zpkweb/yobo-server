import { Context } from 'egg';
import { UserService } from "../../../service/user/user";
export declare class AdminUserController {
    userService: UserService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    pagination: any;
    removeUser(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateUser(updateBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    findUser(findQuery: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    editUser(findQuery: any): Promise<{
        data: import("../../../entity/user/user").UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    searchUser(searchParams: any): Promise<any>;
    deleteUserIdentity(identityDeleteQuery: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
