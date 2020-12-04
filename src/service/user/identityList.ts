import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { BaseIdentityListServer } from "../base/identityList";
import { UserIdentityListEntity } from 'src/entity/user/identity/list';

@Provide()
export class IdentityListService extends BaseIdentityListServer {

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  /**
   * 创建身份列表
   * @param payload name index
   */
  async createIdentityList(payload) {
    for (let item of payload) {
      let identity:any = await this.baseRetrieveIdentityList(item);
      if (!identity) {
        let newIdentity = await this.baseCreateIdentityList(item)
        console.log("newIdentity", newIdentity)
        if (!newIdentity.identifiers[0].id) {
          return {
            success: false,
            code: 10004
          }
        }
      }
    }

    const userIdentity = await this.baseRetrieveIdentityListAll();
    if (userIdentity) {
      return {
        data: userIdentity,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }

  }

  /**
   * 查找身份列表
   * @param
   * name
   * ename
   * index
   * id
   */
  async retrieveIdentityList(payload?:any) {
    if(payload && Object.keys(payload).length){
      const retrieveIdentityList =  await this.baseRetrieveIdentityList(payload);
      if(retrieveIdentityList) {
        return {
          data: retrieveIdentityList,
          success: true,
          code: 10009
        }
      }else{
        return {
          success: false,
          code: 10010
        }
      }
    }else{
      const retrieveIdentityListAll =   await this.baseRetrieveIdentityListAll();
      if(retrieveIdentityListAll) {
        return {
          data: retrieveIdentityListAll,
          success: true,
          code: 10009
        }
      }else{
        return {
          success: false,
          code: 10010
        }
      }
    }

  }


  /**
   * 更新身份列表
   * @param payload
   */
  async updateIdentityList(payload) {
    const identityList = await this.baseRetrieveIdentityList(payload);
    if (!identityList) {
      return {
        success: false,
        code: 10202
      }
    }

    const newIdentityList = await this.baseUpdateIdentityList(Object.assign({
      name: identityList.name,
      ename: identityList.ename,
      index: identityList.index,
      id: identityList.id
    }, payload))
    if(newIdentityList.affected){
      return {
        data: newIdentityList,
        success: true,
        code: 10007
      }
    }else{
      return {
        success: false,
        code: 10008
      }
    }
  }



  /**
   * 删除身份列表
   * @param payload
   * name
   * ename
   * index
   * id
   */
  async deleteIdentityList(payload) {
    if(payload && Object.keys(payload).length){
      const identityList = await this.baseDeleteIdentityList(payload);
      if(identityList.affected){
        return {
          data: identityList,
          success: true,
          code: 10005
        }
      }else{
        return {
          success: false,
          code: 10006
        }
      }
    }else{
      const identityListAll = await this.baseDeleteIdentityListAll();
      if(identityListAll.affected){
        return {
          data: identityListAll,
          success: true,
          code: 10005
        }
      }else{
        return {
          success: false,
          code: 10006
        }
      }
    }
  }

}
