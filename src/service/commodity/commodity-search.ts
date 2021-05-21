import { Provide, Inject } from "@midwayjs/decorator";
import { BaseCommodityServer } from '../base/commodity/commodity';
import { CommodityAttributeName } from 'src/service/commodity/attribute/name';
import { CommodityAttributeDesc } from 'src/service/commodity/attribute/desc';
import { CommodityAttributeColor } from 'src/service/commodity/attribute/color';

import { CommodityCategoryService } from './commodity-options/category';
import { CommodityClassificationService } from './commodity-options/classification';
import { CommodityMaterialService } from './commodity-options/material';
import { CommodityModelService } from './commodity-options/model';
import { CommodityPlaceService } from './commodity-options/place';
import { CommodityRuiwuService } from './commodity-options/ruiwu';
import { CommodityShapeService } from './commodity-options/shape';
import { CommoditySpecificationService } from './commodity-options/specification';
import { CommodityStyleService } from './commodity-options/style';
import { CommodityTechniqueService } from './commodity-options/technique';
import { CommodityThemeService } from './commodity-options/theme';
import { CommodityTypeService } from './commodity-options/type';
import { CommodityUseService } from './commodity-options/use';

@Provide()
export class CommoditySearchService {

  @Inject()
  baseCommodityServer: BaseCommodityServer;

  @Inject()
  commodityAttributeName: CommodityAttributeName;

  @Inject()
  commodityAttributeDesc: CommodityAttributeDesc;

  @Inject()
  commodityAttributeColor: CommodityAttributeColor;

  @Inject()
  commodityCategoryService: CommodityCategoryService;

  @Inject()
  commodityClassificationService: CommodityClassificationService;

  @Inject()
  commodityMaterialService: CommodityMaterialService;

  @Inject()
  commodityModelService: CommodityModelService;

  @Inject()
  commodityPlaceService: CommodityPlaceService;

  @Inject()
  commodityRuiwuService: CommodityRuiwuService;

  @Inject()
  commodityShapeService: CommodityShapeService;

  @Inject()
  commoditySpecificationService: CommoditySpecificationService;

  @Inject()
  commodityStyleService: CommodityStyleService;

  @Inject()
  commodityTechniqueService: CommodityTechniqueService;

  @Inject()
  commodityThemeService: CommodityThemeService;

  @Inject()
  commodityTypeService: CommodityTypeService;

  @Inject()
  commodityUseService: CommodityUseService;



  async search(payload) {
    console.log("search", payload)
    var commodityIds = [];
    let isSearchCommodityIds = false;
    let searchResule = true;
    // 搜索商品名称
    if(searchResule && payload.name) {
      isSearchCommodityIds = true;
      commodityIds = await this.getCommodityId('name', payload.name, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.desc) {
      isSearchCommodityIds = true;
      commodityIds = await this.getCommodityId('desc', payload.desc, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }
    if(searchResule && payload.colors) {
      isSearchCommodityIds = true;
      let color;
      if(payload.colors.substr(0,1) == '#'){
        color = payload.colors.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
      }else{
        color = payload.colors.toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
      }

      commodityIds = await this.getCommodityId('color', color, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.price) {
      isSearchCommodityIds = true;
      let price = payload.price.split(',')
      let priceMin = '';
      let priceMax = '';
      if(price.length === 1) {
        priceMin = '0';
        priceMax = price[0];
      }else if(price.length === 2) {
        priceMin = price[0];
        priceMax = price[1];
      }

      commodityIds = await this.getCommodityId('price', [priceMin, priceMax], commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.categorys && payload.categorys.length){
      isSearchCommodityIds = true;
      if(typeof payload.categorys == 'string'){
        payload.categorys = payload.categorys.split(',');
      }
      commodityIds = await this.getCommodityId('categorys', payload.categorys, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }
    if(searchResule && payload.classifications && payload.classifications.length){
      isSearchCommodityIds = true;
      if(typeof payload.classifications == 'string'){
        payload.classifications = payload.classifications.split(',');
      }
      commodityIds = await this.getCommodityId('classifications', payload.classifications, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.materials && payload.materials.length){
      isSearchCommodityIds = true;
      if(typeof payload.materials == 'string'){
        payload.materials = payload.materials.split(',');
      }
      commodityIds = await this.getCommodityId('materials', payload.materials, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.models && payload.models.length){
      isSearchCommodityIds = true;
      if(typeof payload.models == 'string'){
        payload.models = payload.models.split(',');
      }
      commodityIds = await this.getCommodityId('models', payload.models, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.places && payload.places.length){
      isSearchCommodityIds = true;
      if(typeof payload.places == 'string'){
        payload.places = payload.places.split(',');
      }
      commodityIds = await this.getCommodityId('places', payload.places, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.ruiwus && payload.ruiwus.length){
      isSearchCommodityIds = true;
      if(typeof payload.ruiwus == 'string'){
        payload.ruiwus = payload.ruiwus.split(',');
      }
      commodityIds = await this.getCommodityId('ruiwus', payload.ruiwus, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.shapes && payload.shapes.length){
      isSearchCommodityIds = true;
      if(typeof payload.shapes == 'string'){
        payload.shapes = payload.shapes.split(',');
      }
      commodityIds = await this.getCommodityId('shapes', payload.shapes, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.specifications && payload.specifications.length){
      isSearchCommodityIds = true;
      if(typeof payload.specifications == 'string'){
        payload.specifications = payload.specifications.split(',');
      }
      commodityIds = await this.getCommodityId('specifications', payload.specifications, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.techniques && payload.techniques.length){
      isSearchCommodityIds = true;
      if(typeof payload.techniques == 'string'){
        payload.techniques = payload.techniques.split(',');
      }
      commodityIds = await this.getCommodityId('techniques', payload.techniques, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }


    if(searchResule && payload.themes && payload.themes.length){
      isSearchCommodityIds = true;
      if(typeof payload.themes == 'string'){
        payload.themes = payload.themes.split(',');
      }
      commodityIds = await this.getCommodityId('themes', payload.themes, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.types && payload.types.length){
      isSearchCommodityIds = true;
      if(typeof payload.types == 'string'){
        payload.types = payload.types.split(',');
      }
      commodityIds = await this.getCommodityId('types', payload.types, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    if(searchResule && payload.uses && payload.uses.length){
      isSearchCommodityIds = true;
      if(typeof payload.uses == 'string'){
        payload.uses = payload.uses.split(',');
      }
      commodityIds = await this.getCommodityId('uses', payload.uses, commodityIds);
      searchResule = commodityIds.length ? true : false;
    }

    return await this.searchCommodity({
        id: payload.id,
        commodityId: payload.commodityId,
        sellerId: payload.sellerId,
        state: payload.state,
        width: payload.width,
        height: payload.height,
        choice: payload.choice,
        pageSize: payload.pageSize,
        currentPage: payload.currentPage,
        isSearchCommodityIds: isSearchCommodityIds,
        commodityIds
      })



    // console.log("searchs payload", payload)
    // let searchAll = true;

    // if (payload.id) {
    //   searchAll = false;
    // }

    // if (payload.commodityId) {
    //   searchAll = false;
    // }

    // if (payload.sellerId) {
    //   searchAll = false;
    // }

    // if (payload.state) {
    //   searchAll = false;
    // }


    // console.log("commodityIds", commodityIds)
    return {
      data: commodityIds,
      success: true,
      code: 10009
    };
    let result;
    // console.log("searchAll", searchAll)
    if(commodityIds.length){

      // result = await this.baseCommodityServer.BaseRetrieveAll(payload);
    }else{
      // result = await this.baseCommodityServer.BaseSearchs(payload);
    }

    // console.log("searchs result", result)
    // if(result) {
    //   for(let item of result) {
    //     const photos = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
    //     if(photos.success) {
    //       item.photos = photos.data;
    //     }

    //     // const browsingCount = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
    //     // if(photos.success) {
    //     //   item.photos = photos.data;
    //     // }
    //   }
    // }

    return result;
    // let data = result[0];
    // let total = result[1];

    // if (data) {
    //   if(payload.isLocale){
    //     data = this.searchFilter(payload.locale, data)
    //   }
    //   return {
    //     data: {
    //       list: data,
    //       total
    //     },
    //     success: true,
    //     code: 10009
    //   }
    // } else {
    //   return {
    //     success: false,
    //     code: 10010
    //   }
    // }
  }

  async getCommodityId(type, payload, commodityIds) {
    let dataIds = [];
    let data:any;
    switch(type) {
      case 'name':
        data = await this.commodityAttributeName.search(payload);
        break;
      case 'desc':
        data = await this.commodityAttributeDesc.search(payload);
        break;
      case 'color':
        data = await this.commodityAttributeColor.search(payload);
        break;
      case 'categorys':
        data = await this.commodityCategoryService.search(payload);
        break;
      case 'classifications':
        data = await this.commodityClassificationService.search(payload);
        break;
      case 'materials':
        data = await this.commodityMaterialService.search(payload);
        break;
      case 'models':
        data = await this.commodityModelService.search(payload);
        break;
      case 'places':
        data = await this.commodityPlaceService.search(payload);
        break;
      case 'ruiwus':
        data = await this.commodityRuiwuService.search(payload);
        break;
      case 'shapes':
        data = await this.commodityShapeService.search(payload);
        break;
      case 'specifications':
        data = await this.commoditySpecificationService.search(payload);
        break;
      case 'styles':
        data = await this.commodityStyleService.search(payload);
        break;
      case 'techniques':
        data = await this.commodityTechniqueService.search(payload);
        break;
      case 'themes':
        data = await this.commodityThemeService.search(payload);
        break;
      case 'types':
        data = await this.commodityTypeService.search(payload);
        break;
      case 'uses':
        data = await this.commodityUseService.search(payload);
        break;
    }
    // console.log("data", data.data)
    dataIds = data.success ? data.data.map(item => item.commodityId) : [];

    console.log("dataIds", type, dataIds);

    if(dataIds.length) {
      if(commodityIds && commodityIds.length) {
        let newIds = [];
        // console.log(commodityIds, dataIds)
        for(let item of commodityIds) {
          for(let dataItem of dataIds) {
            // console.log(item, dataItem)

            if(item == dataItem) {
              newIds.push(dataItem)
            }
          }
        }
        commodityIds = newIds;
      }else{
        commodityIds = [...dataIds];
      }
    }else{
      commodityIds = [];
    }
    // console.log("commodityIds", commodityIds)
    return commodityIds;
  }


  async searchCommodity(payload) {
    console.log("searchCommodity", payload)
    const result = await this.baseCommodityServer.BaseSearchCommodity(payload);
    let data = result[0];
    let total = result[1];

    if (data) {
      // if(payload.isLocale){
      //   data = this.filter(payload.locale, data)
      // }
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
