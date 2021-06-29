import { Repository } from "typeorm";
import { InformationDetailEntity } from "../../../entity/information/detail";
export declare class BaseInformationDetailService {
    informationDetailEntity: Repository<InformationDetailEntity>;
    BaseCreate({ zhcn, enus, jajp, eses, isDelete }?: {
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationDetailEntity[]>;
    BaseUpdate({ id, zhcn, enus, jajp, eses, }?: {
        id?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
