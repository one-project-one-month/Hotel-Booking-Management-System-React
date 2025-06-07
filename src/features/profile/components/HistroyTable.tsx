import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HistoryTableRow from "./HistoryTableRow";
import type { BookingData } from "@/types/api-response";

interface HistroyTableProps {
  userName: string;
  history: BookingData[];
}

function HistroyTable({ history, userName }: HistroyTableProps) {
  return (
    <Table>
      <TableCaption>A list of your recent booking history.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Name</TableHead>
          <TableHead className="text-center">Room Type</TableHead>
          <TableHead className="text-center">Check In Date</TableHead>
          <TableHead className="text-center">Check Out Date</TableHead>
          <TableHead className="text-center">Duration</TableHead>
          <TableHead className="text-center">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {history.map((h, index) => (
          <HistoryTableRow user={userName} key={index} history={h} />
        ))}
      </TableBody>
    </Table>
  );
}
export default HistroyTable;
