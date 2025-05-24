import { Button } from "@/components/ui/button";

interface QuickSuggestionProps {
    text: string
    icon: React.ComponentType<{ size: number; className?: string }>
    onClick: (text: string) => void
}

export default function QuickSuggestion({ text, icon: Icon, onClick }: QuickSuggestionProps) {
    return (
        <Button
            onClick={() => onClick(text)}
            className="flex items-center gap-2 px-6 py-2 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-sm"
        >
            <Icon size={14} className="text-amber-500" />
            {text}
        </Button>
    )
}
