import { Provide, Config, Inject } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';



import { BaseUserServer } from '../base/user/user';

import { BaseSellerServer } from "src/service/base/seller/seller";
import { BaseSellerMetadataServer } from "src/service/base/seller/metadata";
import { BaseSellerResumeServer } from "src/service/base/seller/resume";
import { BaseSellerStudioServer } from "src/service/base/seller/studio";

import { CommodityCommodityService } from 'src/service/commodity/commodity';
import { CommodityAttributeName } from 'src/service/commodity/attribute/name';
import { CommodityAttributePhoto } from 'src/service/commodity/attribute/photo';

import { MyLikeSellerService } from 'src/service/my/likeSeller';



import * as nodemailer from 'nodemailer';
// import * as crypto from 'crypto';

@Provide()
export class SellerService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @Inject()
  baseUserServer: BaseUserServer;

  @Inject()
  baseSellerServer: BaseSellerServer;

  @Inject()
  baseSellerMetadataServer: BaseSellerMetadataServer;

  @Inject()
  baseSellerResumeServer: BaseSellerResumeServer;

  @Inject()
  baseSellerStudioServer: BaseSellerStudioServer;

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  @Inject()
  commodityAttributeName: CommodityAttributeName;

  @Inject()
  commodityAttributePhoto: CommodityAttributePhoto;

  @Inject()
  myLikeSellerService: MyLikeSellerService;


  @Config('email')
  email;

  // 创建艺术家
  async create(payload) {
    // console.log("创建艺术家 payload", payload)

    // 判断用户是否关联艺术家
    if(payload.user && payload.user.userId) {
      const userSeller = await this.baseSellerServer.baseApplySeller(payload.user.userId);
      if(userSeller) {
        return {
          success: false,
          code: 10415
        }
      }
    }

    // 艺术家
      // 判断艺术家姓名是否重复
      if(payload.seller.firstname || payload.seller.lastname) {
        const sellerName = await this.baseSellerServer.BaseHasName({
          firstname: payload.seller.firstname,
          lastname: payload.seller.lastname,
        })
        // console.log("判断艺术家姓名是否重复", sellerName)
        if(sellerName) {
          return {
            success: false,
            code: 10414
          }
        }
      }
      let seller:any;
      if(payload.seller){
      if(payload.seller.banner
      || payload.seller.choice
      || payload.seller.state
      || payload.seller.type
      || payload.seller.firstname
      || payload.seller.lastname
      || payload.seller.tags
      || payload.seller.gender
      || payload.seller.country
      ){
        // 创建艺术家
        seller = await this.baseSellerServer.baseCreateSeller({
          banner: payload.seller.banner,
          choice: payload.seller.choice,
          state: payload.seller.state,
          type: payload.seller.type,
          firstname: payload.seller.firstname,
          lastname: payload.seller.lastname,
          tags: payload.seller.tags,
          gender: payload.seller.gender,
          country: payload.seller.country,
        })
        // console.log("创建艺术家", seller)
        if(!seller) {
          return {
            success: false,
            code: 10004
          }
        }
      }else{
        return {
          success: false,
          code: 10104
        }
      }
    }else{
      return {
        success: false,
        code: 10104
      }
    }
      if(payload.metadata){
    if(payload.metadata.language
    || payload.metadata.findUs
    || payload.metadata.isFullTime
    || payload.metadata.onlineSell
    || payload.metadata.sold
    || payload.metadata.channel
    || payload.metadata.gallery
    || payload.metadata.medium
    || payload.metadata.galleryInfo
    || payload.metadata.recommend
    || payload.metadata.prize
    || payload.metadata.website
    || payload.metadata.profileZhcn
    || payload.metadata.profileEnus
    || payload.metadata.profileJajp
    || payload.metadata.profileEses
    ){
      // 创建艺术家基本信息
      const sellerMetadata:any = await this.baseSellerMetadataServer.baseCreate({
        language: payload.metadata.language,
        findUs: payload.metadata.findUs,
        isFullTime: payload.metadata.isFullTime,
        onlineSell: payload.metadata.onlineSell,
        sold: payload.metadata.sold,
        channel: payload.metadata.channel,
        gallery: payload.metadata.gallery,
        medium: payload.metadata.medium,
        galleryInfo: payload.metadata.galleryInfo,
        recommend: payload.metadata.recommend,
        prize: payload.metadata.prize,
        website: payload.metadata.website,
        profileZhcn: payload.metadata.profileZhcn,
        profileEnus: payload.metadata.profileEnus,
        profileJajp: payload.metadata.profileJajp,
        profileEses: payload.metadata.profileEses,
      })
      // console.log("艺术家基本信息", sellerMetadata)

      if(sellerMetadata) {
        // 关联基本信息
        await this.baseSellerMetadataServer.relation({
          name: "seller",
          of: sellerMetadata.identifiers[0].id,
          set: { sellerId: seller.generatedMaps[0].sellerId }
        })
      }else{
        return {
          success: false,
          code: 10004
        }
      }
    }
  }
  if(payload.studio){
    if(payload.studio.name
    || payload.studio.photo
    || payload.studio.video
    || payload.studio.ccId
    || payload.studio.siteId
    || payload.studio.videoPhoto
    || payload.studio.banner
    || payload.studio.introduce
    ){
      // 创建艺术家工作室
      const sellerStudio:any = await this.baseSellerStudioServer.baseCreate({
        sellerId: seller.generatedMaps[0].sellerId,
        name: payload.studio.name,
        photo: payload.studio.photo,
        video: payload.studio.video,
        ccId: payload.studio.ccId,
        siteId: payload.studio.siteId,
        videoPhoto: payload.studio.videoPhoto,
        banner: payload.studio.banner,
        introduce: payload.studio.introduce,
      })
      // console.log("创建艺术家工作室", sellerStudio)
      if(sellerStudio) {
        // 关联工作室
        await this.baseSellerServer.relation({
          name: "studio",
          of: seller.identifiers[0].id,
          set: sellerStudio.identifiers[0].id,
        })
      }else{
        return {
          success: false,
          code: 10004
        }
      }
    }
  }
  if(payload.resume){

    if(payload.resume.prize.length
    || payload.resume.individua.length
    || payload.resume.organizing.length
    || payload.resume.publish.length
    ){
      // 创建艺术家履历
      const sellerResume:any = await this.baseSellerResumeServer.baseCreate({
        resume: JSON.stringify(payload.resume)
      })
      // console.log("创建艺术家履历", sellerResume)
      if(sellerResume) {
        // 关联艺术家履历
        await this.baseSellerResumeServer.relation({
          name: "seller",
          of: sellerResume.identifiers[0].id,
          set: { sellerId: seller.generatedMaps[0].sellerId }
        })
      }else{
        return {
          success: false,
          code: 10004
        }
      }
    }
  }

    // 关联用户
    if(payload.user && payload.user.userId) {
      const user = await this.baseUserServer.baseRetrieveUserIdentity(payload.user.userId);
      // console.log("关联用户", user)
      if(user) {
        // 关联用户
        await this.baseSellerServer.relation({
          name: "user",
          of: seller.identifiers[0].id,
          set: { userId: payload.user.userId }
        })

      }else {
        return {
          success: false,
          code: 10202
        }
      }
    }

    return {
      data: { sellerId: seller.generatedMaps[0].sellerId },
      success: true,
      code: 10003
    };
  }

  // 编辑艺术家
  async edit(payload) {
    if(payload.sellerId) {
      let edit:any = {};
      // 获取艺术家
      const sellerData = await this.baseSellerServer.baseRetrieveUser(payload.sellerId);
      if(sellerData) {
        const { user, ...seller} = sellerData;
        edit.seller = seller;
        // 用户信息
        if(user) {
          edit.user = user;
        }
        // 艺术家基本信息
        const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.sellerId);
        if(sellerMetadata) {
          edit.metadata = sellerMetadata;
        }
        // 艺术家工作室
        const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.sellerId);
        if(sellerStudio) {
          edit.studio = sellerStudio;
        }
        // 艺术家履历
        const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.sellerId);
        if(sellerResume) {
          edit.resume = JSON.parse(sellerResume.resume);
        }

      }else{
        return {
          success: false,
          code: 10412
        }
      }

      return {
        data: edit,
        success: true,
        code: 10009
      };
    }else{
      return {
        success: false,
        code: 10104
      }
    }

  }

  /**
   * 查找艺术家个人信息
   * @param payload
   */

   async find(payload) {

      if(payload.sellerId){
        let find:any = {};
        const sellerData:any = await this.baseSellerServer.baseRetrieveSeller(payload.sellerId);
        if(sellerData) {
          const { user, ...seller} = sellerData;
          find.seller = seller;
          // 用户信息
          if(user) {
            find.user = user;
          }

          // metadata
          const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.sellerId);
          if(sellerMetadata){
            find.metadata = sellerMetadata;
          }

          // studio
          const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.sellerId);
          if(sellerStudio){
            find.studio = sellerStudio;
          }


          // resume
          const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.sellerId);
          if(sellerResume){
            find.resume = JSON.parse(sellerResume.resume);
          }



          // commoditys

          const commoditys:any = await this.commodityCommodityService.retrieveCommmoditySellerId(payload.sellerId);

          if(commoditys.success && commoditys.data && commoditys.data.length){

            for(let item of commoditys.data){

              // name
              const commodityAttributeName =  await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
              if(commodityAttributeName) {
                item.name = commodityAttributeName.data[payload.locale];
              }

              // photos
              const commodityAttributePhoto =  await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
              if(commodityAttributePhoto) {
                item.photos = commodityAttributePhoto.data.map(item => item.src);
              }
            }

            find.commoditys = commoditys.data;
          }

        }else{
          return {
            success: false,
            code: 10412
          }
        }





        return {
          data: find,
          success: true,
          code: 10009
        };
      }else{
        return {
          success: false,
          code: 10104
        }
      }
  }


  async update(payload) {
    if(payload.seller.sellerId) {
      // 获取艺术家
      const sellerData = await this.baseSellerServer.baseRetrieveUser(payload.seller.sellerId);
      // console.log("获取艺术家", sellerData)
      if(sellerData) {
        const { user } = sellerData;
        if(user){
          if(payload.user) {
            if(payload.user.userId !== user.userId){
              // 解绑用户 user.userId
              await this.baseSellerServer.relation({
                name: "user",
                of: sellerData.id,
                set: null
              })
              // 关联用户 payload.user.userId
              await this.baseSellerServer.relation({
                name: "user",
                of: sellerData.id,
                set: { userId: payload.user.userId }
              })
            }
          }else{
            // 解绑用户 user.userId
            await this.baseSellerServer.relation({
              name: "user",
              of: sellerData.id,
              set: null
            })
          }

        }else{
          if(payload.user && payload.user.userId) {
            // 关联用户 payload.user.userId
            await this.baseSellerServer.relation({
              name: "user",
              of: sellerData.id,
              set: { userId: payload.user.userId }
            })
          }
        }

        // 更新艺术家
        const seller:any = await this.baseSellerServer.baseUpdateSeller({
          sellerId: payload.seller.sellerId,

          banner: payload.seller.banner,
          choice: payload.seller.choice,
          state: payload.seller.state,
          type: payload.seller.type,
          firstname: payload.seller.firstname,
          lastname: payload.seller.lastname,
          tags: payload.seller.tags,
          gender: payload.seller.gender,
          country: payload.seller.country,
        })
        // console.log("更新艺术家", seller)
        if(!seller.affected) {
          return {
            success: false,
            code: 10008
          }
        }




      }else{
        return {
          success: false,
          code: 10412
        }
      }


      // 艺术家基本信息
      if(payload.metadata) {
        // 艺术家基本信息
        const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(payload.seller.sellerId);
        if(sellerMetadata) {
          // 更新艺术家基本信息
          const sellerMetadata:any = await this.baseSellerMetadataServer.baseUpdate({
            sellerId: payload.seller.sellerId,

            language: payload.metadata.language,
            findUs: payload.metadata.findUs,
            isFullTime: payload.metadata.isFullTime,
            onlineSell: payload.metadata.onlineSell,
            sold: payload.metadata.sold,
            channel: payload.metadata.channel,
            gallery: payload.metadata.gallery,
            medium: payload.metadata.medium,
            galleryInfo: payload.metadata.galleryInfo,
            recommend: payload.metadata.recommend,
            prize: payload.metadata.prize,
            website: payload.metadata.website,
            profileZhcn: payload.metadata.profileZhcn,
            profileEnus: payload.metadata.profileEnus,
            profileJajp: payload.metadata.profileJajp,
            profileEses: payload.metadata.profileEses,
          })
          // console.log("更新艺术家基本信息", sellerMetadata)
          if(!sellerMetadata.affected) {
            return {
              success: false,
              code: 10008
            }
          }
        }else{

          if(payload.metadata){
            if(payload.metadata.language
            || payload.metadata.findUs
            || payload.metadata.isFullTime
            || payload.metadata.onlineSell
            || payload.metadata.sold
            || payload.metadata.channel
            || payload.metadata.gallery
            || payload.metadata.medium
            || payload.metadata.galleryInfo
            || payload.metadata.recommend
            || payload.metadata.prize
            || payload.metadata.website
            || payload.metadata.profileZhcn
            || payload.metadata.profileEnus
            || payload.metadata.profileJajp
            || payload.metadata.profileEses
            ){
          // 创建艺术家基本信息
          const sellerMetadata:any = await this.baseSellerMetadataServer.baseCreate({
            language: payload.metadata.language,
            findUs: payload.metadata.findUs,
            isFullTime: payload.metadata.isFullTime,
            onlineSell: payload.metadata.onlineSell,
            sold: payload.metadata.sold,
            channel: payload.metadata.channel,
            gallery: payload.metadata.gallery,
            medium: payload.metadata.medium,
            galleryInfo: payload.metadata.galleryInfo,
            recommend: payload.metadata.recommend,
            prize: payload.metadata.prize,
            website: payload.metadata.website,
            profileZhcn: payload.metadata.profileZhcn,
            profileEnus: payload.metadata.profileEnus,
            profileJajp: payload.metadata.profileJajp,
            profileEses: payload.metadata.profileEses,
          })
          // console.log("艺术家基本信息", sellerMetadata)

          if(sellerMetadata) {
            // 关联基本信息
            await this.baseSellerMetadataServer.relation({
              name: "seller",
              of: sellerMetadata.identifiers[0].id,
              set: { sellerId: payload.seller.sellerId }
            })
          }else{
            return {
              success: false,
              code: 10004
            }
          }
        }
      }
        }
      }

      // 艺术家工作室
      if(payload.studio) {
        // 查找艺术家是否有工作室
        const sellerStudio = await this.baseSellerStudioServer.baseRetrieve(payload.seller.sellerId);
        if(sellerStudio) {
          // 更新艺术家工作室
          const sellerStudioUpdate:any = await this.baseSellerStudioServer.baseUpdate({
            sellerId: payload.seller.sellerId,

            name: payload.studio.name,
            photo: payload.studio.photo,
            video: payload.studio.video,
            ccId: payload.studio.ccId,
            siteId: payload.studio.siteId,
            videoPhoto: payload.studio.videoPhoto,
            banner: payload.studio.banner,
            introduce: payload.studio.introduce,
          })
          // console.log("更新艺术家工作室", sellerStudioUpdate)
          if(!sellerStudioUpdate.affected) {
            return {
              success: false,
              code: 10008
            }
          }

        }else {
          if(payload.studio){
            if(payload.studio.name
            || payload.studio.photo
            || payload.studio.video
            || payload.studio.ccId
            || payload.studio.siteId
            || payload.studio.videoPhoto
            || payload.studio.banner
            || payload.studio.introduce
            ){
          // 创建艺术家工作室
          const sellerStudio:any = await this.baseSellerStudioServer.baseCreate({
            sellerId: payload.seller.sellerId,
            name: payload.studio.name,
            photo: payload.studio.photo,
            video: payload.studio.video,
            ccId: payload.studio.ccId,
            siteId: payload.studio.siteId,
            videoPhoto: payload.studio.videoPhoto,
            banner: payload.studio.banner,
            introduce: payload.studio.introduce,
          })
          // console.log("创建艺术家工作室", sellerStudio)
          if(sellerStudio) {
            // 关联工作室
            // await this.baseSellerStudioServer.relation({
            //   name: "seller",
            //   of: sellerStudio.identifiers[0].id,
            //   set: { sellerId: payload.seller.sellerId }
            // })
            await this.baseSellerServer.relation({
              name: "studio",
              of: { sellerId: payload.seller.sellerId },
              set: sellerStudio.identifiers[0].id,
            })
          }else{
            return {
              success: false,
              code: 10004
            }
          }
        }
      }
        }

      }

      // 艺术家履历
      if(payload.resume) {
        // 查找艺术家是否有履历
        const sellerResume = await this.baseSellerResumeServer.baseRetrieve(payload.seller.sellerId);
        if(sellerResume){
          // 更新艺术家履历
          const sellerResume:any = await this.baseSellerResumeServer.baseUpdate({
            sellerId: payload.seller.sellerId,

            resume: JSON.stringify(payload.resume),
          })
          // console.log("更新艺术家履历", sellerResume)
          if(!sellerResume.affected) {
            return {
              success: false,
              code: 10008
            }
          }
        }else{
          if(payload.resume){

            if(payload.resume.prize.length
            || payload.resume.individua.length
            || payload.resume.organizing.length
            || payload.resume.publish.length
            ){
          // 创建艺术家履历
          const sellerResume:any = await this.baseSellerResumeServer.baseCreate({
            resume: JSON.stringify(payload.resume)
          })
          // console.log("创建艺术家履历", sellerResume)
          if(sellerResume) {
            // 关联艺术家履历
            await this.baseSellerResumeServer.relation({
              name: "seller",
              of: sellerResume.identifiers[0].id,
              set: { sellerId: payload.seller.sellerId }
            })
          }else{
            return {
              success: false,
              code: 10004
            }
          }
        }
      }

        }
      }


      return {
        success: true,
        code: 10007
      };
    }else{
      return {
        success: false,
        code: 10104
      }
    }
  }


  // 通过艺术家申请 ，发送邮件
  /**
   * 修改艺术家状态
   * @param payload
   * 通过申请：发送通过申请邮件
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
      let sellerState = await this.baseSellerServer.baseSetSellerState(payload)
      if(!sellerState.affected){
        return {
          success: false,
          code : 10008
        }
      }
      // 设置密码
      // const passwordCrypto = crypto.createHash('md5').update('123456').digest('hex');
      // const password = await this.baseUserServer.baseUpdateUser({
      //   userId: seller.user.userId,
      //   avatar: seller.user.avatar,
      //   name: seller.user.name,
      //   email: seller.user.email,
      //   phone: seller.user.phone,
      //   password: passwordCrypto
      // })
      // if(!password.affected){
      //   return {
      //     success: false,
      //     code : 10008
      //   }
      // }

      // 发送邮件
      const sendmail =  await this.sendMailSellerApply({
        ...payload,
        email: seller.user.email,
        subject: 'yobo-审核通过',
        // html: `<p><img src="http://www.yoboart.com/images/artists-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！您的初始密码为 <span style="font-size: 20px; color: red">123456</span></p><p style="font-size:16px;">您可以点击此链接进行登录<a href="http://www.yoboart.com">http://www.yoboart.com</a></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
        html: `<p><img src="http://www.yoboart.com/images/artists-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下， 您已通过注册审核，欢迎加入永宝YOROART！</p><p style="font-size:16px;">您可以点击此链接进行登录<a href="http://www.yoboart.com">http://www.yoboart.com</a></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
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
      let sellerState = await this.baseSellerServer.baseSetSellerState(payload)


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
      port: this.email.port,
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
    const seller = await this.baseSellerServer.baseRetrieveSeller(payload.sellerId);
    if(!seller){
      return {
        success: false,
        code: 10202
      }
    }
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
      banner: payload.banner || '',
      choice: payload.choice || false,
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      tags: payload.tags || '',
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
    const updateSellerMetadata = await this.baseSellerMetadataServer.baseUpdate({
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
      profileZhcn: payload.profileZhcn || '',
      profileEnus: payload.profileEnus || '',
      profileJajp: payload.profileJajp || '',
      profileEses: payload.profileEses || ''
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
  //  前端搜索艺术家

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
    if(result){


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
  }

  async retrieveSellerHome(payload) {
    let result = await this.baseSellerServer.baseRetrieveSellerHome(payload);
    // 获取加精的艺术品

    if(result){


      let data = result[0];
      let total = result[1];


      if (data) {
        if(payload.isLocale){
          data = this.retrieveSellerAllFilter(payload.locale, data)
        }
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
  }

  retrieveSellerAllFilter(type, payload) {
    return payload.map(item => {
      if(item.commodityName) {
        item.commodityName = item.commodityName[type]
      }
      if(item.commodityPhotos) {
        item.commodityPhotos = item.commodityPhotos.map(item => item.src)
      }
        // return Object.assign(
        //   item,
        //   {
        //     commodityName: item.commodityName && item.commodityName[type] ? item.commodityName[type] : '',
        //   }
        // )
      return item;

    })
  }

  /**
   * 查找艺术家是否存在
   * @param sellerId
   */
  async hasSeller(sellerId) {
    // console.log("hasSeller sellerId", sellerId)
    const seller =  await this.baseSellerServer.BaseHas(sellerId)
    // console.log("hasSeller", seller)
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



  async choiceSeller(payload) {
    const hotSaleSeller = await this.baseSellerServer.baseChoiceSeller({
      pageSize: payload.pageSize,
      currentPage: payload.currentPage,
      news: payload.news
    });
    if(hotSaleSeller) {
      return {
        data: hotSaleSeller,
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

  async sellerIdFind(payload) {

    const seller = await this.baseSellerServer.baseSellerIdRetrieveSeller(payload);

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

  async sellerFollowTotal(sellerId) {

    const followTotal = await this.myLikeSellerService.retrieveFollow(sellerId);
      if(followTotal){
        return {
          data: followTotal.data,
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

  async updateMetadata(payload) {
    const seller = await this.baseSellerMetadataServer.baseUpdateMetadata(payload);
    if(seller.affected){

      return {
        success: true,
        code : 10007
      }
    }else{
      return {
        success: false,
        code : 10008
      }
    }
  }

  async updateResume(payload) {
    const seller = await this.baseSellerResumeServer.baseUpdateResume(payload);
    if(seller.affected){

      return {
        success: true,
        code : 10007
      }
    }else{
      return {
        success: false,
        code : 10008
      }
    }
  }


  async retrieveSeller(sellerId) {
    const sellerData:any = await this.baseSellerServer.baseRetrieveSeller(sellerId);
    if(sellerData){
      return {
        data: sellerData,
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
}
