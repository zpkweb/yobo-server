import { Repository } from "typeorm";
import { InformationEntity } from "../../../entity/information/information";
export declare class BaseInformationService {
    informationEntity: Repository<InformationEntity>;
    BaseCreate({ zhcn, enus, jajp, eses, isTop, isDelete }?: {
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
        isTop?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize, news, isTop }?: {
        currentPage?: number;
        pageSize?: number;
        news?: boolean;
        isTop?: boolean;
    }): Promise<[InformationEntity[], number]>;
    BaseRetrieveName({ zhcn, enus, jajp, eses, }?: {
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<InformationEntity>;
    BaseUpdate({ id, zhcn, enus, jajp, eses, isTop }?: {
        id?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
        isTop?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseRelationAdd(payload: any): Promise<void>;
}
