import { InformationVideoEntity } from "./video";
import { InformationReplyEntity } from "./reply";
export declare class InformationCommentEntity {
    id: number;
    commentId: string;
    content: string;
    userId: string;
    videoId: string;
    video: InformationVideoEntity;
    replys: InformationReplyEntity[];
    isShow: boolean;
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
