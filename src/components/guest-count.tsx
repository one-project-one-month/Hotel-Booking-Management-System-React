import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'

interface Props {
    isAdult: boolean
    count: number
    onChange: (newCount: number) => void
}

export default function GuestCount({ isAdult, count, onChange }: Props) {
    const MAX_GUESTS = 5

    const handleDecrement = () => {
        onChange(Math.max(0, count - 1))
    }
    const handleIncrement = () => {
        onChange(Math.min(MAX_GUESTS, count + 1))
    }
    return (
        <div className="flex justify-between md:w-[20vw]">
            <section>
                <h3 className="font-medium">{isAdult ? "Adults" : "Children"}</h3>
                <p className="text-sm text-muted-foreground">{isAdult ? "Ages 13 or above" : "Ages 2 – 12"}</p>
            </section>
            <section className="flex justify-center items-center gap-3">
                <Button
                    onClick={handleDecrement}
                    variant="outline"
                    disabled={count === 0}
                    className="rounded-full w-8 h-8 p-0 flex items-center justify-center cursor-pointer hover:border-black"
                >
                    <Minus size={16} />
                </Button>
                <p>{count}</p>
                <Button
                    onClick={handleIncrement}
                    variant="outline"
                    disabled={count === MAX_GUESTS}
                    className="rounded-full w-8 h-8 p-0 flex items-center justify-center cursor-pointer hover:border-black"
                >
                    <Plus size={16} />
                </Button>
            </section>
            
        </div>
    )
}
