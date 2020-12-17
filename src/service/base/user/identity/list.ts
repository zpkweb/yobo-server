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
        name: payload.name,
        ename: payload.ename,
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
    return await this.userIdentityListEntity
    .createQueryBuilder('identityList')
    .where("identityList.name = :name", { name: payload.name })
    .orWhere("identityList.ename = :ename", { ename: payload.ename })
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
    return await this.userIdentityListEntity
    .createQueryBuilder()
    .update(UserIdentityListEntity)
    .set({
      name: payload.name,
      ename: payload.ename,
      index: payload.index
    })
    .where("id = :id", { id: payload.id })
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
    .where("name = :name", { name: payload.name })
    .orWhere("ename = :ename", { ename: payload.ename })
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
