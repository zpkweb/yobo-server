import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
@Provide()
export class BaseIdentityListServer {

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  /**
   * 增加
   * @param payload
   * name
   * ename
   * index
   */
  async baseCreateIdentityList(payload) {
    return await this.userIdentityListEntity
      .createQueryBuilder()
      .insert()
      .into(UserIdentityListEntity)
      .values({
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr'],
        menu: payload.menu,
        index: payload.index
      })
      .execute();
  }

  /**
   * 检索
   * @param payload
   * name
   * ename
   * index
   * id
   */
  async baseRetrieveIdentityList(payload) {
    console.log("baseRetrieveIdentityList", payload)
    return await this.userIdentityListEntity
    .createQueryBuilder('identityList')
    .where("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
    .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
    .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
    .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
    .orWhere("identityList.index = :index", { index: payload.index })
    .orWhere("identityList.id = :id", { id: payload.id })
    .getOne();
  }

  async baseRetrieveIdentityListAll() {
    return await this.userIdentityListEntity
    .createQueryBuilder()
    .getMany();
  }

  /**
   * 更新
   * @param payload
   */
  async baseUpdateIdentityList(payload) {
    const { id, ...setData } = payload;
    return await this.userIdentityListEntity
    .createQueryBuilder()
    .update(UserIdentityListEntity)
    // .set({
    //   'zh-cn': payload['zh-cn'],
    //   'en-us': payload['en-us'],
    //   'ja-jp': payload['ja-jp'],
    //   'fr-fr': payload['fr-fr'],
    //   menu: payload.menu,
    //   index: payload.index
    // })
    .set(setData)
    .where("id = :id", { id: id })
    .execute();
  }

  /**
   * 删除
   * @param payload
   * name
   * ename
   * index
   * id
   */
  async baseDeleteIdentityList(payload) {
    return await this.userIdentityListEntity
    .createQueryBuilder()
    .delete()
    .where("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
    .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
    .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
    .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
    .orWhere("index = :index", { index: payload.index })
    .orWhere("id = :id", { id: payload.id })
    .execute();
  }

  async baseDeleteIdentityListAll() {
    return await this.userIdentityListEntity
    .createQueryBuilder()
    .delete()
    .execute();
  }




}
