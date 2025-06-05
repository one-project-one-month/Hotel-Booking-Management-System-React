import React from "react";
import { Link, Outlet } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/logo.jpg";

import NavMenus from "@/components/layout/components/nav-menus";
import ChatAssistant from "@/features/chat-assistant";
import Footer from "@/features/home/components/Footer";

const Navbar: React.FC = () => {
  const isLoggedIn = localStorage.getItem("token") !== null
  return (
    <>
      <nav className="flex justify-between px-4 py-3">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
        </Link>
        <section className="flex items-center gap-3">
          {isLoggedIn ? (
            <Link to="/profile">
              <Avatar className="cursor-pointer hidden md:block">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>GT</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link to="/login" className="me-3 text-blue-500 font-semibold">Login</Link>
          )}
          <NavMenus />
        </section>
      </nav>
      <Outlet />
      <ChatAssistant />
      <div className="my-12">
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
