import { useSidebar } from "@/context/use-sidebar";
import { Button } from "../ui/button";
import { NavItem } from "./nav-item";
import {
  Menu,
  Home,
  CreditCard,
  User,
  CircleHelp,
  Send,
  ArrowRightLeft,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLogout } from "@/modules/auth/hooks/use-logout";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const logout = useLogout();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform bg-[#ffffff] shadow-2xl transition-transform duration-300 ease-in-out dark:bg-gray-800 lg:static lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between px-4">
          <img
            src="/public/logo.png"
            alt="logo"
            className="mt-6 h-8 w-auto lg:h-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <NavItem to="/dashboard" icon={Home} label="Inicio" />
          <NavItem to="#" icon={Send} label="Transferir" />
          <NavItem to="#" icon={CreditCard} label="Recargar" />
          <NavItem to="/exchange" icon={ArrowRightLeft} label="Intercambiar" />
          <NavItem to="#" icon={User} label="Perfil" />
          <NavItem to="#" icon={CircleHelp} label="Ayuda" />
        </nav>

        <div className="mt-auto p-4" onClick={logout}>
          <NavItem to="#" icon={LogOut} label="Cerrar Sesión" />
        </div>
      </div>
    </aside>
  );
};
