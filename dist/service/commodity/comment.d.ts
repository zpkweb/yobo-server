export declare class CommentService {
    host: any;
    home(payload: any): Promise<{
        success: boolean;
        code: number;
        data: {
            id: number;
            src: string;
            star: number;
            title: string;
            desc: string;
        }[];
    }>;
}
