/**
 * 用户订阅
 */

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { SubscriberEntity } from "src/entity/subscribe/subscriber"

@Provide()
export class BaseSubscriberServer {

  @InjectEntityModel(SubscriberEntity)
  subscriberEntity: Repository<SubscriberEntity>;

  /**
   * 创建
   *
   * @param {*} payload
   * @memberof BaseSubscriberServer
   */
  async BaseCreate({
    email = '',
    userName = '',
    userEmail = '',
    userPhone = ''
  } = {}) {
    return await this.subscriberEntity
      .createQueryBuilder()
      .insert()
      .into(SubscriberEntity)
      .values({
        email,
        userName,
        userEmail,
        userPhone
      })
      .execute();
  }

  async BaseRetrieveEmail(email) {
    console.log("BaseRetrieveEmail", email)
    return await this.subscriberEntity
      .createQueryBuilder('subscriber')
      .where("subscriber.email = :email", { email })
      .getOne();
  }

  async BaseRetrieveUserId(userId) {
    return await this.subscriberEntity
      .createQueryBuilder('subscriber')
      .where("subscriber.userId = :userId", { userId })
      .getMany();
  }

  async BaseRetrieveEmailUserId(payload) {
    return await this.subscriberEntity
      .createQueryBuilder('subscriber')
      .where("subscriber.email = :email", { email: payload.email })
      .andWhere("subscriber.userId = :userId", { userId: payload.userId })
      .getMany();
  }

  async BaseRetrieve() {
    return await this.subscriberEntity
      .createQueryBuilder()
      .getMany();
  }

  async BaseDeleteEmail(email) {
    return await this.subscriberEntity
      .createQueryBuilder('subscriber')
      .delete()
      .where("subscriber.email = :email", { email })
      .execute();
  }

  async BaseDeleteUserId(userId) {
    return await this.subscriberEntity
      .createQueryBuilder("subscriber")
      .delete()
      .where("subscriber.userId = :userId", { userId })
      .execute();

  }

  async BaseDelete() {
    return await this.subscriberEntity
      .createQueryBuilder()
      .delete()
      .execute();

  }

  async BaseRelationSet(payload) {
    await this.subscriberEntity
      .createQueryBuilder()
      .relation(SubscriberEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

}
