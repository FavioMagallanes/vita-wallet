import { ElementType } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

type NavItemProps = {
  icon: ElementType;
  label: string;
  to: string;
  onClick?: () => void;
};

export const NavItem = ({ icon: Icon, label, to, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "active-class" : "")}
  >
    <Button
      variant="ghost"
      className="font-base w-full justify-start text-gray-600 hover:bg-[#05bcb9] hover:text-white"
      onClick={onClick}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  </NavLink>
);
