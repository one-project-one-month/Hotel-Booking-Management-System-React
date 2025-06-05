import type { Coupon } from "@/types/coupon"
import CouponCard from "./coupon-card"

interface CouponListProps {
    coupons: Coupon[]
}

export default function CouponList( { coupons }: CouponListProps ) {
  return (
    <section>
        {coupons.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coupons.map((coupon) => (
                    <li key={coupon.id}>
                        <CouponCard coupon={coupon} />
                    </li>
                ))}
            </ul>
        ) : (
            <p>No coupons available.</p>
        )}
    </section>
  )
}
