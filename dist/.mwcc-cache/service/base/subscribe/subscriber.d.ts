import { Repository } from "typeorm";
import { SubscriberEntity } from "../../../entity/subscribe/subscriber";
export declare class BaseSubscriberServer {
    subscriberEntity: Repository<SubscriberEntity>;
    BaseCreate({ email, userName, userEmail, userPhone }?: {
        email?: string;
        userName?: string;
        userEmail?: string;
        userPhone?: string;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieveEmail(email: any): Promise<SubscriberEntity>;
    BaseRetrieveUserId(userId: any): Promise<SubscriberEntity[]>;
    BaseRetrieveEmailUserId(payload: any): Promise<SubscriberEntity[]>;
    BaseRetrieve(): Promise<SubscriberEntity[]>;
    BaseDeleteEmail(email: any): Promise<import("typeorm").DeleteResult>;
    BaseDeleteUserId(userId: any): Promise<import("typeorm").DeleteResult>;
    BaseDelete(): Promise<import("typeorm").DeleteResult>;
    BaseRelationSet(payload: any): Promise<void>;
}
