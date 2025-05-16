import { useRef, useState } from "react"
import PopoverContainer from "./popovercontainer"
import { Button } from "./ui/button"
import { Search as SearchIcon } from 'lucide-react'
import clsx from "clsx"
import DatePicker from "@/components/date-picker"
import DateCard from "./date-card"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import CardContainer from "@/components/card-container"
import GuestCount from "./guest-count"
import { Separator } from "@/components/ui/separator"


export default function Search() {
    const [activePopover, setActivePopover] = useState<string | null>(null)
    const [isFocused, setIsFocused] = useState(false)
    const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    return (
        <div className="flex justify-center items-center px-2">
            <section
                className={clsx(
                    "flex rounded-full shadow-md px-2 gap-2 items-center w-full md:w-lg lg:w-xl max-w-3xl",
                    "transition-all duration-500 ease-in-out", 
                    isFocused
                        ? "bg-zinc-300 shadow-lg"
                        : "bg-white shadow-md border border-transparent"
                )}
            >
                <PopoverContainer
                    id="date"
                    title="Date"
                    description="Add dates"
                    isActive={activePopover === "date"}
                    setActivePopover={setActivePopover}
                    setIsFocused={setIsFocused}
                    blurTimeoutRef={blurTimeoutRef}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <section className="grid grid-cols-2 md:grid-cols-1 gap-2 md:w-full">
                            <DateCard label="Today" />
                            <DateCard label="Tomorrow" />
                            <DateCard label="This Weekend" />
                            <div className="md:hidden">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div tabIndex={0}>
                                            <CardContainer>
                                                <h3 className="text-sm font-medium">Choose Dates</h3>
                                            </CardContainer>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="me-10 w-max">
                                        <DatePicker />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </section>
                        <div className="hidden md:block">
                            <DatePicker />
                        </div>
                    </div>
                </PopoverContainer>
                <PopoverContainer
                    id="guest"
                    title="Guest"
                    description="Add guests"
                    isActive={activePopover === "guest"}
                    setActivePopover={setActivePopover}
                    setIsFocused={setIsFocused}
                    blurTimeoutRef={blurTimeoutRef}
                >
                    <section className="py-3">
                        <GuestCount isAdult={true} />
                        <Separator className="w-full my-4" />
                        <GuestCount isAdult={false} />
                    </section>
                </PopoverContainer>

                <div className="my-2">
                    <Button className="rounded-full cursor-pointer ml-auto w-12 h-12 shadow-md bg-pink-600 hover:bg-pink-700 focus:bg-pink-700">
                        <SearchIcon />
                    </Button>
                </div>
            </section>
        </div>
    )
}
