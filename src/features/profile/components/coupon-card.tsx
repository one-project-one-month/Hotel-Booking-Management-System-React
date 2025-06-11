import { Button } from "@/components/ui/button";
import type { Coupon } from "@/types/coupon";
import { useClaimCoupon } from "@/api/services/coupon";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { useCouponReducer } from "@/hooks/useCouponReducer";
import { useEffect } from "react";

interface CouponProps {
    coupon: Coupon;
}

export default function CouponCard({ coupon }: CouponProps) {
    const { mutate: claimCoupon, isPending, isSuccess } = useMutation(useClaimCoupon())
    const {addCoupon, getCoupons} = useCouponReducer()
    const hanldeClaimCoupon = (coupon: Coupon) => {
        claimCoupon(coupon.id)
        addCoupon(coupon)
    }

    useEffect(() => {
        console.log("Getting coupons", getCoupons())
    }, [isSuccess])

    return (
        <div className="relative max-w-sm">
            <div className="bg-green-500 rounded-lg p-7 pr-32 shadow-lg relative overflow-hidden flex items-center">
                {/* Notches on sides */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full"></div>

                <div className="absolute right-24 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-green-400 z-10"></div>

                {/* Coupon Content */}
                <div className="flex items-center space-x-4 z-0">
                    <div className="w-16 h-16 p-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-green-500 text-lg text-center font-bold">{coupon.discount} pts</span>
                    </div>
                    <div className="text-white">
                        <h3 className="text-lg font-semibold">{coupon.code}</h3>
                        <p className="text-xs opacity-90">Use this to get magical discount</p>
                    </div>
                </div>

                {coupon.is_claimed || isSuccess ? (
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-md font-medium shadow-md z-10 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Claimed</span>
                    </div>
                ) : (
                    <Button
                        onClick={() => { hanldeClaimCoupon(coupon) }}
                        disabled={isPending}
                        className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-md z-10"
                    >
                        Claim
                    </Button>
                )}
            </div>
        </div>
    );
}
