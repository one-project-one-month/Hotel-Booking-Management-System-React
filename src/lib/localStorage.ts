import { STORAGE_KEY } from "@/config/constants"
import type { CouponApplied } from "@/types/coupon"

export const saveToStorage = (coupons: CouponApplied[]) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(coupons))
    } catch (error) {
        console.error("Failed to save", error)
    }
}

export const loadFromStorage = (): CouponApplied[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? (JSON.parse(stored) as CouponApplied[]) : []
    } catch (error) {
        console.error("Failed to load", error)
        return []
    }
}