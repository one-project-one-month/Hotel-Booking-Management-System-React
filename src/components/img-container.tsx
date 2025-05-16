import { useState } from "react"
import { Skeleton } from "./ui/skeleton"

interface Props {
    src: string
    alt: string
}

export default function ImgContainer({ src, alt }: Props) {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    if (error) {
        return (
            <div className="w-full h-40 rounded-lg flex items-center justify-center bg-gray-100">
                <p className="text-sm text-gray-500">Image unavailable</p>
            </div>
        );
    }
    return (
        <>
            {!loaded && <Skeleton className="w-full h-40 rounded-lg" />}
            <img
                src={src}
                alt={alt}
                className={`w-full h-40 object-cover rounded-lg transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute"
                    }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
        </>
    )
}
