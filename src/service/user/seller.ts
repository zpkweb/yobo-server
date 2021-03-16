import { Provide, Config, Inject } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';
import * as nodemailer from 'nodemailer';
import { BaseUserServer } from '../base/user/user';
import { BaseSellerServer } from "../base/user/seller";
@Provide()
export class SellerService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>;

  @InjectEntityModel(UserSellerMetadataEntity)
  userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;

  @InjectEntityModel(UserSellerStudioEntity)
  userSellerStudioEntity: Repository<UserSellerStudioEntity>;

  @InjectEntityModel(UserSellerResumeEntity)
  userSellerResumeEntity: Repository<UserSellerResumeEntity>;

  @Inject()
  baseUserServer: BaseUserServer;

  @Inject()
  baseSellerServer: BaseSellerServer;

  @Config('email')
  email;



  // 通过艺术家申请 ，发送邮件：账号密码
  /**
   * 修改艺术家状态
   * @param payload
   * 通过申请：发送通过申请邮件 -> 账号密码
   * 拒绝申请：发送拒绝申请邮件
   */
  async updateSellerState(payload) {
    // 查找用户，通过sellerId关联查找user
    const seller = await this.baseSellerServer.baseRetrieveSeller(payload)
    if(!seller){
      return {
        success: false,
        code: 10202
      }
    }
    if(payload.state == '1'){ // 同意申请
      // 更新状态
      let sellerState = await this.baseSellerServer.basseSetSellerState(payload)
      if(!sellerState.affected){
        return {
          success: false,
          code : 10008
        }
      }
      // 设置密码
      const password = await this.baseUserServer.baseUpdateUser({
        userId: seller.user.userId,
        avatar: seller.user.avatar,
        name: seller.user.name,
        email: seller.user.email,
        phone: seller.user.phone,
        password: '123456'
      })
      if(!password.affected){
        return {
          success: false,
          code : 10008
        }
      }

      // 发送邮件
      const sendmail =  await this.sendMailSellerApply({
        ...payload,
        email: seller.user.email,
        subject: 'yobo-审核通过',
        html: `<p>尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！您的初始密码为 <span style="font-size: 18px; color: red">123456</span></p><p>您可以点击此链接进行登录<a href="http://39.105.190.188:8088/">http://39.105.190.188:8088/</a></p><p>我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
      });
      if(sendmail.messageId){
        return {
          success: true,
          code : 10403
        }
      }else{
        return {
          success: false,
          code : 10404
        }
      }

    }else if(payload.state == '2'){ // 拒绝申请
      // 更新状态
      let sellerState = await this.baseSellerServer.basseSetSellerState(payload)

      console.log("seller", sellerState)

      if(!sellerState.affected){
        return {
          success: false,
          code : 10008
        }
      }

      // 发送邮件
      const sendmail = await this.sendMailSellerApply({
        ...payload,
        email: seller.user.email,
        subject: 'yobo-审核未通过',
        html: `<p>尊贵的阁下，抱歉您提交的信息未通过审核，请完善或修改信息后重新提交申请。</p><p>永宝YOBOART期待您的加入！</p>`
      });
      if(sendmail.messageId){
        return {
          success: true,
          code : 10409
        }
      }else{
        return {
          success: false,
          code : 10410
        }
      }
    }
  }

  // 发送邮件
  async sendMailSellerApply(payload){
    // 发送邮件
    let transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      service: this.email.service,
      port: 465,
      secureConnection: true,
      auth: {
        user: this.email.user,
        pass: this.email.pass
      },
    });

    // send mail with defined transport object
    return  await transporter.sendMail({
      from: this.email.user,
      to: payload.email,
      subject: payload.subject,
      html: payload.html

    });


  }



  /**
   *  管理员 更新艺术家资料
   * @param payload
   */
  async adminUpdate(payload) {
    return await this.updateSeller(payload);
  }

  /**
   * 艺术家 更新个人资料
   * @param payload
   */
  async sellerUpdate(payload) {
    return await this.updateSeller(payload);
  }

  async updateSeller(payload){
    // 查找艺术家
    const seller = await this.baseSellerServer.baseRetrieveSeller(payload);
    if(!seller){
      return {
        success: false,
        code: 10202
      }
    }
    console.log("update seller ", seller)
    // 更新用户
    const user = await this.baseUserServer.baseUpdateUser({
      userId: seller.user.userId,
      name: payload.firstname + payload.lastname || '',
      email: payload.email || '',
      phone: payload.phone || '',
      password: payload.password || '',
      avatar: payload.avatar || '',
    })
    if(!user.affected){
      return {
        success: false,
        code: 10008
      };
    }
    // 更新商家
    const updateSeller = await this.baseSellerServer.baseUpdateSeller({
      sellerId: seller.sellerId,
      state: payload.state || 0,
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      tags: payload.tags || '',
      label: payload.label || '',
      gender: payload.gender || '',
      country: payload.country || ''
    })
    if(!updateSeller.affected){
      return {
        success: false,
        code: 10008
      };
    }
    // 更新商家基本信息
    const updateSellerMetadata = await this.baseSellerServer.baseUpdateSellerMetadata({
      sellerId: seller.sellerId,
      language: payload.language || '',
      findUs: payload.findUs || '',
      isFullTime: payload.isFullTime || '',
      onlineSell: payload.onlineSell || '',
      sold: payload.sold || '',
      channel: payload.channel || '',
      gallery: payload.gallery || '',
      medium: payload.medium || '',
      galleryInfo: payload.galleryInfo || '',
      recommend: payload.recommend || '',
      prize: payload.prize || '',
      website: payload.website || '',
      profile: payload.profile || ''
    })
    if(!updateSellerMetadata.affected){
      return {
        success: false,
        code: 10008
      };
    }
    return {
      data: seller,
      success: true,
      code: 10007
    };
  }


  // 查找艺术家申请列表
  async applyList () {
    const applyList =  await this.baseSellerServer.baseSearchSeller({
      state: 0
    })

    if(applyList){
      return {
        data: applyList,
        success: true,
        code : 10009
      }
    }else{
      return {
        success: false,
        code : 10010
      }
    }
  }


  /**
   * 搜索艺术家
   * @param payload
   */

   async search(payload) {
     const { locale, currentPage, pageSize, ...searchData } = payload;
     if(searchData && Object.keys(searchData).length) {
       return this.searchSeller(payload)
     }else{
      return this.retrieveSellerAll(payload)
     }
   }

  async searchSeller(payload) {
    let result = await this.baseSellerServer.baseSearchSeller(payload);
      console.log("searchSeller result", result)
      let data = result[0];
      let total = result[1];
      if (data) {
        return {
          data: {
            list: data,
            total
          },
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

  async retrieveSellerAll(payload) {
    let result = await this.baseSellerServer.baseRetrieveSellerAll(payload);
      console.log("searchSeller", result)
      let data = result[0];
      let total = result[1];

      if(payload.isLocale){
        data = this.retrieveSellerAllFilter(payload.locale, data)
      }
      console.log("searchSellerFilter", data)
      if (data) {
        return {
          data: {
            list: data,
            total
          },
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

  retrieveSellerAllFilter(type, payload) {
    return payload.map(item => {
        return Object.assign(item, {commodityName: item.commodityName && item.commodityName[type] ? item.commodityName[type] : ''})


    })
  }

  /**
   * 查找艺术家是否存在
   * @param sellerId
   */
  async hasSeller(sellerId) {
    const seller =  await this.baseSellerServer.BaseHas(sellerId)
      if(seller){
        return {
          data: seller,
          success: true,
          code : 10411
        }
      }else{
        return {
          success: false,
          code : 10412
        }
      }
  }

  /**
   * 查找艺术家个人信息
   * @param payload
   */
  async find(payload) {
    // const user = await this.userEntity
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.seller', 'seller')
    //   .leftJoinAndMapOne('user.sellerMetadata', UserSellerMetadataEntity, 'sellerMetadata', 'sellerMetadata.sellerId = :sellerId', { sellerId: payload.sellerId})
    //   .where('user.userId = :userId', { userId : payload.userId })
    //   .getOne();
    const seller = await this.baseSellerServer.baseRetrieveSeller(payload);

      if(seller){
        return {
          data: seller,
          success: true,
          code : 10009
        }
      }else{
        return {
          success: false,
          code : 10010
        }
      }
  }



  /**
   * 删除艺术家
   * @param payload
   */
  async deleteSeller(sellerId) {
    console.log("deleteSeller", sellerId)
    const seller = await this.baseSellerServer.baseDeleteSeller(sellerId);
    if(seller.affected){

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

}
