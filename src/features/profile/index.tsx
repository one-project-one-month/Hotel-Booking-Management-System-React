import { user } from "@/mock/user";
import { Book, Star, Tickets, HandCoins } from "lucide-react";
import { rooms } from "@/mock/rooms";
export default function Profile() {
  return (
    <div className="grid sm:grid-cols-[minmax(0,_500px)_minmax(0,_580px)] grid-cols-1 h-[calc(100vh-64px)] relative justify-center">
      <p className="text-center text-gray-600 absolute w-full">My Profile</p>
      <div className="flex gap-14 sm:gap-8 mt-18 mx-8 min-w-fit justify-center">
        <img
          src={rooms[0].imgUrl[0]}
          alt=""
          className="w-35 h-35 sm:w-40 sm:h-40 rounded-full"
        />
        <div className=" flex flex-col gap-4">
          <p className="text-gray-700 text-sm">{user.userName}</p>
          <a className="text-gray-700 text-sm underline">{user.email}</a>
          <p className="text-gray-700 text-sm">{user.phoneNo}</p>
          <button className="bg-cyan-400 shadow-xl text-white text-sm py-[0.5rem] px-[1rem] rounded-lg">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="mx-8 mt-18  grid gap-8 min-w-fit ">
        <div className="flex justify-between text-sm">
          <p className="text-gray-700 flex gap-4">
            <Star />
            Point
          </p>
          <p>{user.userPoint}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-700 flex gap-4">
            <Tickets />
            Coupon Available
          </p>
          <p>{user.coupons}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-700 flex gap-4">
            <Book />
            Total Booking
          </p>
          <p>{user.totalBooking}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-700 flex gap-4">
            <HandCoins />
            Total Amount
          </p>
          <p>$ {user.totalAmount}</p>
        </div>
      </div>
      <div className=" self-end mx-auto sm:mx-0 sm:ml-8  ">
        <button className="bg-red-400 text-white text-sm rounded-lg py-[0.75rem] px-[3.5rem]">
          Logout
        </button>
      </div>
    </div>
  );
}
