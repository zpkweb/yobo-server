import { Repository } from "typeorm";
import { UserEntity } from "../../entity/user/user";
import { BaseUserService } from "../base/user/user";
import { IdentityListService } from "./identityList";
export declare class LoginService {
    userEntity: Repository<UserEntity>;
    baseUserService: BaseUserService;
    identityListService: IdentityListService;
    root: any;
    validatePassword(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    login(payload: any): Promise<{
        success: boolean;
        code: number;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    adminLogin(payload: any): Promise<any>;
}
