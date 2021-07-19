import { InformationCommentEntity } from "./comment";
export declare class InformationReplyEntity {
    id: number;
    replyId: string;
    content: string;
    replyUserId: string;
    replyUserName: string;
    userId: string;
    userName: string;
    commentId: string;
    likes: number;
    replyNums: number;
    comment: InformationCommentEntity;
    isShow: boolean;
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
