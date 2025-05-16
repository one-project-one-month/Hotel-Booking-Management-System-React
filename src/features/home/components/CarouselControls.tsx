import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CarouselControls() {
    return (
        <div className="border absolute -top-6 right-10">
            <CarouselPrevious className="-left-6" />
            <CarouselNext />
        </div>
    )
}
