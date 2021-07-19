import { Repository } from "typeorm";
import { InformationLikesEntity } from "../../../entity/information/likes";
export declare class BaseInformationLikesService {
    informationLikesEntity: Repository<InformationLikesEntity>;
    BaseCreate({ type, typeId, userId, userName, isCancel, isDelete }?: {
        type?: string;
        typeId?: string;
        userId?: string;
        userName?: string;
        isCancel?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationLikesEntity[]>;
    BaseUpdate({ id, type, typeId, userId, userName, isCancel, }?: {
        id?: string;
        type?: string;
        typeId?: string;
        userId?: string;
        userName?: string;
        isCancel?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
