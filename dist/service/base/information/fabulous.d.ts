import { Repository } from "typeorm";
import { InformationFabulousEntity } from "../../../entity/information/fabulous";
export declare class BaseInformationFabulousService {
    informationFabulousEntity: Repository<InformationFabulousEntity>;
    BaseCreate({ type, typeId, userId, isCancel, isDelete }?: {
        type?: string;
        typeId?: string;
        userId?: string;
        isCancel?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationFabulousEntity[]>;
    BaseUpdate({ id, type, typeId, userId, isCancel, }?: {
        id?: string;
        type?: string;
        typeId?: string;
        userId?: string;
        isCancel?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
