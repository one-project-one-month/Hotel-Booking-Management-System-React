export interface Coupon {
  id: string;
  code: string;
  discount: number;
  is_active: boolean;
  is_claimed: boolean;
  expiry_date: Date;
  user_id: string;
};

export type CouponApplied = Pick<Coupon, 'id' | 'code' | 'discount'>;


