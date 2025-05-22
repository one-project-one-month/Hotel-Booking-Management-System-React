import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface GuestSelectorProps {
    title: string
    subtitle: string | React.ReactNode
    count: number
    onIncrement: () => void
    onDecrement: () => void
  }
  
  export default function GuestSelector({ title, subtitle, count, onIncrement, onDecrement }: GuestSelectorProps) {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-500">{subtitle}</p>
        </div>
  
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={onDecrement}
            disabled={count === 0}
          >
            <Minus className="h-4 w-4" />
          </Button>
  
          <span className="w-5 text-center">{count}</span>
  
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={onIncrement}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }