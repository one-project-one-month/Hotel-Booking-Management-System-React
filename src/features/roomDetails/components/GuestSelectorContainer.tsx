import { useEffect, useState } from "react"
import GuestSelector from "./GuestSelector"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import type { GuestCount, GuestType } from "@/types/booking"
import useUserInputContext from "@/hooks/useUserInputContext"

interface GuestSelectorProps {
  maxGuests: number
}

export default function GuestSelectorContainer( { maxGuests }: GuestSelectorProps) {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false)
  const { setGuestCount } = useUserInputContext()
  const [ totalGuestCount, setTotalGuestCount] = useState<GuestCount>({
    adults: 1,
    children: 0,
  })

  useEffect(() => {
    setGuestCount(totalGuestCount)
  }, [totalGuestCount])

  const totalGuests = totalGuestCount.adults + totalGuestCount.children

  const getGuestText = () => {
    const total = totalGuests
    return `${total.toString()} ${total === 1 ? "guest" : "guests"}`
  }

  const handleGuestChange = (type: GuestType, increment: boolean) => {
    setTotalGuestCount((prev) => {
      const newCount = { ...prev }

      if (increment) {
        // Maximum 3 guests (adults + children)
        if (totalGuests >= maxGuests) {
          return prev
        }
        newCount[type] += 1
      } else {
        if (type === "adults" && prev.adults <= 1) return prev
        if (prev[type] <= 0) return prev
        newCount[type] -= 1
      }

      return newCount
    })
  }

  return (
    <div className="p-4">
      <div className="text-sm font-medium uppercase mb-1">GUESTS</div>
      <Popover open={isGuestSelectorOpen} onOpenChange={setIsGuestSelectorOpen}>
        <PopoverTrigger asChild>
          <div
            className="cursor-pointer flex justify-between items-center text-base font-normal"
            onClick={() => { setIsGuestSelectorOpen(!isGuestSelectorOpen); }}
          >
            {getGuestText()}
            {isGuestSelectorOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 p-0 data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up"
          align="start"
          side="bottom"
          sideOffset={8}
          avoidCollisions={false}
          collisionPadding={0}
        >
          <div className="p-4 space-y-6">
            <GuestSelector
              title="Adults"
              subtitle="Age 13+"
              count={totalGuestCount.adults}
              onIncrement={() => { handleGuestChange("adults", true); }}
              onDecrement={() => { handleGuestChange("adults", false); }}
            />

            <GuestSelector
              title="Children"
              subtitle="Ages 2–12"
              count={totalGuestCount.children}
              onIncrement={() => { handleGuestChange("children", true); }}
              onDecrement={() => { handleGuestChange("children", false); }}
            />

            <p className="text-sm text-muted-foreground">This place has a maximum of 3 guests.</p>

            <div className="flex justify-end">
              <Button variant="ghost" className="underline" onClick={() => { setIsGuestSelectorOpen(false); }}>
                Close
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
