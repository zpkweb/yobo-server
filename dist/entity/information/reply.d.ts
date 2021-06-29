import { InformationCommentEntity } from "./comment";
export declare class InformationReplyEntity {
    id: number;
    replyId: string;
    content: string;
    replyUser: string;
    userId: string;
    commentId: string;
    comment: InformationCommentEntity;
    isShow: boolean;
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
