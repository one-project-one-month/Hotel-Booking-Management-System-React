import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

export default function CouponAlert() {
    return (
        <Alert className="text-green-500">
            <CheckCircle2Icon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                You have successfully claimed the coupon! Enjoy your discount.
            </AlertDescription>
        </Alert>
    )
}
