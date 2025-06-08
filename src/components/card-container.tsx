import type { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import clsx from "clsx";

interface Props {
    children: ReactNode
    className?: string
    onClick?: () => void
}

export default function CardContainer({ children, className, onClick } : Props) {
    return (
        <Card 
            className={clsx("cursor-pointer hover:bg-zinc-100", className)}
            tabIndex={0}
            onClick={onClick}
        >
            <CardContent className="flex flex-col justify-center">
            {children}
            </CardContent>
        </Card>
    )
}

// h-[100px] md:h-auto