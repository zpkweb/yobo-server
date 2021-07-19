import { ServiceInformation } from "../../../service/information/index";
export declare class adminInformatinVideoController {
    serviceInformation: ServiceInformation;
    pagination: any;
    createInformation(createBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    }>;
    informationList(findParams: any): Promise<any>;
    informationFind(query: any): Promise<any>;
    updateInformation(updateBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    searchInformation(searchQuery: any): Promise<any>;
    deleteInformation(query: any): Promise<{
        success: boolean;
        code: number;
    }>;
    informationFindVideoId(videoId: any): Promise<any>;
}
