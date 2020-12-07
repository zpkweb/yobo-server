import { Provide, Config, Inject } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';
import * as nodemailer from 'nodemailer';
import { BaseUserServer } from '../base/user';
import { BaseSellerServer } from "../base/seller";
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
        subject: '恭喜您通过申请',
        html: `<p>恭喜您通过申请！初始密码 <span style="font-size: 18px; color: red">123456</span></p>`
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
        subject: '非常抱歉，您未能通过申请',
        html: `<p>非常抱歉，您未能通过申请！</p>`
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
      password: payload.password || ''
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
  async searchSeller(payload) {
    let seller: any;
    if(payload && Object.keys(payload).length){
      seller = await this.baseSellerServer.baseSearchSeller({
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
        label: payload.label || '',
        gender: payload.gender || '',
        country: payload.country || '',
        state: payload.state || '',
        // email: payload.email || '',
        // phone: payload.phone || '',
      });
    }else{
      seller = await this.baseSellerServer.baseRetrieveSellerAll();
    }

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
