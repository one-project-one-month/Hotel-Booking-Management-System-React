import { useFetchRoomById } from "@/api/services/rooms";
import { TableCell, TableRow } from "@/components/ui/table";
import type { BookingData } from "@/types/api-response";
import { format, intervalToDuration } from "date-fns";

interface HistoryTableRowProps {
  user: string;
  key: number;
  history: BookingData;
}

function HistoryTableRow({ user, key, history }: HistoryTableRowProps) {
  const checkInDate = format(history.check_in, "dd MMM yyyy");
  const checkOutDate = format(history.check_out, "dd MMM yyyy");
  const { data: room } = useFetchRoomById(history.room_id);
  let { days = 0 } = intervalToDuration({
    start: checkInDate,
    end: checkOutDate,
  });
  days = Math.abs(days);
  return (
    <TableRow className=" text-center h-15" key={key}>
      <TableCell className="">{user}</TableCell>
      <TableCell className="w-[150px]">{room?.type}</TableCell>
      <TableCell className="w-[150px]">{checkInDate}</TableCell>
      <TableCell className="w-[150px]">{checkOutDate}</TableCell>
      <TableCell className="text-right pr-10 w-[150px]">
        {days} {days && days > 1 ? "nights" : "night"}
      </TableCell>
      <TableCell className="text-right pr-10 w-[150px]">
        {history.total_amount} $
      </TableCell>
    </TableRow>
  );
}
export default HistoryTableRow;
