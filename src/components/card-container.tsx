import type { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface Props {
    children: ReactNode
}

export default function CardContainer({ children } : Props) {
    return (
        <Card 
            className="cursor-pointer hover:bg-zinc-100 h-[100px] md:h-auto"
            tabIndex={0}
        >
            <CardContent className="flex flex-col justify-center">
                {children}
            </CardContent>
        </Card>
    )
}
