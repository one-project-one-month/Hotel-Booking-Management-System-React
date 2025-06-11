import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { paymentPolicy, refundPolicy } from "@/mock/policy";
import { Button } from "@/components/ui/button";
interface PaymentConditionsProps {
  checked: boolean;
  isFinishedReading: boolean;
  setChecked: (checked: boolean) => void;
  setFinishedReading: (finished: boolean) => void;
}

export default function PaymentConditions({
  checked,
  setChecked,
  isFinishedReading,
  setFinishedReading,
}: PaymentConditionsProps) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        disabled={!isFinishedReading}
        checked={checked}
        onCheckedChange={setChecked}
      />
      <div className="grid gap-2">
        <Label htmlFor="terms-2">Accept payment conditions</Label>
        <Dialog>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the{" "}
            <DialogTrigger className="text-blue-500 underline underline-offset-4 cursor-pointer">
              terms and conditions.
            </DialogTrigger>
          </p>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment and Refund Policy</DialogTitle>
              <DialogDescription>
                Pleasee read our payment and refund policy carefully before
                proceeding with your booking. By confirming your reservation,
                you agree to the following terms:
              </DialogDescription>
            </DialogHeader>
            <section>
              <ul className="list-disc pl-6 space-y-2">
                {paymentPolicy.map((policy) => (
                  <li key={policy.id}>{policy.point}</li>
                ))}
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                {refundPolicy.map((policy) => (
                  <li key={policy.id}>{policy.point}</li>
                ))}
              </ul>
            </section>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => {
                    setFinishedReading(true);
                  }}
                  variant="default"
                  className="w-full my-3"
                >
                  Marked as read
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
