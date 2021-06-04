import EmailService from "../../../service/email/index";
export declare class AdminEmailController {
    email: any;
    emailService: EmailService;
    jwt: any;
    jwtConfig: any;
    send(body: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
