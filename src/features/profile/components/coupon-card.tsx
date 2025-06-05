import { Button } from "@/components/ui/button";
import type { Coupon } from "@/types/coupon";
import CouponAlert from "./coupon-alert";
import { useState } from "react";

interface CouponProps {
    coupon: Coupon;
}

export default function CouponCard({ coupon }: CouponProps) {
    const [showAlert, setShowAlert] = useState(false);

    const handleClaim = () => {
        setShowAlert(true);
    };

    if (showAlert) {
        return <CouponAlert />;
    }

    return (
        <div className="relative max-w-sm">
            <div className="bg-green-500 rounded-lg p-7 pr-32 shadow-lg relative overflow-hidden flex items-center">
                {/* Notches on sides */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full"></div>

                {/* Dashed Divider */}
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

                <Button
                    onClick={handleClaim}
                    disabled={coupon.is_claimed}
                    className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-md z-10"
                >
                    Claim
                </Button>
            </div>
        </div>
    );
}
