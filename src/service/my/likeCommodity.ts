import { Inject, Provide } from "@midwayjs/decorator";
import { BaseMyLikeCommodityService } from "../base/my/likeCommodity";
import { UserService } from "../user/user";

import { CommodityCommodityService } from 'src/service/commodity/commodity';
import { CommodityAttributeName } from 'src/service/commodity/attribute/name';
import { CommodityAttributePhoto } from 'src/service/commodity/attribute/photo';

@Provide()
export class MyLikeCommodityService {

  @Inject()
  baseMyLikeCommodityService: BaseMyLikeCommodityService;

  @Inject()
  userService: UserService;

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  @Inject()
  commodityAttributeName: CommodityAttributeName;

  @Inject()
  commodityAttributePhoto: CommodityAttributePhoto;

  async addMyLikeCommodity(payload) {
    // 查找用户
    const user = await this.userService.hasUser(payload.userId);
    if (!user.success) {
      return user;
    }

    // 查找艺术家
    const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
    if (!commodity.success) {
      return commodity;
    }

    // 查找我喜欢的艺术家
    const likeCommodity = await this.hasMyLikeCommodity({
      userId: payload.userId,
      commodityId: payload.commodityId
    })
    if (likeCommodity.success) {
      return {
        success: false,
        code: 10010
      }
    }

    // 创建喜欢的艺术家
    const creatLikeCommodity = await this.createLikeCommodity({
      userName: payload.userName  || user.data.name,
      userId: payload.userId,
      'zh-cn': payload['zh-cn'] || commodity.data.name['zh-cn'],
      'en-us': payload['en-us'] || commodity.data.name['en-us'],
      'ja-jp': payload['ja-jp'] || commodity.data.name['ja-jp'],
      'fr-fr': payload['fr-fr'] || commodity.data.name['fr-fr'],
      'es-es': payload['es-es'] || commodity.data.name['es-es'],
      commodityId: payload.commodityId
    });
    if(!creatLikeCommodity.success) {
      return creatLikeCommodity;
    }

    // 关联用户
    await this.relationUser({
      of: creatLikeCommodity.data.identifiers[0].id,
      set: payload.userId
    })

    // 关联艺术家
    await this.relationCommodity({
      of: creatLikeCommodity.data.identifiers[0].id,
      set: payload.commodityId
    })

    // 返回喜欢的艺术家
    // return await this.myLikeCommodity(payload.userId);
    return {
      success: true,
      code: 10003
    }
  }



  /**
   * 喜欢的艺术家列表
   */
  async myLikeCommodity(payload) {
    let commoditys:any = await this.baseMyLikeCommodityService.BaseRetrieve(payload.userId);
    // console.log("commoditys", commoditys)
    if(commoditys && commoditys.length){

      for(let item of commoditys){
        const commodityData:any = await this.commodityCommodityService.retrieveCommodityId(item.commodityId);
        if(commodityData.success) {
          item = Object.assign(item, commodityData.data)
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

      }

    }




    if (commoditys) {
      // if(payload.isLocale) {
      //   commoditys = this.filter(payload.locale, commoditys);
      // }
      return {
        data: commoditys,
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
   * 筛选商品
   * @param  payload
   * @param type
   */
  filter(type, payload) {
    return payload.map(item => {
      let name = item.name ? item.name[type] : '';

      let desc = item.desc ? item.desc[type] : '';
      // let price = item.price ? item.price[type] : '';
      let price = item.price;
      let shapes = item.shapes ? item.shapes.map(item => {return {id: item.id, name: item[type]}}) : '';
      let themes = item.themes ? item.themes.map(item => {return {id: item.id, name: item[type]}})  : '';
      let categorys = item.categorys ? item.categorys.map(item => {return {id: item.id, name: item[type]}})  : '';
      let techniques = item.techniques ? item.techniques.map(item => {return {id: item.id, name: item[type]}})  : '';

      return Object.assign(item, {
        name,
        desc,
        price,
        shapes,
        themes,
        categorys,
        techniques,
      })
    })
  }

  /**
   * 查找喜欢的艺术家是否存在
   * @param payload
   */
  async hasMyLikeCommodity(payload) {
    const likeCommodity =  await this.baseMyLikeCommodityService.BaseHas({
      userId: payload.userId,
      commodityId: payload.commodityId
    })
      if(likeCommodity){
        return {
          data: likeCommodity,
          success: true,
          code : 10601
        }
      }else{
        return {
          success: false,
          code : 10602
        }
      }
  }

  /**
   * 创建喜欢的艺术家
   * @param payload
   */
  async createLikeCommodity(payload) {
    const data = await this.baseMyLikeCommodityService.BaseCreate(payload);
    if (data.identifiers[0].id) {
      return {
        data: data,
        success: true,
        code: 10003
      }
    } else {
      return {
        success: false,
        code: 10004
      }
    }
  }



  /**
   * 关联 用户
   */
    async relationUser(payload) {
      await this.baseMyLikeCommodityService.BaseRelation({
        name: 'user',
        of: payload.of,
        set: { userId: payload.set }
      })
    }
    /**
   * 关联 艺术家
   */
  async relationCommodity(payload) {
    await this.baseMyLikeCommodityService.BaseRelation({
      name: 'commodity',
      of: payload.of,
      set: { commodityId: payload.set }
    })
  }

  /**
   * 删除我喜欢的艺术家
   */
  async delMyLikeCommodity(payload) {
    // 查找喜欢的艺术家是否存在
    const likeCommodity = await this.hasMyLikeCommodity({
      userId: payload.userId,
      commodityId: payload.commodityId
    })
    if (!likeCommodity.success) {
      return likeCommodity;
    }
    // 删除艺术家
    return await this.delLikeCommodity({
      userId: payload.userId,
      commodityId: payload.commodityId
    })

  }
  /**
   * 删除艺术家
   */
  async delLikeCommodity(payload) {
    const data = await this.baseMyLikeCommodityService.BaseDelete(payload);
    if (data.affected) {
      return {
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }
  /**
   * 删除我喜欢的所有艺术家
   */
    async delLikeCommodityAll(userId) {
      const data = await this.baseMyLikeCommodityService.BaseDeleteAll(userId);
    if (data.affected) {
      return {
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
    }


}
