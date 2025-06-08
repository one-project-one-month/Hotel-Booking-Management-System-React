import { format, addDays, nextThursday, nextFriday, isWithinInterval } from "date-fns"
import CardContainer from "@/components/card-container"
import clsx from "clsx"

interface Props {
  date: Date | undefined
  label: "Today" | "Tomorrow" | "This Weekend"
  isActive: boolean
  onSelect: () => void
}

export default function DateCard({ date, label, isActive, onSelect }: Props) {
  const today = new Date()
  const friday = nextThursday(today)
  const sunday = addDays(friday, 3)

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

  console.log(
    "Interval check",
    date ? isWithinInterval(date, { start: friday, end: sunday }) : false
  )
  return (
    <CardContainer
      className={clsx(
        "h-[100px] md:h-auto cursor-pointer",
        (isActive && !!date) ||
          (date &&
            (
              (label === "Today" && format(date, "MMM d") === format(new Date(), "MMM d")) ||
              (label === "Tomorrow" && format(date, "MMM d") === format(addDays(new Date(), 1), "MMM d")) ||
              (label === "This Weekend" && isWithinInterval(date, { start: friday, end: sunday }))
            )
          )
          ? "ring-2 ring-primary shadow-lg"
          : ""
      )}
      onClick={onSelect}
    >
      <section className="flex flex-col justify-center space-y-2">
        <h3 className="text-sm md:text-[1em] font-medium">{label}</h3>
        <p className="text-xs text-muted-foreground">{getDateText()}</p>
      </section>
    </CardContainer>
  )
}

