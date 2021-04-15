import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityCategoryServer } from 'src/service/base/commodity/commodity-options/category';
import { CommodityOptionsCategoryService } from '../options/category';
@Provide()
export class CommodityCategoryService {

  @Inject()
  baseCommodityCategoryServer: BaseCommodityCategoryServer;

  @Inject()
  commodityOptionsCategoryService: CommodityOptionsCategoryService;

  async create(payload) {
    const data = await this.baseCommodityCategoryServer.BaseCreate(payload);
    if (data.identifiers[0].id) {
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

  async retrieve(payload) {
    const data = await this.baseCommodityCategoryServer.BaseRetrieveID(payload);
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

  async retrieveCommodityId(commodityId) {
    const data = await this.baseCommodityCategoryServer.BaseRetrieveCommodityId(commodityId);
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

  async retrieveID(payload) {
    const data = await this.baseCommodityCategoryServer.BaseRetrieveID(payload);
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

  async relation(payload) {
    return await this.baseCommodityCategoryServer.BaseRelationSet(payload)
  }

  async relationCreate(payload) {
    for(let item of payload.relation){
      console.log("item", item)
      const categoryOption = await this.retrieveID({
        commodityId: payload.commodityId,
        optionId: item
      })
      console.log("categoryOption", categoryOption)
      if(categoryOption.success){
        await this.relation({
          name: 'commoditys',
          of: categoryOption.data.id,
          set: payload.commodityId
        })
        await this.relation({
          name: 'options',
          of:  categoryOption.data.id,
          set: item
        })
      }else{
        const categorysOption = await this.commodityOptionsCategoryService.retrieveId(item)
        console.log("categorysOption", categorysOption)
        if(categorysOption.success){
          const categorys = await this.create({
            commodityId: payload.commodityId,
            optionId: item,
          })
          console.log("categorys", categorys)
          if (categorys.success) {

            await this.relation({
              name: 'commoditys',
              of: categorys.data.identifiers[0].id,
              set: payload.commodityId
            })
            await this.relation({
              name: 'options',
              of:  categorys.data.identifiers[0].id,
              set: item
            })
          }
        }

      }

    }
  }

  async relationUpdate(payload) {
    const commodityCategorysOptions = await this.retrieveCommodityId(payload.commodityId);
    if(commodityCategorysOptions.success){
      for(let item of commodityCategorysOptions.data){
        if(item.options){
          await this.relation({
            name: 'options',
            of:  item.id,
            set: null
          })
        }
      }
    }
    await this.relationCreate(payload)

  }




}
