import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { intervalToDuration } from "date-fns";
import { type BookingPayload } from "@/api/queries/booking";
import { toast } from "sonner";
import useUserInputContext from "@/hooks/useUserInputContext";
import type { Room } from "@/types/rooms";
import { useMutation } from "@tanstack/react-query";
import { useCreateBookingOption } from "@/api/services/booking";
import { useFetchBankAccounts } from "@/api/services/bankAccounts";
import { z } from "zod";
import PaymentConditions from "./PaymentConditions";

interface CheckOutPaymentCardProps {
  roomData: Room;
}

const formSchema = z.object({
  id: z.string().min(1, { message: "account id is required" }),
  accountNumber: z.string().min(1, { message: "account number is required" }),
  pin: z.string().min(1, { message: "pin is required" }),
});

const DEPOSIT_PERCENT = 0.25;

function CheckOutPaymentCard({ roomData }: CheckOutPaymentCardProps) {
  const { mutate: createBookingMutation } = useMutation(
    useCreateBookingOption()
  );
  const { data: bankAccounts } = useFetchBankAccounts();
  const { checkInDate, checkOutDate, guestCount } = useUserInputContext();
  const [checked, setChecked] = useState(false);
  const [isFinishedReading, setIsFinishedReading] = useState(false);

  //Form Error
  const [errors, setErrors] =
    useState<z.ZodFormattedError<(typeof formSchema)["_output"]>>();

  // Calculate duration and total cost
  const { days: duration = 0 } =
    checkInDate && checkOutDate
      ? intervalToDuration({ start: checkInDate, end: checkOutDate })
      : { days: 0 };
  const totalGuest = guestCount.adults + guestCount.children;
  const totalCost = duration && roomData.price * duration;
  const [openItem, setOpenItem] = useState<string | undefined>("item-1");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const userAcc = bankAccounts?.find((acc) => acc.id === formValues.id);
    const result = formSchema.safeParse(formValues);

    if (!result.success) {
      setErrors(result.error.format());
      return;
    }
    setErrors(undefined);

    // Check whether accountNumber and pin match, and if they don't match setErrors as same format with zod error format to reuse the errors state for error msg
    if (userAcc) {
      if (formValues.accountNumber !== userAcc.accountNumber) {
        setErrors((prev) => ({
          ...prev,
          _errors: [],
          accountNumber: {
            _errors: ["Account number does not match."],
          },
        }));
      }
      if (formValues.pin !== userAcc.pin) {
        setErrors((prev) => ({
          ...prev,
          _errors: [],
          pin: {
            _errors: ["Pin does not match."],
          },
        }));
      }
    }

    if (!checkInDate) {
      toast.error("Check-in date is required.");
      return;
    }
    const payload: BookingPayload = {
      userId: "3dd80c5c-cc5f-4fed-9691-32aa502ddaa5",
      roomId: roomData.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guestCount: totalGuest,
      totalAmount: totalCost,
    };
    if (
      !errors ||
      Object.values(errors).every(
        (field) => !("_errors" in field) || field._errors.length === 0
      )
    ) {
      setErrors(undefined);
      createBookingMutation(payload);
    }
  };
  return (
    <div className="border rounded-lg min-w-[450px]  p-8 ">
      <h3 className=" font-bold text-lg mb-4">Comfirm and Pay</h3>
      <Accordion
        className="flex flex-col gap-8"
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        <AccordionItem
          className="border rounded-lg group py-2 px-4"
          value="item-1"
        >
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            1. Choose when to pay
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center justify-between space-x-2">
                <Label className="font-light" htmlFor="option-one">
                  Pay ${totalCost} SGD now
                </Label>
                <RadioGroupItem value="option-one" id="option-one" />
              </div>
              <Separator className="border w-full my-4" />
              <div className="flex justify-between space-x-2">
                <Label className="font-light " htmlFor="option-two">
                  <p className="flex flex-col gap-4">
                    Pay part now, part later
                    <span className="block max-w-[300px] text-xs text-wrap text-gray-500">
                      ${totalCost * DEPOSIT_PERCENT} SGD now, ${totalCost} SGD
                      charged on 14 Aug. No extra fees.
                    </span>
                  </p>
                </Label>
                <RadioGroupItem value="option-two" id="option-two" />
              </div>
            </RadioGroup>
            <div className="flex justify-end mt-4">
              <Button
                className="px-4 py-2 rounded transition"
                onClick={() => {
                  setOpenItem("item-2");
                }}
                type="button"
              >
                Next
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border rounded-lg py-2 px-4" value="item-2">
          <AccordionTrigger>2. Add a payment method</AccordionTrigger>
          <AccordionContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col relative">
                <label
                  htmlFor="id"
                  className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Account Id:
                </label>
                <input
                  name="id"
                  id="id"
                  type="text"
                  className="border px-4 py-2 rounded-md m-2"
                />
                {errors?.id && errors.id._errors.length > 0 && (
                  <p className="text-red-700 text-xs mb-4">
                    {errors.id._errors[0]}
                  </p>
                )}
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="accountNumber"
                  className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Bank Account No:
                </label>
                <input
                  name="accountNumber"
                  id="accountNumber"
                  type="text"
                  className="border px-4 py-2 rounded-md m-2"
                />
                {errors?.accountNumber &&
                  errors.accountNumber._errors.length > 0 && (
                    <p className="text-red-700 text-xs mb-4">
                      {errors.accountNumber._errors[0]}
                    </p>
                  )}
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="pin"
                  className="after:ml-0.5 after:text-red-700 after:content-['*']"
                >
                  Secret Pin:
                </label>
                <input
                  name="pin"
                  id="pin"
                  type="password"
                  className="border px-4 py-2 rounded-md m-2"
                />
                {errors?.pin && errors.pin._errors.length > 0 && (
                  <p className="text-red-700 text-xs mb-4">
                    {errors.pin._errors[0]}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <PaymentConditions 
                  checked={checked}
                  setChecked={setChecked}
                  isFinishedReading={isFinishedReading}
                  setFinishedReading={setIsFinishedReading}
                />
                <Button disabled={!checked} className="px-4 cursor-pointer bg-pink-600 hover:bg-pink-700 py-2 rounded transition">Pay</Button>
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default CheckOutPaymentCard;
