import type { Coupon } from "@/types/coupon";
import Axios from "@/config/api";
import type { ApiResponse } from "@/types/api-response";

export async function fetchCoupons(): Promise<Coupon[]> {
    const response = await Axios.get<ApiResponse<Coupon[]>>("/coupons?order_by=asc&sort_by=discount");
    return response.data.data;
}