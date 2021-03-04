import { MyCouponEntity } from "../my/coupon";
export declare class CouponEntity {
    id: number;
    couponId: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    myCoupon: MyCouponEntity;
}
