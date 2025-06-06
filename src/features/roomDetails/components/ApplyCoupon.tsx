import { useActivateCoupon } from "@/api/services/coupon";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCouponReducer } from "@/hooks/useCouponReducer";
import type { CouponApplied } from "@/types/coupon";
import { useMutation } from "@tanstack/react-query";
import { Tag } from "lucide-react";
import { Link } from "react-router";

interface Props {
    onApply: (coupon: CouponApplied) => void
}

export default function ApplyCoupon({ onApply }: Props) {
    const { getCoupons, removeCoupon } = useCouponReducer()
    const {mutate: claimCoupon, isPending} = useMutation(useActivateCoupon())

    const coupons = getCoupons()

    const handleApplyCoupon = (coupon: CouponApplied) => {
        onApply(coupon)
        claimCoupon(coupon.id)
        removeCoupon(coupon.id)
    }
    return (
        <section>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-900">Apply Coupons & Save More</h3>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent >
                        {coupons.length > 0 ? (
                            <div className="grid grid-cols-3 gap-1.5">
                                {coupons.map(coupon => (
                                    <div key={coupon.id} className="flex items-center justify-between gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-sm font-medium">{coupon.code}</span>
                                        </div>

                                        <Button disabled={isPending} onClick={() => { handleApplyCoupon(coupon) }} className="bg-blue-500 hover:bg-blue-600 cursor-pointer">Apply</Button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center w-full">
                                <h2 className="text-red-500 text-lg">No Coupon Available!!</h2>
                                <span>Get some <Link className="text-blue-500 underline" to="/coupons">coupons</Link></span>
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
