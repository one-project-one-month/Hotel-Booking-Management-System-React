import type { Coupon } from "@/types/coupon";
import { useQuery, useQueryClient, type MutationOptions } from "@tanstack/react-query";
import { activateCoupon, claimCoupon, fetchCoupons } from "../queries/coupon";
import { toast } from "sonner";

export const useFetchCoupons = () => {
  return useQuery<Coupon[]>({
    queryKey: ["coupons"],
    queryFn: fetchCoupons
  });
}

export const useClaimCoupon = (): MutationOptions<void, unknown, string> => {
  const queryClient = useQueryClient()
  return {
    mutationFn: (couponId: string) => claimCoupon(couponId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["coupons"] });
      toast.success("Coupon Claimed!")
    },
    onError: (error) => {
      let message = "An error occurred";
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      }
      toast.error(message);
    }
  }
}

export const useActivateCoupon = (): MutationOptions<void, unknown, string> => {
  const queryClient = useQueryClient()
  return {
    mutationFn: (couponId: string) => activateCoupon(couponId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["coupons"] });
      toast.success("Coupon is used!")
    },
    onError: (error) => {
      let message = "An error occurred";
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      }
      toast.error(message);
    }
  }
}