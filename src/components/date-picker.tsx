import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"

export default function DatePicker() {
    const [date, setDate] = useState<Date>()

    return (
        <div className="flex flex-col items-start gap-4">
            <Button variant="outline" className="w-[280px] justify-start text-left font-normal" disabled>
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
            <div className="p-4 rounded-md border bg-background">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="text-base"
                />
            </div>
        </div>
    )
}
