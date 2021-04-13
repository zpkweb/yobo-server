import { Inject, Provide } from '@midwayjs/decorator';
import { CommodityCommodityService } from './commodity';
import { CommodityAttributeName } from './attribute/name';
import { CommodityAttributeDesc } from './attribute/desc';
import { CommodityAttributePrice } from './attribute/price';
import { CommodityAttributePhoto } from './attribute/photo';
import { CommodityAttributeColor } from './attribute/color';

import { CommentService } from './comment';
import { CommodityOptionService } from './commodityOption';
@Provide()
export class CommodityService {

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  @Inject()
  commodityAttributeName: CommodityAttributeName;

  @Inject()
  commodityAttributeDesc: CommodityAttributeDesc;

  @Inject()
  commodityAttributePrice: CommodityAttributePrice;

  @Inject()
  commodityAttributePhoto: CommodityAttributePhoto;

  @Inject()
  commodityAttributeColor: CommodityAttributeColor;

  @Inject()
  commentService: CommentService;

  @Inject()
  commodityOptionService: CommodityOptionService;

  // 创建
  async create(payload) {
    console.log("commodity index create", payload)
    // 查询商品是否存在
    const commodity = await this.commodityAttributeName.hasName({
      'zh-cn': payload['zh-cn'],
      'en-us': payload['en-us'],
      'ja-jp': payload['ja-jp'],
      'fr-fr': payload['fr-fr'],
      'es-es': payload['es-es']
    });
    console.log("create commodity", commodity)
    if(commodity.success){
      return {
        success: false,
        code: 10013
      }
    }

    const commodityNew =  await this.commodityCommodityService.create(payload);
    console.log("commodityNew", commodityNew)
    if(!commodityNew.success){
      return commodityNew
    }

    // 通过商品Id查找商品

    return await this.commodityCommodityService.retrieve({
      commodityId: commodityNew.data.generatedMaps[0].commodityId
    })


  }



  // 查找商品
  async find(payload) {
    return await this.commodityCommodityService.retrieve(payload);
  }


  // 查找所有商品
  async findAll(payload) {
    return await this.commodityCommodityService.retrieveAll({
      isLocale: payload.isLocale || false,
      locale: payload.locale || 'zh-cn',
      currentPage: +payload.currentPage || 1,
      pageSize: +payload.pageSize || 10
    });
  }

  async fingCategory(id) {
    return await this.commodityCommodityService.retrieveCategory(id);
  }


  // 搜索商品
  async search(payload) {
    console.log("search", payload)
    let price;
    if(payload.price){
      if(typeof payload.price == 'string') {
        price = JSON.parse(payload.price)
      }else{
        price = payload.price
      }
    }else{
      price = {
        min: '',
        max: ''
      }
    }
    let width;
    if(payload.width){
      if(typeof payload.width == 'string') {
        width = JSON.parse(payload.width)
      }else{
        width = payload.width
      }
    }else{
      width = {
        min: '',
        max: ''
      }
    }
    let height;
    if(payload.height){
      if(typeof payload.height == 'string') {
        height = JSON.parse(payload.height)
      }else{
        height = payload.height
      }
    }else{
      height = {
        min: '',
        max: ''
      }
    }
    let colors;
    if(payload.colors){
      if(typeof payload.colors == 'string') {
        colors = JSON.parse(payload.colors)
      }else{
        colors = payload.colors
      }
    }else{
      colors = {
        start: '',
        end: ''
      }
    }
    let colorStart = colors.start.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
    let colorEnd = colors.end.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
    let colorsMin,colorsMax;
    if(colorStart<=colorEnd){
      colorsMin = colorStart;
      colorsMax = colorEnd;
    }else{
      colorsMin = colorEnd;
      colorsMax = colorStart;
    }

    let hots = false;
    if(payload.hots && payload.hots == 'true'){
      hots = true;
    }

    let news = false;
    if(payload.news && payload.news == 'true'){
      news = true;
    }
    return await this.commodityCommodityService.search({
      id: payload.id || '',
      commodityId: payload.commodityId || '',
      sellerId: payload.sellerId || '',

      name: payload.name || '',
      desc: payload.desc || '',
      // price: payload.price,
      priceMin: price.min || 0,
      priceMax: price.max || 0,
      // width: payload.width,
      widthMin: width.min || 0,
      widthMax: width.max || 0,
      // height: payload.height,
      heightMin: height.min || 0,
      heightMax: height.max || 0,
      // colors: payload.colors,
      colorsMin: colorsMin || 0 ,
      colorsMax: colorsMax || 0, // 16777215
      state: payload.state || '',
      categorys: (payload.categorys && payload.categorys.length) ? JSON.parse(payload.categorys) : [],
      classifications: (payload.classifications && payload.classifications.length) ? JSON.parse(payload.classifications) : [],
      materials: (payload.materials && payload.materials.length) ? JSON.parse(payload.materials) : [],
      models: (payload.models && payload.models.length) ? JSON.parse(payload.models) : [],
      places: (payload.places && payload.places.length) ? JSON.parse(payload.places) : [],
      ruiwus: (payload.ruiwus && payload.ruiwus.length) ? JSON.parse(payload.ruiwus) : [],
      shapes: (payload.shapes && payload.shapes.length) ? JSON.parse(payload.shapes) : [],
      specifications: (payload.specifications && payload.specifications.length) ? JSON.parse(payload.specifications) : [],
      styles: (payload.styles && payload.styles.length) ? JSON.parse(payload.styles) : [],
      techniques: (payload.techniques && payload.techniques.length) ? JSON.parse(payload.techniques) : [],
      themes: (payload.themes && payload.themes.length) ? JSON.parse(payload.themes) : [],
      types: (payload.types && payload.types.length) ? JSON.parse(payload.types) : [],
      uses: (payload.uses && payload.uses.length) ? JSON.parse(payload.uses) : [],
      hots,
      news,
      currentPage: payload.currentPage || 1,
      pageSize: payload.pageSize || 10,
      isLocale: payload.isLocale || false,
      locale: payload.locale || 'zh-cn'
    });
  }

  // 删除商品
  async delete(commodityId) {
    if(commodityId){
      return await this.commodityCommodityService.deleteCommodityId(commodityId);
    }else{
      return await this.commodityCommodityService.deleteAll();
    }

  }

  // 更新商品
  async update(payload) {
    console.log("commodity payload", payload)
    // 查询商品是否存在
    const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
    console.log("commodity", commodity)
    //  商品不存在
    if(!commodity.success){
      return {
        success: false,
        code: 10014
      }
    }
    // 更新商品属性
    const commodityUpdate = await this.commodityCommodityService.update({
      commodityId: payload.commodityId,
      state: payload.state,
      width: payload.width,
      height: payload.height
    })
    console.log("commodityUpdate", commodityUpdate)
    // 更新失败
    if (!commodityUpdate.success) {
      return commodityUpdate
    }


    // 更新商品名称
    const commodityName = await this.commodityAttributeName.updateName({
      commodityId: payload.commodityId,
      'zh-cn': payload.name['zh-cn'] || '',
      'en-us': payload.name['en-us'] || '',
      'ja-jp': payload.name['ja-jp'] || '',
      'fr-fr': payload.name['fr-fr'] || '',
      'es-es': payload.name['es-es'] || ''
    })
    console.log("commodityName", commodityName)
    if(!commodityName.success) {
      return commodityName;
    }

    // 更新商品详情
    const commodityDesc = await this.commodityAttributeDesc.updateDesc({
      commodityId: payload.commodityId,
      'zh-cn': payload.desc['zh-cn'] || '',
      'en-us': payload.desc['en-us'] || '',
      'ja-jp': payload.desc['ja-jp'] || '',
      'fr-fr': payload.desc['fr-fr'] || '',
      'es-es': payload.desc['es-es'] || ''
    });
    console.log("commodityDesc", commodityDesc)
    if(!commodityDesc.success) {
      return commodityDesc;
    }

    // 更新商品价格
    const commodityPrice = await this.commodityAttributePrice.updatePrice({
      commodityId: payload.commodityId,
      'zh-cn': payload.price['zh-cn'] || 0,
      'en-us': payload.price['en-us'] || 0,
      'ja-jp': payload.price['ja-jp'] || 0,
      'fr-fr': payload.price['fr-fr'] || 0,
      'es-es': payload.price['es-es'] || 0
    });
    console.log("commodityPrice", commodityPrice)
    if(!commodityPrice.success) {
      return commodityPrice;
    }



    // 更新商品图片
    for(let item of payload.photos){
      if(item.id){
        // 更新图片
        const commodityPhotoUpdate = await this.commodityAttributePhoto.update({
          src: item.url,
          name: item.name,
          commodityId: payload.commodityId,
        });
        console.log("commodityPhotoUpdate", commodityPhotoUpdate)
        if (!commodityPhotoUpdate.success) {
          return commodityPhotoUpdate
        }
      }else{
        //  添加图片
        const commodityPhotoCreate = await this.commodityAttributePhoto.create({
          src: item.url,
          name: item.name
        })
        if (!commodityPhotoCreate.success) {
          return commodityPhotoCreate
        }
        // 商品 关联 商品图片
        await this.commodityCommodityService.relation({
          name: 'photos',
          of: { commodityId: payload.commodityId },
          add: commodityPhotoCreate.data.identifiers[0].id
        })
      }


      // 商品 关联 商品图片
      // await this.relation({
      //   name: 'photos',
      //   of: { commodityId: payload.commodityId },
      //   add: commodityPhoto.data.identifiers[0].id
      // })
    }

    // 更新商品颜色
    for(let item of payload.colors){
      const commodityColor = await this.commodityAttributeColor.update({
      ...item,
      commodityId: payload.commodityId,
      });
      console.log("commodityColor", commodityColor)
      if (!commodityColor.success) {
        return commodityColor
      }
      // 商品 关联 商品图片
      // await this.relation({
      //   name: 'colors',
      //   of: { commodityId: payload.commodityId },
      //   add: commodityColor.data.identifiers[0].id
      // })
    }

    // 更新 商品形状
    // await this.commodityCommodityService.relation({
    //   name: 'shapes',
    //   of: { commodityId: payload.commodityId },
    //   add: payload.shape
    // })

    // 更新 商品主题
    // await this.commodityCommodityService.relation({
    //   name: 'themes',
    //   of: { commodityId: payload.commodityId },
    //   add: payload.theme
    // })

    // 更新 商品类别
    // await this.commodityCommodityService.relation({
    //   name: 'categorys',
    //   of: { commodityId: payload.commodityId },
    //   add: payload.category
    // })

    // 更新 商品手法
    // await this.commodityCommodityService.relation({
    //   name: 'techniques',
    //   of: { commodityId: payload.commodityId },
    //   add: payload.technique
    // })
    await this.commodityCommodityService.relation({
      name: 'categorys',
      of: { commodityId: payload.commodityId },
      remove: payload.categorys
    })
    await this.commodityCommodityService.relation({
      name: 'categorys',
      of: { commodityId: payload.commodityId },
      add: payload.categorys
    })

    await this.commodityCommodityService.relation({
      name: 'classifications',
      of: { commodityId: payload.commodityId },
      remove: payload.classifications
    })
    await this.commodityCommodityService.relation({
      name: 'classifications',
      of: { commodityId: payload.commodityId },
      add: payload.classifications
    })

    await this.commodityCommodityService.relation({
      name: 'materials',
      of: { commodityId: payload.commodityId },
      remove: payload.materials
    })
    await this.commodityCommodityService.relation({
      name: 'materials',
      of: { commodityId: payload.commodityId },
      add: payload.materials
    })

    await this.commodityCommodityService.relation({
      name: 'models',
      of: { commodityId: payload.commodityId },
      remove: payload.models
    })
    await this.commodityCommodityService.relation({
      name: 'models',
      of: { commodityId: payload.commodityId },
      add: payload.models
    })

    await this.commodityCommodityService.relation({
      name: 'places',
      of: { commodityId: payload.commodityId },
      remove: payload.places
    })
    await this.commodityCommodityService.relation({
      name: 'places',
      of: { commodityId: payload.commodityId },
      add: payload.places
    })

    await this.commodityCommodityService.relation({
      name: 'ruiwus',
      of: { commodityId: payload.commodityId },
      remove: payload.ruiwus
    })
    await this.commodityCommodityService.relation({
      name: 'ruiwus',
      of: { commodityId: payload.commodityId },
      add: payload.ruiwus
    })

    await this.commodityCommodityService.relation({
      name: 'shapes',
      of: { commodityId: payload.commodityId },
      remove: payload.shapes
    })
    await this.commodityCommodityService.relation({
      name: 'shapes',
      of: { commodityId: payload.commodityId },
      add: payload.shapes
    })

    await this.commodityCommodityService.relation({
      name: 'specifications',
      of: { commodityId: payload.commodityId },
      remove: payload.specifications
    })
    await this.commodityCommodityService.relation({
      name: 'specifications',
      of: { commodityId: payload.commodityId },
      add: payload.specifications
    })

    await this.commodityCommodityService.relation({
      name: 'styles',
      of: { commodityId: payload.commodityId },
      remove: payload.styles
    })
    await this.commodityCommodityService.relation({
      name: 'styles',
      of: { commodityId: payload.commodityId },
      add: payload.styles
    })

    await this.commodityCommodityService.relation({
      name: 'techniques',
      of: { commodityId: payload.commodityId },
      remove: payload.techniques
    })
    await this.commodityCommodityService.relation({
      name: 'techniques',
      of: { commodityId: payload.commodityId },
      add: payload.techniques
    })

    await this.commodityCommodityService.relation({
      name: 'themes',
      of: { commodityId: payload.commodityId },
      remove: payload.themes
    })
    await this.commodityCommodityService.relation({
      name: 'themes',
      of: { commodityId: payload.commodityId },
      add: payload.themes
    })

    await this.commodityCommodityService.relation({
      name: 'types',
      of: { commodityId: payload.commodityId },
      remove: payload.types
    })
    await this.commodityCommodityService.relation({
      name: 'types',
      of: { commodityId: payload.commodityId },
      add: payload.types
    })


    // 更新艺术家
    // 商品 关联 商家
    if(payload.sellerId){
      await this.commodityCommodityService.relation({
        name: 'seller',
        // of: commodity.data.identifiers[0].id,
        // of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        // of: payload.commodityId,
        // of: { commodityId: payload.commodityId },
        of: commodity.data.id,
        set: { sellerId: payload.sellerId }
      })
    }

    // 查询商品
    return await this.commodityCommodityService.retrieve({
      commodityId: payload.commodityId
    });

  }





  /**
   * 创建商品选项
   * @param payload
   * type
   */
  async createOptions(payload) {
    console.log("createOptions", payload)
    let data: any = [];
    if (payload.options && payload.options.length) {
      for (let item of payload.options) {
        // 查询商品选项
        const commodityOptions = await this.commodityOptionService.commodityOptionsTypeRetrieve({
          type: payload.type,
          img: item.img,
          zhcn: item['zh-cn'],
          enus: item['en-us'],
          jajp: item['ja-jp'],
          eses: item['es-es'],
          frfr: item['fr-fr'],
        });
        console.log("commodityOptions", commodityOptions)
        if (commodityOptions.success) {
          return {
            success: false,
            code: 10013
          }
        }
        // 商品选项不存在, 创建商品选项
        const commodityOptionsNew = await this.commodityOptionService.commodityOptionsTypeCreate({
          type: payload.type,
          img: item.img,
          zhcn: item['zh-cn'],
          enus: item['en-us'],
          jajp: item['ja-jp'],
          eses: item['es-es'],
          frfr: item['fr-fr'],
        });
        if (!commodityOptionsNew.success) {
          return {
            success: false,
            code: 10004
          }
        }
        // 获取刚创建的商品选项
        const commodityOption = await this.commodityOptionService.commodityOptionsTypeRetrieve({
          type: payload.type,
          img: item.img,
          zhcn: item['zh-cn'],
          enus: item['en-us'],
          jajp: item['ja-jp'],
          eses: item['es-es'],
          frfr: item['fr-fr'],
        });
        if (commodityOption.success) {
          data.push(commodityOption.data)
        } else {
          return {
            success: false,
            code: 10009
          }
        }

      }
    }
    return {
      data,
      success: true,
      code: 10003
    }
  }

  /**
   * 查询 商品选项
   * @param payload
   * type
   */


  async retrieveOption({
    type = '',

  } = {}) {
    return this.commodityOptionService.commodityOptionsTypeRetrieve({
      type
    });
  }


  async retrieveOptionAll(payload) {
    console.log("retrieveOptionAll", payload)
    return this.commodityOptionService.commodityOptionsTypeRetrieveAll({
      type: payload.type,
      isLocale: payload.isLocale || false,
      locale: 'zh-cn'
    });
  }



  /**
   * 修改商品选项
   * @param payload
   */
  async updateOptions({
    type = '',
    id = '',
    img = '',
    zhcn = '',
    enus = '',
    jajp = '',
    eses = ''
  } = {}) {
    console.log("updateOptions", type, id, img, zhcn, enus, jajp, eses)
    // 查询商品选项
    const commodityOptions = await this.commodityOptionService.commodityOptionsTypeRetrieveId({type, id});
    console.log("commodityOptions", commodityOptions )
    if (!commodityOptions.success) {
      return {
        success: false,
        code: 10014
      }
    }

    return  await this.commodityOptionService.commodityOptionsTypeUpdate({
      'type': type,
      'id': id || commodityOptions.data.id,
      'img': img || commodityOptions.data.img,
      'zhcn': zhcn || commodityOptions.data['zh-cn'],
      'enus': enus || commodityOptions.data['en-us'],
      'jajp': jajp || commodityOptions.data['ja-jp'],
      'eses': eses || commodityOptions.data['es-es']
    })

  }


  /**
   * 删除商品选项
   */
  async deleteOptions(payload) {
    // 查询商品选项
    const commodityOptionsShape = await this.commodityOptionService.commodityOptionsTypeRetrieveId({
      type: payload.type,
      id: payload.id
    });
    if (!commodityOptionsShape.success) {
      return {
        success: false,
        code: 10014
      }
    }

    return await this.commodityOptionService.commodityOptionsTypeDelete({
      type: payload.type,
      id: payload.id
    })
  }



  /**
   * 商品评价
   */
    async commodityComment(payload) {
      return await this.commentService.home(payload);
    }


}
