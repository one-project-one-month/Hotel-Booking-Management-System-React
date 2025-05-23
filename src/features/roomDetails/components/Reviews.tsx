import type { Review } from "./ReviewContainer";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
export default function Reviews({ review }: { review: Review }) {
  const customStyles = {
    itemShapes: Star,
    activeFillColor: "black",
    inactiveFillColor: "#aeb6bf",
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-3">
        <img
          src={review.userImg}
          alt="user image"
          loading="lazy"
          className="w-[45px] object-cover rounded-full"
        />
        <div>
          <h1 className="font-medium">{review.username}</h1>
          <p className="text-sm font-light">{review.usedTime}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Rating
          value={review.rating}
          readOnly
          style={{ fill: "black", maxWidth: 60 }}
          itemStyles={customStyles}
        />
        <p className="text-sm font-medium">{review.ratedTime}</p>
      </div>
      <p className="w-full font-light text-base md:w-5/6">{review.review}</p>
    </div>
  );
}
