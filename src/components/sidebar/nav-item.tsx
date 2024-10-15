import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
};

export const NavItem = ({ icon: Icon, label, to }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "active-class" : "")}
  >
    <Button
      variant="ghost"
      className="font-base w-full justify-start text-gray-600 hover:bg-[#05bcb9] hover:text-white"
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  </NavLink>
);
