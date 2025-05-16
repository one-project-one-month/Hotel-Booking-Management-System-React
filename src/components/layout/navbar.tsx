import React from 'react';
import { Outlet } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import NavMenus from '@/components/layout/components/nav-menus'

const Navbar: React.FC = () => {
    return (
        <>
            <nav className='flex justify-between px-2 py-1'>
                <div>
                    <h1 className='font-semibold text-lg'>Guest Website</h1>
                </div>
                <section className='flex items-center gap-3'>
                    <Avatar className='cursor-pointer hidden md:block'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>GT</AvatarFallback>
                    </Avatar>
                    <NavMenus />
                </section>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;