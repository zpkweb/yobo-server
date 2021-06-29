import { Inject, Provide } from "@midwayjs/decorator";

import { BaseIdentityService } from 'src/service/base/user/identity';

@Provide()
export class IdentityService {

  @Inject()
  baseIdentityService: BaseIdentityService;

  async create(payload) {
    const data = await this.baseIdentityService.baseCreateUserIdentity(payload.identityIndex);
    if(data) {
      // 关联身份列表
      // await this.baseIdentityService.BaseRelationSet({
      //   name: 'identityList',
      //   of: data.identifiers[0].id,
      //   set: payload.identityIndex
      // })
      // 关联用户
      if(payload.userId) {
        await this.baseIdentityService.BaseRelationSet({
          name: 'user',
          of: data.identifiers[0].id,
          set: { userId: payload.userId }
        })
      }

      return {
        data: data,
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

  async retrieveUserIdentityList(payload) {
    const data = await this.baseIdentityService.baseRetrieveUserIdentityList(payload);
    if(data) {
      return {
        data: data,
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
  async deleteUserIdIdentityId(payload) {
    const data = await this.baseIdentityService.baseDeleteIdentityId(payload);
    console.log("deleteUserIdIdentityId", data)
    if(data.affected) {
      return {
        data: data,
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
