import { useSidebar } from "@/context/use-sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Balance = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-auto flex-col border-b bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800 sm:h-16 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src="/public/icons/coin.svg" alt="icon" />
          <h1 className="text-xl font-semibold">
            ¡Hola{" "}
            <span className="bg-gradient-to-r from-[#06b5b4] to-[#16768a] bg-clip-text font-extrabold text-transparent">
              David!
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 sm:mt-0 sm:justify-end">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Mis saldos:</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="h-5 w-5"
              src="/public/icons/icono-usd.png"
              alt="usd logo"
            />
            <span className="text-sm font-medium">$10,234.56</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="h-5 w-5"
              src="/public/icons/btc.svg"
              alt="btc logo"
            />
            <span className="text-sm font-medium">0.5431</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="h-5 w-5"
              src="/public/icons/tether.svg"
              alt="usdt logo"
            />
            <span className="text-sm font-medium">1,000.00</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Hola David</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <img
                  src="/placeholder-user.jpg"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
