import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";

function CarouselSkeleton() {
  return (
    <div className="flex gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="relative w-60">
          <button className="absolute right-2 top-2 w-[10%] max-w-8">
            <Heart
              fill={"#212f3d"}
              color="#D4D1D0"
              className=" transition-colors"
              strokeWidth={2}
            />
          </button>

          <Skeleton className="w-full h-30 rounded-lg" />
          <Skeleton className="w-40 mt-4 h-6 rounded-lg" />
          <Skeleton className="w-40 mt-4 h-6 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
export default CarouselSkeleton;
