import { saveToStorage } from "@/lib/localStorage";
import type { Coupon, CouponApplied } from "@/types/coupon";

type CouponAction =
    { type: "ADD_COUPON"; payload: Coupon } |
    { type: 'REMOVE_COUPON'; payload: string } |
    { type: 'LOAD_FROM_STORAGE'; payload: CouponApplied[] };

export const couponReducer = (state: CouponApplied[], action: CouponAction): CouponApplied[] => {

    switch (action.type) {
        case 'LOAD_FROM_STORAGE':
            return action.payload;

        case 'ADD_COUPON': {
            const { id, code, discount } = action.payload

            const isCouponExist = state.some(coupon => coupon.id === id)
            if (isCouponExist) return state

            const updatedState = [...state, { id, code, discount }];
            saveToStorage(updatedState);
            return updatedState;
        }

        case 'REMOVE_COUPON': {
            const updatedState = state.filter(coupon => coupon.id !== action.payload);
            saveToStorage(updatedState);
            return updatedState;
        }

        default:
            return state
    }
}