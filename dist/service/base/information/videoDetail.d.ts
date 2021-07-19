import { Repository } from "typeorm";
import { InformationVideoDetailEntity } from "../../../entity/information/videoDetail";
export declare class BaseInformationVideoDetailService {
    informationVideoDetailEntity: Repository<InformationVideoDetailEntity>;
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
    }): Promise<InformationVideoDetailEntity[]>;
    BaseUpdate({ id, zhcn, enus, jajp, eses, }?: {
        id?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
