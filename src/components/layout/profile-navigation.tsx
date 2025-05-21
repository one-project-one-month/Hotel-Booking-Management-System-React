import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router";

const links = [
    { id: 1, name: 'About Me', href: '/profile' },
    { id: 2, name: 'History', href: '/history' },
    { id: 3, name: 'Coupon', href: '/coupons' },
    { id: 4, name: 'Wish Lists', href: '/wish-lists' },
    { id: 5, name: 'Receipt', href: '/receipt' },
]


export default function ProfileNavigation() {
    const location = useLocation();

    return (
        <div className="flex h-screen sticky">
            <aside className="hidden md:block w-1/5 px-5 py-4 bg-gray-100 h-full">
            <nav>
                <ul className="list-none p-0 m-0">
                {links.map(link => {
                    const isActive = link.href === location.pathname;
                    return (
                    <li key={link.id} className="mb-4">
                        <Link
                        to={link.href}
                        className={clsx(
                            "block px-4 py-2 rounded font-medium transition-colors",
                            {
                            "bg-pink-400 text-white rounded-lg": isActive,
                            "text-gray-800 hover:bg-gray-200": !isActive,
                            }
                        )}
                        >
                        {link.name}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
            </aside>
            <div className="flex-1 md:border md:border-gray-200 p-4">
            <Outlet />
            </div>
        </div>
    );
}
