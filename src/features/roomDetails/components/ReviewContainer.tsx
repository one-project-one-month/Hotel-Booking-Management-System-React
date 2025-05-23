import logo from "../../../assets/logo.jpg";
import Reviews from "./Reviews";

export interface Review {
  id: string;
  username: string;
  userImg: string;
  usedTime: string;
  rating: number;
  ratedTime: string;
  review: string;
}

export default function ReviewContainer() {
  const reviews: Review[] = [
    {
      id: "1",
      username: "John Doe",
      userImg: logo,
      usedTime: "1 year on airbn",
      rating: 4,
      ratedTime: "December 2024",
      review:
        "Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.",
    },
    {
      id: "1",
      username: "John Doe",
      userImg: logo,
      usedTime: "1 year on airbn",
      rating: 4,
      ratedTime: "December 2024",
      review:
        "Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.",
    },
    {
      id: "3",
      username: "John Doe",
      userImg: logo,
      usedTime: "1 year on airbn",
      rating: 4,
      ratedTime: "December 2024",
      review:
        "Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.",
    },
    {
      id: "4",
      username: "John Doe",
      userImg: logo,
      usedTime: "1 year on airbn",
      rating: 4,
      ratedTime: "December 2024",
      review:
        "Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.Great room, clean and comfortable.",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-semibold my-8">What our users say?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-15 sm:gap-3 gap-10">
        {reviews.map((review, index) => (
          <Reviews key={index} review={review} />
        ))}
      </div>
    </>
  );
}
