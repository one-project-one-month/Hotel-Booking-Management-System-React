import type { Coupon, CouponApplied } from "@/types/coupon";
import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { couponReducer } from "./CouponReducer";
import { loadFromStorage } from "@/lib/localStorage";

interface CouponContextType {
    coupons: CouponApplied[];
    addCoupon: (coupon: Coupon) => void;
    removeCoupon: (couponId: string) => void;
    getCoupons: () => CouponApplied[];
    isLoaded: boolean;
}

export const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const CouponContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [coupons, dispatch] = useReducer(couponReducer, [])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const storedCoupons = loadFromStorage()
        dispatch({type: "LOAD_FROM_STORAGE", payload: storedCoupons})
        setIsLoaded(true)
    }, [])

    const addCoupon = useCallback((coupon: Coupon) => {
        dispatch({type: "ADD_COUPON", payload: coupon})
    }, [])

    const removeCoupon = useCallback((couponId: string) => {
        dispatch({type: "REMOVE_COUPON", payload: couponId})
    }, [])

    const getCoupons = useCallback(() => {
        return [...coupons]
    }, [coupons])

    const value = {
        coupons,
        addCoupon,
        removeCoupon,
        getCoupons,
        isLoaded
    }

    return <CouponContext.Provider value={value}>
        {children}
    </CouponContext.Provider>
}