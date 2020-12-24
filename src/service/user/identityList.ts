import { Inject, Provide } from "@midwayjs/decorator";
import { BaseIdentityListServer } from "../base/user/identity/list";
@Provide()
export class IdentityListService {


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
        let newIdentity = await this.baseIdentityListServer.baseCreateIdentityList({
          "zh-cn": item['zh-cn'] || '',
          "en-us": item['en-us'] || '',
          "ja-jp": item['ja-jp'] || '',
          "fr-fr": item['fr-fr'] || '',
          "index": item.index || '',
          "menu": item.menu || ''
        })
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
    console.log("updateIdentityList", payload)
    const identityList = await this.baseIdentityListServer.baseRetrieveIdentityList({
      "zh-cn": payload['zh-cn'] || '',
      "en-us": payload['en-us'] || '',
      "ja-jp": payload['ja-jp'] || '',
      "fr-fr": payload['fr-fr'] || '',
      index: payload.index || '',
      id: payload.id || ''
    });
    console.log("identityList", identityList)
    if (!identityList) {
      return {
        success: false,
        code: 10202
      }
    }

    const newIdentityList = await this.baseIdentityListServer.baseUpdateIdentityList(Object.assign({
      "zh-cn": identityList['zh-cn'] || '',
      "en-us": identityList['en-us'] || '',
      "ja-jp": identityList['ja-jp'] || '',
      "fr-fr": identityList['fr-fr'] || '',
      index: identityList.index,
      menu: identityList.menu,
      id: identityList.id
    }, payload))
    console.log("newIdentityList", newIdentityList)
    if(newIdentityList.affected){
      const identityList = await this.baseIdentityListServer.baseRetrieveIdentityList({
        "zh-cn": payload['zh-cn'] || '',
        "en-us": payload['en-us'] || '',
        "ja-jp": payload['ja-jp'] || '',
        "fr-fr": payload['fr-fr'] || '',
        index: payload.index || '',
        id: payload.id || ''
      });
      return {
        data: identityList,
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
