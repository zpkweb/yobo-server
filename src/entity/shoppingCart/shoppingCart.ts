/**
 * 购物车
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';
import { CommodityPackingMaterialEntity } from '../commodity/commodity_packing_material';
import { CommodityPackingSizeEntity } from '../commodity/commodity_packing_size';

@EntityModel('shoppingCart')
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.shoppingCart)
  user: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.shoppingCart)
  @JoinTable()
  commoditys: CommodityEntity;

  // 关联包装材质
  @OneToOne(type => CommodityPackingMaterialEntity)
  @JoinColumn()
  commodityPackingMaterial: CommodityPackingMaterialEntity;

  // 关联包装大小
  @OneToOne(type => CommodityPackingSizeEntity)
  @JoinColumn()
  commodityPackingSize: CommodityPackingSizeEntity;

  // 日期
  @Column()
  date: number;

}
