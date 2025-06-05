import { CouponContext } from "@/context/CouponContext";
import { useContext } from "react";

export const useCouponReducer = () => {
    const context = useContext(CouponContext);
    if (context === undefined) {
        throw new Error('useCouponReducer must be used within a CouponProvider');
    }
    return context;
};