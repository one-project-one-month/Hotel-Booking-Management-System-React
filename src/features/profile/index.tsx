import { user } from "@/mock/user";
import { Book, Star, Tickets, HandCoins } from "lucide-react";

import UserInfoCard from "./components/user-info-card";
import { Button } from "@/components/ui/button";
import DataPointCard from "./components/data-point-card";

// import { rooms } from "@/mock/rooms";
export default function Profile() {
  return (
    <>
      <h3 className="font-semibold text-3xl mb-3">My Profile</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <UserInfoCard
          name={user.userName}
          email={user.email}
          phone={user.phoneNo}
          profilePicture={user.profileImg}
        />
        <article>
          <h3 className="font-semibold text-2xl ">Complete your profile</h3>
          <p className="w-full md:w-96 mt-3 text-slate-500">Your Airbnb profile is an important part of every reservation. Complete yours to help other hosts and guests get to know you.</p>
          <Button className="mt-3 bg-pink-600 hover:bg-pink-700 cursor-pointer px-12 py-5 rounded-lg shadow-md">Get Started</Button>
        </article>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mt-8 py-2">
        <DataPointCard 
          icon={HandCoins}
          title="Total Points"
          value={user.userPoint}
        />
        <DataPointCard 
          icon={Tickets}
          title="Coupons Available"
          value={user.coupons}
        />
        <DataPointCard 
          icon={Book}
          title="Total Bookings"
          value={user.totalBooking}
        />
        <DataPointCard 
          icon={Star}
          title="Total Amount"
          value={user.totalAmount}
        />
      </section>
    </>
  );
}
