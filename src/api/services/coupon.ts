import type { Coupon } from "@/types/coupon";
import { useQuery } from "@tanstack/react-query";
import { fetchCoupons } from "../queries/coupon";

export const useFetchCoupons = () => {
  return useQuery<Coupon[]>({
    queryKey: ["coupons"],
    queryFn: fetchCoupons
  });
}