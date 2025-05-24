import React from "react";
import { Link, Outlet } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/logo.jpg";

import NavMenus from "@/components/layout/components/nav-menus";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between px-4 py-3">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
        </Link>
        <section className="flex items-center gap-3">
          <Link to="/profile">
            <Avatar className="cursor-pointer hidden md:block">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>GT</AvatarFallback>
            </Avatar>
          </Link>
          <NavMenus />
        </section>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
