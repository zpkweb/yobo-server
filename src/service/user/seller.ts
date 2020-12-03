import { Provide, Config } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
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

  @Config('email')
  email;

  async getSeller(sellerId) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    .leftJoinAndSelect('seller.user', 'user')
    .leftJoinAndSelect('seller.metadata', 'metadata')
    .where('seller.sellerId = :sellerId', { sellerId: sellerId })
    .getOne();
  }

  // 通过艺术家申请 ，发送邮件：账号密码
  /**
   * 修改艺术家状态
   * @param payload
   * 通过申请：发送通过申请邮件 -> 账号密码
   * 拒绝申请：发送拒绝申请邮件
   */
  async updateSellerState(payload) {
    // 查找用户，通过sellerId关联查找user
    const seller = await this.getSeller(payload.sellerId)
    if(!seller){
      return {
        success: false,
        code: 10202
      }
    }
    if(payload.state == '1'){ // 同意申请

      // 设置密码
      const password = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({
        password: crypto.createHash('md5').update('123456').digest('hex')
      })
      .where("userId = :userId", { userId: seller.user.userId })
      .execute();
      if(!password.affected){
        return {
          success: false,
          code : 10008
        }
      }
      // 更新状态
      let sellerState = await this.setSellerState(payload.sellerId, 1)

      console.log("seller", sellerState)

      if(!sellerState.affected){
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
      let sellerState = await this.setSellerState(payload.sellerId, 2)

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
  // 设置状态
  async setSellerState(sellerId, state) {
    return await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set({
        state
      })
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute()

  }
  // 发送邮件
  async sendMailSellerApply(payload){
    console.log("sendMail", payload, this.email)
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
    // 更新用户
    const user = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({
        name: payload.name || '',
        email: payload.email || '',
        phone: payload.phone || ''
      })
      .where("userId = :userId", { userId: payload.userId })
      .execute();
    if(!user.affected){
      return {
        success: false,
        code : 10008
      }
    }

    // 更新艺术家
    let seller = await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set({
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
        label: payload.label || '',
        gender: payload.gender || '',
        country: payload.country || ''
      })
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute()
      console.log("seller", seller)

    if(!seller.affected){
      return {
        success: false,
        code : 10008
      }
    }
    // 更新艺术家基本信息
    let sellerMetadata = await this.userSellerMetadataEntity
        .createQueryBuilder()
        .update(UserSellerMetadataEntity)
        .set({
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
        .where("sellerId = :sellerId", { sellerId: payload.sellerId })
        .execute()
        console.log("sellerMetadata", sellerMetadata)
      if(!sellerMetadata.affected){
        return {
          success: false,
          code : 10008
        }
      }
    if(user){
      return {
        success: true,
        code : 10007
      }
    }
  }

  /**
   * 艺术家 更新个人资料
   * @param payload
   */
  async update(payload) {

    // 查找艺术家
    const seller = await this.getSeller(payload.sellerId)
    if(!seller){
      return {
        success: false,
        code: 10202
      }
    }


    // 更新用户
    const updateUser = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      // .set({
      //   name: payload.name || seller.name,
      //   email: payload.email || '',
      //   phone: payload.phone || ''
      // })
      .set(Object.assign({
        name: seller.user.name,
        email: seller.user.email,
        phone: seller.user.phone,
      },{
        name: payload.firstname + payload.lastname,
        email: payload.email,
        phone: payload.phone,
        password: crypto.createHash('md5').update(payload.password).digest('hex')
      }))
      .where("userId = :userId", { userId: seller.user.userId })
      .execute();
    if(!updateUser.affected){
      return {
        success: false,
        code : 10008
      }
    }

    // 更新艺术家
    let updateSeller = await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set(Object.assign({
        state: seller.state,
        firstname: seller.firstname,
        lastname: seller.lastname,
        label: seller.label,
        gender: seller.gender,
        country: seller.country
      },{
        state: payload.state,
        firstname: payload.firstname,
        lastname: payload.lastname,
        label: payload.label,
        gender: payload.gender,
        country: payload.country
      }))
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute()
      console.log("seller", updateSeller)

    if(!updateSeller.affected){
      return {
        success: false,
        code : 10008
      }
    }

    // 更新艺术家基本信息
    let sellerMetadata = await this.userSellerMetadataEntity
        .createQueryBuilder()
        .update(UserSellerMetadataEntity)
        .set(Object.assign({
          findUs: seller.metadata.findUs,
          isFullTime: seller.metadata.isFullTime,
          onlineSell: seller.metadata.onlineSell,
          sold: seller.metadata.sold,
          channel: seller.metadata.channel,
          gallery: seller.metadata.gallery,
          medium: seller.metadata.medium,
          galleryInfo: seller.metadata.galleryInfo,
          recommend: seller.metadata.recommend,
          prize: seller.metadata.prize,
          website: seller.metadata.website,
          profile: seller.metadata.profile
        },{
          findUs: payload.findUs,
          isFullTime: payload.isFullTime,
          onlineSell: payload.onlineSell,
          sold: payload.sold,
          channel: payload.channel,
          gallery: payload.gallery,
          medium: payload.medium,
          galleryInfo: payload.galleryInfo,
          recommend: payload.recommend,
          prize: payload.prize,
          website: payload.website,
          profile: payload.profile
        }))
        .where("sellerId = :sellerId", { sellerId: payload.sellerId })
        .execute()
        console.log("sellerMetadata", sellerMetadata)
      if(!sellerMetadata.affected){
        return {
          success: false,
          code : 10008
        }
      }
      const newSeller = await this.getSeller(payload.sellerId)
      if(newSeller){
        return {
          data: newSeller,
          success: true,
          code : 10007
        }
      }
  }


  // 查找艺术家申请列表
  async applyList (payload) {
    const applyList =  await this.userSellerEntity
      .createQueryBuilder('seller')
      .where('seller.state = :state', { state: 0 })
      .getMany();
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
    let seller: UserSellerEntity | UserSellerEntity[];
    if(payload.firstname || payload.lastname || payload.email || payload.phone || payload.label || payload.gender || payload.country || payload.state ){
      seller = await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .addSelect('seller.createdDate')
      .where("seller.firstname like :firstname", { firstname: `%${payload.firstname}%` })
      .andWhere("seller.lastname like :lastname", { lastname: `%${payload.lastname}%` })
      .andWhere("seller.label like :label", { label: `%${payload.label}%` })
      .andWhere("seller.gender like :gender", { gender: `%${payload.gender}%` })
      .andWhere("seller.country like :country", { country: `%${payload.country}%` })
      .andWhere("seller.state like :state", { state: `%${payload.state}%` })
      .andWhere("user.email like :email", { email: `%${payload.email}%` })
      .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
      .getMany();
    }else{
      seller = await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .addSelect('seller.createdDate')
      .getMany();
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

    // const seller = await this.userSellerEntity
    //   .createQueryBuilder('seller')
    //   .leftJoinAndSelect('seller.user', 'user')
    //   .leftJoinAndSelect('seller.metadata', 'metadata')
    //   .where('seller.sellerId = :sellerId', { sellerId: payload.sellerId })
    //   .getOne();

    const user = await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.seller', 'seller')
      .leftJoinAndMapOne('user.sellerMetadata', UserSellerMetadataEntity, 'sellerMetadata', 'sellerMetadata.sellerId = :sellerId', { sellerId: payload.sellerId})
      .where('user.userId = :userId', { userId : payload.userId })
      .getOne();

      if(user){
        return {
          data: user,
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
  async remove(payload) {
    const seller = await this.userSellerEntity
      .createQueryBuilder('seller')
      .delete()
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute();


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
