import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserIdentityListEntity } from 'src/entity/user/identity/list';

@Provide()
export class IdentityService {

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  /**
   * 创建身份列表
   * @param payload name index
   */
  async createIdentityList(payload:any) {
    console.log("createIdentityList", payload)
    if (payload && payload.length) {
      for (let item of payload) {
        console.log("item", item)
        // 查找身份
        let identityList: any = await this.userIdentityListEntity
          .createQueryBuilder('identityList')
          .where("identityList.name = :name OR identityList.index = :index", { name: item.name, index: item.index })
          .getOne();
        console.log(identityList)

        if (identityList) {
          return "名称或序号存在"
        } else {
          // 创建身份
          await this.userIdentityListEntity
            .createQueryBuilder()
            .insert()
            .into(UserIdentityListEntity)
            .values({
              name: item.name,
              index: item.index
            })
            .execute()
            .then((res) => identityList = res.identifiers[0])


        }
      }
      return await this.userIdentityListEntity
            .createQueryBuilder('identityList')
            .getMany();
    }

  }
  /**
   * 查找身份列表
   * @param id
   */
  async findIdentityList(id) {
    if (id) {
      return await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.id = :id", { id: id })
        .getOne();
    } else {
      return await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .getMany();
    }
  }

  /**
   * 删除身份列表
   * @param id
   */
  async removeIdentityList(id) {
    if (id) {
      await this.userIdentityListEntity
        .createQueryBuilder('user')
        .delete()
        .where("user.id = :id", { id: id })
        .execute();
    } else {
      await this.userIdentityListEntity
        .createQueryBuilder('user')
        .delete()
        .execute();
    }
  }
}
