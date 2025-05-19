import { Outlet } from "react-router";
import Search from "./search";

export default function SearchBar() {
  return (
    <>
        <Search />
        <Outlet />
    </>
  )
}
