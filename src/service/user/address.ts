import { Provide, Inject } from "@midwayjs/decorator";
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserAddressEntity } from 'src/entity/user/address';
import { BaseUserServer } from '../base/user/user';

@Provide()
export default class UserAddressService {

  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  @Inject()
  baseUserServer: BaseUserServer;

  /**
   * 创建用户地址
   * @param payload
   */
  async create(payload) {
    let address = await this.baseUserServer.baseCreateUserAddress(payload);
    console.log("create address", address)
    if(address.identifiers[0].id){

      await this.userAddressEntity
        .createQueryBuilder()
        .relation(UserAddressEntity, "user")
        .of(address.identifiers[0].id)
        .set({userId: payload.userId})

      let userAddress = await this.baseUserServer.baseRetrieveUserAddress(payload.userId);
      if(userAddress){
        return {
          data: userAddress,
          success: true,
          code : 10003
        }
      }else{
        return{
          success: false,
          code: 10010
        }
      }

    }else{
      return {
        success: false,
        code : 10004
      }
    }


  }

  /**
   * 获取用户地址
   * @param payload
   */
  async retrieve(userId) {
    const address =  await this.baseUserServer.baseRetrieveUserAddress(userId);
    if(address){
      return{
        data: address,
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

  async update(payload) {
    console.log("update", payload)
    const address = await this.baseUserServer.baseUpdateUserAddress({
      name: payload.name || '',
      phone: payload.phone || '',
      country: payload.country || '',
      city: payload.city || '',
      address: payload.address || '',
      userId: payload.userId || ''
    })
      if(address.affected){
        let user = await this.baseUserServer.baseRetrieveUserAddress(payload.userId)
        if(user){
          return {
            data: user,
            success: true,
            code : 10007
          }
        }else{
          return{
            success: false,
            code: 10010
          }
        }

      }else{
        return {
          success: false,
          code : 10008
        }
      }
  }



  /**
   * 删除用户地址
   * @param payload
   */
  async remove(userId) {
    const address = await this.baseUserServer.baseDeleteUserAddress(userId);
      if(address.affected){
        return {
          success: true,
          code : 10005
        }
      }else{
        return {
          success: false,
          code : 10006
        }
      }
  }



  /**
   * 更新用户地址
   * @param payload
   */
  async updateAddress(payload) {
    console.log("addressUpdate", payload)
    let updateAddress:any;
    // 获取用户地址
    const userAddress = await this.retrieve(payload.userId);
    console.log("userAddress", userAddress)
    if(userAddress.success){
      // 更新
      updateAddress = await this.update({
        name: payload.name || payload.firstname + payload.lastname || '',
        phone: payload.phone || '',
        country: payload.country || '',
        city: payload.city || '',
        address: payload.detail || '',
        userId: payload.userId || ''
      })
      console.log("updateAddress", updateAddress)
      if(!updateAddress.success) {
        return updateAddress;
      }


    }else{
      // 创建
      updateAddress = await this.create({
        name: payload.name || '',
        phone: payload.phone || '',
        country: payload.country || '',
        city: payload.city || '',
        address: payload.detail || '',
        userId: payload.userId || ''
      });
      console.log("createAddress", updateAddress)
      if(!updateAddress.success) {
        return updateAddress;
      }
    }
    return updateAddress;

  }


}
