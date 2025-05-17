import { createBrowserRouter } from "react-router";
import Navbar from "@/components/layout/navbar";
import Home from "@/features/home";
import Room from "@/features/room";
import Booking from "@/features/booking";
import Profile from "@/features/profile";
import RoomDetails from "@/features/roomDetails";

const routes = [
  {
    path: "/",
    Component: Navbar,
    children: [
      { path: "/", Component: Home },
      { path: "/rooms", Component: Room },
      { path: "/rooms/:roomNo", Component: RoomDetails },
      { path: "/bookings", Component: Booking },
      { path: "/profile", Component: Profile },
    ],
  },
];

export const router = createBrowserRouter(routes);
