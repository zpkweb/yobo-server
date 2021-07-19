import { BaseInformationService } from "../base/information/information";
export declare class InformationService {
    baseInformationService: BaseInformationService;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: {
            list: any;
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveName(payload: any): Promise<{
        data: import("../../entity/information/information").InformationEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveInformationId(informationId: any): Promise<{
        data: import("../../entity/information/information").InformationEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveInformationDetail(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    searchInformation(payload: any): Promise<{
        data: {
            list: any;
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    baseDelete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
    relationSet(payload: any): Promise<void>;
    relationAdd(payload: any): Promise<void>;
    relationRemove(payload: any): Promise<void>;
}
