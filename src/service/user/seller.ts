import { Provide } from "@midwayjs/decorator";
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

  // 查找艺术家申请列表
  async registerList (payload) {
    const registerlist =  await this.userSellerEntity
      .createQueryBuilder('seller')
      .where('seller.state = :state', { state: 0 })
      .getMany();
    if(registerlist){
      return {
        data: registerlist,
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

  // 通过艺术家申请 ，发送邮件：账号密码
  async register(payload){
    // 更新用户
    const user = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({
        password: crypto.createHash('md5').update('123456').digest('hex')
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
        state: 1
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
    let transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      service: payload.service,
      port: 465,
      secureConnection: true,
      auth: {
        user: payload.user,
        pass: payload.pass
      },
    });

    // send mail with defined transport object
    const data =  await transporter.sendMail({
      from: payload.user,
      to: payload.email,
      subject: payload.sendMail.title,
      html: `<p>`+payload.sendMail.title+`：初始密码 <span style="font-size: 18px; color: red">123456</span></p>`
    });

    if(data.messageId){
      return {
        data: user,
        success: true,
        code : 10403
      }
    }else{
      return {
        success: false,
        code : 10404
      }
    }
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
        data: user,
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
          data: user,
          success: true,
          code : 10007
        }
      }
  }


  /**
   * 搜索艺术家
   * @param payload
   */
  async search(payload) {
    const seller =  await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .leftJoinAndSelect('seller.metadata', 'metadata')
      .leftJoinAndSelect('seller.studios', 'studios')
      .leftJoinAndSelect('seller.resumes', 'resumes')
      .leftJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndSelect('seller.likeSellers', 'likeSellers')
      .leftJoinAndSelect('seller.orders', 'orders')
      .getMany();
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
    const seller =  await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .leftJoinAndSelect('seller.metadata', 'metadata')
      .leftJoinAndSelect('seller.studios', 'studios')
      .leftJoinAndSelect('seller.resumes', 'resumes')
      .leftJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndSelect('seller.likeSellers', 'likeSellers')
      .leftJoinAndSelect('seller.orders', 'orders')
      .where("seller.sellerId = :sellerId", { sellerId: payload.sellerId })
      .getOne();
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
