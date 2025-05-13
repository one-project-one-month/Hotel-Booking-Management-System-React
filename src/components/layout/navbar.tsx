import React from 'react';
import { Link, Outlet } from 'react-router';

const Navbar: React.FC = () => {
    return (
        <>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
                <Link to="/">Home</Link>
                <Link to="/bookings">Booking</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;