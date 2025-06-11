import Lottie from "lottie-react";
import dreamStayAnimation from "@/assets/loading_animation.json";

export default function Loading() {
    return (
        <div
            className="w-[200px] h-[200px]"
            style={{ clipPath: 'circle(50% at 50% 50%)' }}
        >
            <Lottie animationData={dreamStayAnimation} loop={true} />
        </div>
    )
}
