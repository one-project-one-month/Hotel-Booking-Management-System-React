import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface UserInfoCardProps {
    icon: LucideIcon
    title: string
    value: string | number
}

export default function DataPointCard({ icon: Icon, title, value }: UserInfoCardProps) {
    return (
        <Card className="bg-white shadow-xl">
            <div className="flex justify-start items-center px-4 gap-2">
                <div className="bg-slate-100 rounded-full p-3">
                    <Icon color="#64E2B7" size={35} />
                </div>
                <div>
                    <p className="text-sm text-gray-600">{title}</p>
                    <p className="text-lg font-semibold">{value}</p>
                </div>

            </div>
        </Card>
    )
}
