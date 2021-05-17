import { Inject, Provide } from "@midwayjs/decorator";
import { BaseMyLikeSellerServer } from "../base/my/likeSeller";
import { UserService } from "../user/user";
import { SellerService } from "../user/seller";
@Provide()
export class MyLikeSellerService {

  @Inject()
  baseMyLikeSellerServer: BaseMyLikeSellerServer;

  @Inject()
  userService: UserService;

  @Inject()
  sellerService: SellerService;

  async addMyLikeSeller(payload) {
    console.log("addMyLikeSeller", payload)
    // 查找用户
    const user = await this.userService.hasUser(payload.userId);
    if (!user.success) {
      return user;
    }

    // 查找艺术家
    const seller = await this.sellerService.hasSeller(payload.sellerId);
    console.log("查找艺术家", seller)
    if (!seller.success) {
      return seller;
    }

    // 查找我喜欢的艺术家
    const likeSeller = await this.hasMyLikeSeller({
      userId: payload.userId,
      sellerId: payload.sellerId
    })
    console.log("查找我喜欢的艺术家", likeSeller)
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
   * 喜欢的艺术家列表
   */
  async myLikeSeller(userId) {
    const data:any = await this.baseMyLikeSellerServer.BaseRetrieve(userId);

    if (data) {
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
    const hasLikeSeller =  await this.baseMyLikeSellerServer.BaseHas({
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
    const followTotal = await this.baseMyLikeSellerServer.BaseRetrieveFollow(sellerId);
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
    const data = await this.baseMyLikeSellerServer.BaseCreate(payload);
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
      await this.baseMyLikeSellerServer.BaseRelation({
        name: 'user',
        of: payload.of,
        set: { userId: payload.set }
      })
    }
    /**
   * 关联 艺术家
   */
  async relationSeller(payload) {
    await this.baseMyLikeSellerServer.BaseRelation({
      name: 'seller',
      of: payload.of,
      set: { sellerId: payload.set }
    })
  }

  /**
   * 删除我喜欢的艺术家
   */
  async delMyLikeSeller(payload) {
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
    return await this.delLikeSeller({
      userId: payload.userId,
      sellerId: payload.sellerId
    })

  }
  /**
   * 删除艺术家
   */
  async delLikeSeller(payload) {
    const data = await this.baseMyLikeSellerServer.BaseDelete(payload);
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
      const data = await this.baseMyLikeSellerServer.BaseDeleteAll(userId);
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
