import ReceiptCard from "./components/ReceiptCard";
import { useFetchUserById } from "@/api/services/user";

export default function Receipt() {
  const { data: user } = useFetchUserById(
    "0fa05b29-7b9c-415a-ac42-e8a7046459e5"
  );
  const bookingData = user?.bookings ?? [];
  console.log(bookingData);
  return (
    <div className=" h-[90vh] overflow-scroll p-4 flex flex-col items-center">
      <h3 className="text-center my-4 font-semibold text-xl">
        Your Booking Receipts
      </h3>

      {bookingData.length !== 0 && user && (
        <div className="flex flex-wrap gap-4 justify-center">
          {bookingData.map((_, i) => (
            <ReceiptCard userData={user} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
