import { useFetchRoomById } from "@/api/services/rooms";
import type { User } from "@/types/user";
import { intervalToDuration } from "date-fns";

interface ReceiptCardProps {
  userData: User;
  index: number;
}

function ReceiptCard({ userData, index }: ReceiptCardProps) {
  const receipt = userData.bookings[index];
  const { data: room } = useFetchRoomById(receipt.room_id);
  let { days: duration = 0 } =
    receipt.check_in && receipt.check_out
      ? intervalToDuration({ start: receipt.check_in, end: receipt.check_out })
      : { days: 0 };
  duration = Math.abs(duration);
  return (
    <div className="p-6 rounded-lg border-2 border-indigo-500 shadow-lg">
      {/* <!-- Customer Info --> */}
      <div className="bg-slate-50 rounded-lg p-5 mb-6 border-l-4 border-indigo-600">
        <h3 className="text-slate-800 text-lg font-semibold mb-3 flex items-center">
          <span className="mr-2">👤</span>
          Guest Information
        </h3>
        <div className="text-slate-600 space-y-1">
          <div>
            <span className="font-medium">Name:</span> {userData.name}
          </div>
          <div>
            <span className="font-medium">Email:</span> {userData.email}
          </div>
        </div>
      </div>

      {/* <!-- Booking Details --> */}
      <div className="mb-6">
        <h3 className="text-slate-800 text-md font-semibold mb-4 pb-2 border-b-2 border-slate-200">
          Booking Details
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-3 border-b border-slate-100 hover:bg-slate-50 -mx-3 px-3 rounded-md transition-colors">
            <span className="text-slate-600 font-medium">
              Reservation Duration
            </span>
            <span className="text-slate-800 font-semibold">
              {duration} {duration > 1 ? "nights" : "night"}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-slate-100 hover:bg-slate-50 -mx-3 px-3 rounded-md transition-colors">
            <span className="text-slate-600 font-medium">Room Type</span>
            <span className="text-slate-800 font-semibold">{room?.type}</span>
          </div>

          <div className="flex justify-between items-center py-3 hover:bg-slate-50 -mx-3 px-3 rounded-md transition-colors">
            <span className="text-slate-600 font-medium">Deposit Paid</span>
            <span className="text-slate-800 font-semibold">
              {receipt.deposit_amount} $
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Charges Summary --> */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-5 mt-5">
        <h3 className="text-slate-800 text-md font-semibold mb-4 pb-2 border-b-2 border-slate-200">
          Summary of Charges
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-3 border-b border-slate-200">
            <span className="text-slate-600 font-medium">Total Charges</span>
            <span className="text-slate-800 font-semibold">
              {receipt.total_amount} $
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-slate-200">
            <span className="text-slate-600 font-medium">Amount Paid</span>
            <span className="text-slate-800 font-semibold">
              {receipt.deposit_amount} $
            </span>
          </div>

          {/* Total  */}
          <div className="flex justify-between items-center pt-4 mt-3 border-t-2 border-indigo-600">
            <span className="text-slate-800 text-md font-semibold">
              Remaining Bill
            </span>
            <span className="text-indigo-600 text-md font-semibold">
              {receipt.total_amount - receipt.deposit_amount} $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptCard;
