import { format, addDays, nextFriday } from "date-fns"
import CardContainer from "@/components/card-container"

interface Props {
    label: "Today" | "Tomorrow" | "This Weekend"
}

export default function DateCard({ label }: Props) {
    const today = new Date()

    const getDateText = () => {
        switch (label) {
            case "Today":
                return format(today, "MMM d")
            case "Tomorrow": {
                const tomorrow = addDays(today, 1)
                return format(tomorrow, "MMM d")
            }
            case "This Weekend": {
                const friday = nextFriday(today)
                const sunday = addDays(friday, 2)
                return `${format(friday, "MMM d")} - ${format(sunday, "MMM d")}`
            }
            default:
                return ""
        }
    }

    return (
        <CardContainer className="h-[100px] md:h-auto">
            <section className="flex flex-col justify-center space-y-2">
                <h3 className="text-sm md:text-[1em] font-medium">{label}</h3>
                <p className="text-xs text-muted-foreground">{getDateText()}</p>
            </section>
        </CardContainer>
    )
}
