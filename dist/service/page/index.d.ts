import { PageBannerServer } from "./banner";
export default class PageServer {
    pageBannerServer: PageBannerServer;
    createBanner(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateBanner(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    getBannerAll(): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    deleteBanner(bannerId: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
