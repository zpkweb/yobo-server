import PageService from "../page/index";
export declare class BannerService {
    host: any;
    pageService: PageService;
    get(): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
