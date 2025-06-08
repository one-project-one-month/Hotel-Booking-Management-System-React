import { Calendar } from "@/components/ui/calendar"

interface DatePickerProps {
    onSelect: (date: Date | undefined) => void
    initialDate: Date | undefined
}

export default function DatePicker({ initialDate, onSelect }: DatePickerProps) {

    return (
        <div className="flex flex-col items-start gap-4">
            <div className="p-4 rounded-md border bg-background">
                <Calendar
                    mode="single"
                    selected={initialDate}
                    onSelect={onSelect}
                    initialFocus
                    className="text-base"
                />
            </div>
        </div>
    )
}
