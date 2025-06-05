import type { Coupon } from "@/types/coupon";
import Axios from "@/config/api";
import type { ApiResponse } from "@/types/api-response";

export async function fetchCoupons(): Promise<Coupon[]> {
    const response = await Axios.get<ApiResponse<Coupon[]>>("/coupons?order_by=asc&sort_by=discount");
    return response.data.data;
}

const claimCouponPayload = {
    method: "claim"
}
const activateCouponPayload = {
    method: "activate"
}

export async function claimCoupon(couponId: string): Promise<void> {
    await Axios.patch(`coupons/${couponId}`, claimCouponPayload)
}
export async function activateCoupon(couponId: string): Promise<void> {
    await Axios.patch(`coupons/${couponId}`, activateCouponPayload)
}