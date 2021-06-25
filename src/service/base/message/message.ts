import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { MessageEntity } from "src/entity/message/message";
import { Like, Repository } from "typeorm";

@Provide()
export class BaseMessageService {

  @InjectEntityModel(MessageEntity)
  messageEntity: Repository<MessageEntity>;

  async BaseCreate(payload) {
    return this.messageEntity
      .createQueryBuilder()
      .insert()
      .into(MessageEntity)
      .values({
        ...payload,
        isDelete: false
      })
      .execute();
  }

  async BaseRetrieveMessageId(messageId) {
    return this.messageEntity
      .createQueryBuilder()
      .where('messageId = :messageId', { messageId : messageId })
      .getOne();
  }

  async BaseRetrieveAll(payload){
    return this.messageEntity
      .createQueryBuilder('message')
      .where('message.isDelete = :isDelete', { isDelete: false })
      .addSelect('message.createdDate')
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  async BaseSearch(payload) {
    let where:any = {
      isDelete: false
    };
    if(payload.type){
      where.type = payload.type;
    }
    if(payload.owner){
      where.owner = payload.owner;
    }
    if(payload.title){
      where.title =Like(`%${payload.title}%`);

    }
    if(payload.content){
      where.content =Like(`%${payload.content}%`);
    }



    return this.messageEntity
      .createQueryBuilder('message')
      .where(where)
      .addSelect('message.createdDate')
      .orderBy("message.id", payload.news && payload.news =='true' ? "DESC"  :  "ASC")
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  async BaseDelete(messageId) {
    return this.messageEntity
      .createQueryBuilder('message')
      .update(MessageEntity)
      .set({
        isDelete: true
      })
      .where('message.messageId = :messageId', { messageId : messageId })
      .execute();
  }



}
