import { UserEntity } from "../user/user";
import { CouponEntity } from "../coupon/coupon";
export declare class MyCouponEntity {
    id: number;
    myCouponId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    coupon: CouponEntity;
}
