import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface GuestSelectorProps {
  title: string
  subtitle: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

export default function GuestSelector({ title, subtitle, count, onIncrement, onDecrement }: GuestSelectorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
          onClick={onDecrement}
          disabled={count === 0 || (title === "Adults" && count <= 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-medium">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
          onClick={onIncrement}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
