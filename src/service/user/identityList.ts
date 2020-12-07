import { Inject, Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { BaseIdentityListServer } from "../base/identityList";
import { UserIdentityListEntity } from 'src/entity/user/identity/list';

@Provide()
export class IdentityListService {

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  @Inject()
  baseIdentityListServer: BaseIdentityListServer;

  /**
   * 创建身份列表
   * @param payload name index
   */
  async createIdentityList(payload) {
    for (let item of payload) {
      let identity:any = await this.baseIdentityListServer.baseRetrieveIdentityList(item);
      if (!identity) {
        let newIdentity = await this.baseIdentityListServer.baseCreateIdentityList(item)
        console.log("newIdentity", newIdentity)
        if (!newIdentity.identifiers[0].id) {
          return {
            success: false,
            code: 10004
          }
        }
      }
    }

    const userIdentity = await this.baseIdentityListServer.baseRetrieveIdentityListAll();
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
      const retrieveIdentityList =  await this.baseIdentityListServer.baseRetrieveIdentityList(payload);
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
      const retrieveIdentityListAll =   await this.baseIdentityListServer.baseRetrieveIdentityListAll();
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
    const identityList = await this.baseIdentityListServer.baseRetrieveIdentityList(payload);
    if (!identityList) {
      return {
        success: false,
        code: 10202
      }
    }

    const newIdentityList = await this.baseIdentityListServer.baseUpdateIdentityList(Object.assign({
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
      const identityList = await this.baseIdentityListServer.baseDeleteIdentityList(payload);
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
      const identityListAll = await this.baseIdentityListServer.baseDeleteIdentityListAll();
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
