export default class EmailService {
    email: any;
    send(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    bid(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
