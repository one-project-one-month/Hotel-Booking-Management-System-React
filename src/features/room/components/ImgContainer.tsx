import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

type ImgContainerProps = {
  imgUrl: string;
};

/* Img container with skeleton loading and Img fetch error handling */
function ImgContainer({ imgUrl }: ImgContainerProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="min-w-30 min-h-30 border bg-center bg-no-repeat bg-cover rounded-lg"
      style={{
        backgroundImage: imgUrl && !imgError ? `url(${imgUrl})` : undefined,
      }}
    >
      {/* Skeleton loader*/}
      {!imgLoaded && !imgError && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      {/* Hidden img to handle onLoad and onError */}
      {imgUrl && !imgLoaded && !imgError && (
        <img
          src={imgUrl}
          alt=""
          className="hidden"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}
      {/* Error msg for the error in the img fetching  */}
      {imgLoaded && imgError && (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-500 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
}
export default ImgContainer;
