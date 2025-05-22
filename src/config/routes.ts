import RoomDetail from "@/features/roomDetails";
import { createBrowserRouter } from 'react-router';
import Navbar from '@/components/layout/navbar';
import Home from '@/features/home';
import Room from '@/features/room';
import Booking from '@/features/booking';
import Profile from '@/features/profile';
import SearchBar from '@/components/search-bar';
import ProfileNavigation from '@/components/layout/profile-navigation';
import BookingHistory from '@/features/profile/booking_history';
import Coupon from '@/features/profile/coupon';
import WishLists from '@/features/profile/wish_lists';
import Receipt from '@/features/profile/receipt';
import RoomCheckout from "@/features/room/room-checkout";

const routes = [
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        path: "/",
        Component: SearchBar,
        children: [
          { index: true, Component: Home },
        ],
      },
      { path: "/rooms", Component: Room },
      { path: "/rooms/:roomNo", Component: RoomDetail },
      { path: "/rooms/checkout/:roomNo", Component: RoomCheckout },
      { path: "/bookings", Component: Booking },
      {
        Component: ProfileNavigation,
        children: [
          { path: "/profile", Component: Profile },
          { path: "/history", Component: BookingHistory },
          { path: "/coupons", Component: Coupon },
          { path: "/wish-lists", Component: WishLists },
          { path: "/receipt", Component: Receipt },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
