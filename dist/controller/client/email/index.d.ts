import EmailService from "../../../service/email/index";
export declare class EmailController {
    email: any;
    emailService: EmailService;
    jwt: any;
    jwtConfig: any;
    send(body: any): Promise<{
        success: boolean;
        code: number;
    }>;
    bid(body: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
