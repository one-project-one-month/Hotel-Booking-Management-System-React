import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
    id: string
    title: string;
    description: string;
    children: ReactNode;
    isActive: boolean;
    setActivePopover: (id: string | null) => void;
    setIsFocused: (focused: boolean) => void;
    blurTimeoutRef: React.RefObject<ReturnType<typeof setTimeout> | null>
};

export default function PopoverContainer({
    id,
    title,
    description,
    children,
    isActive,
    setActivePopover,
    setIsFocused,
    blurTimeoutRef
}: Props) {
    return (
        <Popover onOpenChange={(open) => {
            if (open) {
                if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current)
                setActivePopover(id)
                setIsFocused(true)
            } else {
                blurTimeoutRef.current = setTimeout(() => {
                    setActivePopover(null)
                    setIsFocused(false)
                }, 100)
            }
        }}>
            <PopoverTrigger asChild>
                <div
                    className={clsx(
                        "rounded-4xl py-3 w-full hover:bg-slate-50 hover:shadow-md cursor-pointer",
                        { "bg-slate-50": isActive }
                    )}
                >
                    <h3 className="text-sm font-semibold px-5">{title}</h3>
                    <p className="text-xs text-zinc-500 px-5">{description}</p>
                </div>
            </PopoverTrigger>
            <PopoverContent className="mt-2 w-full min-w-[250px] max-w-[90vw] md:max-w-2xl shadow-lg rounded-2xl">
                {children}
            </PopoverContent>
        </Popover>
    )
}
