import { Inject, Provide } from "@midwayjs/decorator";

import { BaseIdentityServer } from 'src/service/base/user/identity';

@Provide()
export class IdentityService {

  @Inject()
  baseIdentityServer: BaseIdentityServer;

  async create(payload) {
    const data = await this.baseIdentityServer.baseCreateUserIdentity(payload.identityIndex);
    if(data) {
      // 关联身份列表
      await this.baseIdentityServer.BaseRelationSet({
        name: 'identityList',
        of: data.identifiers[0].id,
        set: payload.identityIndex
      })
      // 关联用户
      if(payload.userId) {
        await this.baseIdentityServer.BaseRelationSet({
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
    const data = await this.baseIdentityServer.baseRetrieveUserIdentityList(payload);
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
    const data = await this.baseIdentityServer.baseDeleteIdentityId(payload);
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
