import { createBrowserRouter } from 'react-router';
import Navbar from '@/components/layout/navbar';
import Home from '@/features/home';
import Room from '@/features/room';
import Booking from '@/features/booking';
import Profile from '@/features/profile';
import Search from '@/components/search';


const routes = [
    {
        path: "/",
        Component: Navbar,
        children: [
            {
                path: "/",
                Component: Search,
                children: [
                    { index: true, Component: Home }
                ]
            },
            { path: "/rooms", Component: Room },
            { path: "/bookings", Component: Booking },
            { path: "/profile", Component: Profile },
        ],
    },
];

export const router = createBrowserRouter(routes);
