import { useFetchRoomById } from "@/api/services/rooms";
import type { User } from "@/types/user";
import { Separator } from "@radix-ui/react-separator";
import { intervalToDuration } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  console.log(receipt);
  return (
    <div className="border p-6 min-w-fit rounded-lg bg-pink-200 text-gray-800">
      <h3 className="text-center mb-4 text-pink-600">Reservation Receipt</h3>
      <div>
        <p className=" text-xs my-2">
          <span className=" font-semibold">Your Name</span>: {userData.name}
        </p>
        <p className=" text-xs my-2">
          <span className=" font-semibold">Your Email</span>: {userData.email}
        </p>
      </div>
      <Separator className="border my-2" />
      <Table>
        <TableCaption>Summary of Charges</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Particular</TableHead>
            <TableHead className=" text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Reservation</TableCell>
            <TableCell className=" text-right">{duration} night</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Room Type</TableCell>
            <TableCell className=" text-right">{room?.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Deposit</TableCell>
            <TableCell className=" text-right">
              {receipt.deposit_amount} $
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Charges</TableCell>
            <TableCell className=" text-right">
              {receipt.total_amount} $
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Remaining</TableCell>
            <TableCell className=" text-right font-semibold">
              {receipt.total_amount - receipt.deposit_amount} $
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
export default ReceiptCard;
