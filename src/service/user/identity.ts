import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';

@Provide()
export class IdentityService {

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  /**
   * 创建身份列表
   * @param payload name index
   */
  async createIdentityList(payload) {
    if (payload && !payload.length) {
      // 身份列表不能为空
      return {
        success: false,
        code: 10301
      }
    }
    for (let item of payload) {
      // 查找身份
      let identityList = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.name = :name OR identityList.index = :index", { name: item.name, index: item.index })
        .getOne();

      if (identityList) {
        // 名称或序号存在
        return {
          success: false,
          code: 11001
        }
      } else {
        // 创建身份
        let newIdentityList = await this.userIdentityListEntity
          .createQueryBuilder()
          .insert()
          .into(UserIdentityListEntity)
          .values({
            name: item.name,
            index: item.index
          })
          .execute();
        if(!newIdentityList.identifiers[0].id){
          // 添加失败
          return {
            success: false,
            code: 10004
          }
        }
      }
    }
    // 返回身份列表
    const userIdentityList =  await this.userIdentityListEntity
      .createQueryBuilder('identityList')
      .getMany();
    if(userIdentityList){
      return{
        data: userIdentityList,
        success: true,
        code: 10009
      }
    }else{
      return{
        success: false,
        code: 10010
      }
    }

  }
  /**
   * 查找身份列表
   * @param id
   */
  async findIdentityList(index) {
    let identityList;
    if (index) {
      // 根据id返回身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", { index: index })
        .getOne();
    } else {
      // 返回身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .getMany();
    }
    if(identityList){

      return{
        data: identityList,
        success: true,
        code: 10009
      }
    }else{
      return{
        success: false,
        code: 10010
      }
    }
  }

  /**
   * 删除身份列表
   * @param id
   */
  async removeIdentityList(index) {
    let identityList;
    if (index) {
      // 根据index删除身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder()
        .delete()
        .where("index = :index", { index: index })
        .execute();
    } else {
      // 删除所有身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder()
        .delete()
        .execute();
    }
    if(identityList){
      return{
        data: identityList,
        success: true,
        code: 10005
      }
    }else{
      return{
        success: false,
        code: 10006
      }
    }
  }

  /**
   * 通过身份查找用户
   * @param id
   */
  async findIdentityUser(id) {
    let identityUser;
    if (id) {
      // 根据身份列表id查询用户
      identityUser = await this.userIdentityEntity
        .createQueryBuilder('identityList')
        .addSelect('createdDate')
        .leftJoinAndSelect('identityList.user', 'user')
        .where("identityList.id = :id", { id: id })
        .getOne();
    } else {
      // 查询有身份的所有用户
      identityUser = await this.userIdentityEntity
        .createQueryBuilder('identityList')
        .addSelect('createdDate')
        .leftJoinAndSelect('identityList.user', 'user')
        .getMany();
    }
    if(identityUser){
      return{
        data: identityUser,
        success: true,
        code: 10009
      }
    }else{
      return{
        success: false,
        code: 10010
      }
    }
  }


}
