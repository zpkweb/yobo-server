import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserIdentityEntity } from 'src/entity/user/identity/identity';


@Provide()
export class BaseIdentityService {


  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;


  /**
   * 添加用户身份
   * @param payload
   */
   async baseCreateUserIdentity(index) {
    return await this.userIdentityEntity
      .createQueryBuilder()
      .insert()
      .into(UserIdentityEntity)
      .values({
        identityIndex: index
      })
      .execute()
  }
  /**
   * 查询用户身份
   * @param payload
   */
   async baseRetrieveUserIdentity(userId) {
    return await this.userIdentityEntity
    .createQueryBuilder('userIdentity')
    .where('userIdentity.userId = :userId', { userId: userId })
    // .andWhere("userIdentity.zh-cn = :zhcn", { zhcn: payload.zhcn })
    .getMany();
  }

  async baseRetrieveIdentityUserId(userId) {
    return await this.userIdentityEntity
      .createQueryBuilder('identity')
      // .innerJoinAndSelect('identity.identityList', 'identityList')
      .where('identity.userId = :userId', { userId: userId })
      .getMany();

  }
  // 通过userId和identityIndex查询
  async baseRetrieveUserIdentityList(payload) {
    return await this.userIdentityEntity
    .createQueryBuilder('userIdentity')
    .where('userIdentity.userId = :userId', { userId: payload.userId })
    .andWhere("userIdentity.identityIndex = :identityIndex", { identityIndex: payload.identityIndex })
    .getOne();
  }

  /**
   * 删除用户身份
   * @param payload
   */
    async baseDeleteUserIdentity(payload) {
      return await this.userIdentityEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: payload.userId })
      // .orWhere("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
      // .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
      // .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
      // .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
      // .orWhere("identityList.es-es = :eses", { eses: payload['es-es'] })
      .execute();
    }

    async baseDeleteIdentityId(payload) {
      return await this.userIdentityEntity
      .createQueryBuilder()
      .delete()
      .where('userId = :userId', { userId: payload.userId })
      .andWhere("identityIndex = :identityIndex", { identityIndex: payload.identityIndex })
      .execute();
    }

    // 关联用户

    async BaseRelationSet(payload) {
      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, payload.name)
        .of(payload.of)
        .set(payload.set);
    }


}
