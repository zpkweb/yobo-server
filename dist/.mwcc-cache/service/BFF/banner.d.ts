import PageServer from "../page/index";
export declare class BannerService {
    host: any;
    pageServer: PageServer;
    get(): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        success: boolean;
        code: number;
        data: {
            src: string;
            title: string;
            subTitle: string;
        }[];
    }>;
}
