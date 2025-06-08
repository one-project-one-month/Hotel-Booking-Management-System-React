import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  User,
  Clock,
  Receipt,
  Percent,
  HelpCircle,
  LogOut,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

const menuSections: {
  items: {
    id: number
    label: string;
    icon: ReactNode;
    isDanger?: boolean;
    route: string;
  }[];
}[] = [
  {
    items: [
      {
        id: 1,
        label: "Profile",
        icon: <User className="w-4 h-4 mr-2" />,
        route: "/profile",
      },
      {
        id: 2,
        label: "History",
        icon: <Clock className="w-4 h-4 mr-2" />,
        route: "/history",
      },
      {
        id: 3,
        label: "Receipt",
        icon: <Receipt className="w-4 h-4 mr-2" />,
        route: "/receipt",
      },
    ],
  },
  {
    items: [
      {
        id: 4,
        label: "Coupons",
        icon: <Percent className="w-4 h-4 mr-2" />,
        route: "/coupons",
      },
    ],
  },
  {
    items: [
      {
        id: 5,
        label: "Help Center",
        icon: <HelpCircle className="w-4 h-4 mr-2" />,
        route: "/",
      },
    ],
  },
  {
    items: [
      {
        id: 6,
        label: "Log Out",
        icon: <LogOut className="w-4 h-4 mr-2 text-red-500" />,
        isDanger: true,
        route: "/profile",
      },
    ],
  },
];

export default function NavMenus() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className="w-10 h-10 bg-slate-100 rounded-full cursor-pointer"
        >
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 me-1.5">
        {menuSections.map((section) => (
          <div key={section.items[0].id} className="space-y-1">
            {section.items.map(
              ({ label, icon, isDanger, route }, itemIndex) => {
                const showSeparator =
                  isDanger;
                return (
                  <>
                    {showSeparator && <DropdownMenuSeparator />}
                    <Link to={route}>
                      <DropdownMenuItem
                        key={itemIndex}
                        className={`cursor-pointer${
                          isDanger ? " text-red-500" : ""
                        }`}
                      >
                        {icon}
                        <span>{label}</span>
                      </DropdownMenuItem>
                    </Link>
                  </>
                );
              }
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
