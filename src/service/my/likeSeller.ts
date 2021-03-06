import { Inject, Provide } from "@midwayjs/decorator";
import { BaseMyLikeSellerService } from "../base/my/likeSeller";
import { UserService } from "../user/user";
import { SellerService } from "../user/seller";
import { CommodityCommodityService } from "src/service/commodity/commodity";

@Provide()
export class MyLikeSellerService {

  @Inject()
  baseMyLikeSellerService: BaseMyLikeSellerService;

  @Inject()
  userService: UserService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  // 添加喜欢的艺术家
  async addMyLikeSeller(payload) {
    // console.log("addMyLikeSeller", payload)
    // 查找用户
    const user = await this.userService.hasUser(payload.userId);
    if (!user.success) {
      return user;
    }

    // 查找艺术家
    const seller = await this.sellerService.hasSeller(payload.sellerId);
    // console.log("查找艺术家", seller)
    if (!seller.success) {
      return seller;
    }

    // 查找我喜欢的艺术家
    const likeSeller = await this.hasMyLikeSeller({
      userId: payload.userId,
      sellerId: payload.sellerId
    })
    // console.log("查找我喜欢的艺术家", likeSeller)
    if (likeSeller.success) {
      // return likeSeller;
      return {
        success: true,
        code : 10601
      }
    }





    // 创建喜欢的艺术家
    const creatLikeSeller = await this.createLikeSeller({
      banner: payload.banner || '',
      choice: payload.choice || false,
      userName: payload.name || user.data.name,
      userId: payload.userId,
      sellerName: payload.sellerName || seller.data.firstname + seller.data.lastname,
      sellerId: payload.sellerId
    });
    if(!creatLikeSeller.success) {
      return creatLikeSeller;
    }

    // 增加艺术家喜欢数
    const sellerLikes = await this.sellerService.likes({
      likes: seller.data.likes + 1,
      sellerId: payload.sellerId
    })
    if(!sellerLikes.success) {
      return sellerLikes
    }

    // 关联用户
    await this.relationUser({
      of: creatLikeSeller.data.identifiers[0].id,
      set: payload.userId
    })

    // 关联艺术家
    await this.relationSeller({
      of: creatLikeSeller.data.identifiers[0].id,
      set: payload.sellerId
    })

    // 返回喜欢的艺术家
    return await this.myLikeSeller(payload.userId);
  }

  /**
   * 取消我喜欢的艺术家
   */
   async delMyLikeSeller(payload) {

    // 查找用户
    const user = await this.userService.hasUser(payload.userId);
    if (!user.success) {
      return user;
    }

    // 查找艺术家
    const seller = await this.sellerService.hasSeller(payload.sellerId);
    // console.log("查找艺术家", seller)
    if (!seller.success) {
      return seller;
    }

    // 查找喜欢的艺术家是否存在
    const likeSeller = await this.hasMyLikeSeller({
      userId: payload.userId,
      sellerId: payload.sellerId
    })
    if (!likeSeller.success) {
      return {
        success: true,
        code : 10602
      }
    }



    // 删除艺术家
    const delLikeSeller = await this.delLikeSeller({
      userId: payload.userId,
      sellerId: payload.sellerId
    })
    if(!delLikeSeller.success) {
      return delLikeSeller;
    }

    // 减少艺术家喜欢数
    const likes = seller.data.likes - 1;

    const sellerLikes = await this.sellerService.likes({
      likes: (likes > 0) ? likes : 0,
      sellerId: payload.sellerId
    })
    if(!sellerLikes.success) {
      return sellerLikes
    }

    return {
      success: true,
      code: 10001
    }

  }


  /**
   * 喜欢的艺术家列表
   */
  async myLikeSeller(userId) {
    const data:any = await this.baseMyLikeSellerService.BaseRetrieve(userId);
    if (data) {
      for(let item of data) {
        if(item.sellerId) {
          const userData = await this.sellerService.retrieveSeller(item.sellerId)
          if(userData.success) {
            item.seller = userData.data;
          }
          const commodityCount = await this.commodityCommodityService.retrieveSellerCount(item.sellerId);
          if(commodityCount.success) {
            item.commodityCount = commodityCount.data;
          }
        }

      }
      return {
        data: data,
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
   * 查找喜欢的艺术家是否存在
   * @param payload
   */
  async hasMyLikeSeller(payload) {
    const hasLikeSeller =  await this.baseMyLikeSellerService.BaseHas({
      userId: payload.userId,
      sellerId: payload.sellerId
    })
      if(hasLikeSeller){
        return {
          data: hasLikeSeller,
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

  async retrieveFollow(sellerId) {
    const followTotal = await this.baseMyLikeSellerService.BaseRetrieveFollow(sellerId);
      if(followTotal){
        return {
          data: followTotal,
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
   * 创建喜欢的艺术家
   * @param payload
   */
  async createLikeSeller(payload) {
    const data = await this.baseMyLikeSellerService.BaseCreate(payload);
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
      await this.baseMyLikeSellerService.BaseRelation({
        name: 'user',
        of: payload.of,
        set: { userId: payload.set }
      })
    }
    /**
   * 关联 艺术家
   */
  async relationSeller(payload) {
    await this.baseMyLikeSellerService.BaseRelation({
      name: 'seller',
      of: payload.of,
      set: { sellerId: payload.set }
    })
  }


  /**
   * 删除艺术家
   */
  async delLikeSeller(payload) {
    const data = await this.baseMyLikeSellerService.BaseDelete(payload);
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
    async delLikeSellerAll(userId) {
      const data = await this.baseMyLikeSellerService.BaseDeleteAll(userId);
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
