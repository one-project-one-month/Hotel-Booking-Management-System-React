import type { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import clsx from "clsx";

interface Props {
    children: ReactNode
    className?: string
}

export default function CardContainer({ children, className } : Props) {
    return (
        <Card 
            className={clsx("cursor-pointer hover:bg-zinc-100", className)}
            tabIndex={0}
        >
            <CardContent className="flex flex-col justify-center">
            {children}
            </CardContent>
        </Card>
    )
}

// h-[100px] md:h-auto