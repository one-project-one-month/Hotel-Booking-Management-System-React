import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarouselSkeleton() {
    return (
        <CarouselContent>
            {Array(6).fill(0).map((_, i) => (
                <CarouselItem
                    key={i}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                    <div className="p-2">
                        <Skeleton className="w-full h-40 rounded-lg" />
                        <Skeleton className="w-3/4 h-4 mt-2" />
                        <Skeleton className="w-full h-3 mt-2" />
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
    )
}
