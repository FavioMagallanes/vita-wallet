import { FC } from "react";
import { useSidebar } from "@/context/use-sidebar";
import { Button } from "@/components/ui/button";
import { ProfileResponseData } from "@/modules/dashboard/types/profile-types";
import { Menu } from "lucide-react";
import { BalanceItemList } from "./balance-items-list";

type BalanceProps = {
  userProfile: ProfileResponseData;
};

export const Balance: FC<BalanceProps> = ({ userProfile }) => {
  const { toggleSidebar } = useSidebar();

  const balances = {
    usd: Number(userProfile?.attributes?.balances.usd || 0),
    btc: Number(userProfile?.attributes?.balances.btc || 0),
    usdt: Number(userProfile?.attributes?.balances.usdt || 0),
  };

  return (
    <header className="flex h-auto flex-col rounded-lg bg-white px-4 py-2 shadow dark:border-gray-700 dark:bg-gray-800 sm:h-16 sm:flex-row sm:items-center sm:justify-between">
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
              {userProfile?.attributes?.first_name || "Usuario"}
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 sm:mt-0 sm:justify-end">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Mis saldos:</span>
          <BalanceItemList balances={balances} />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Hola David</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
