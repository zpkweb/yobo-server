import { BaseSubscriberServer } from "../base/subscribe/subscriber";
import { UserService } from "../user/user";
export declare class SubscriberServer {
    baseSubscriberServer: BaseSubscriberServer;
    userService: UserService;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    retrieve({ email, userId }?: {
        email?: string;
        userId?: string;
    }): Promise<{
        data: import("../../entity/subscribe/subscriber").SubscriberEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/subscribe/subscriber").SubscriberEntity[];
        success: boolean;
        code: number;
    }>;
    retrieveEmail(email: any): Promise<{
        data: import("../../entity/subscribe/subscriber").SubscriberEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveUserId(userId: any): Promise<{
        data: import("../../entity/subscribe/subscriber").SubscriberEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveEmailUserId(payload: any): Promise<{
        data: import("../../entity/subscribe/subscriber").SubscriberEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveAll(): Promise<{
        data: import("../../entity/subscribe/subscriber").SubscriberEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete({ email, userId }?: {
        email?: string;
        userId?: string;
    }): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteEmail(email: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteUserId(userId: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteAll(): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
