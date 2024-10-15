import { FC } from "react";
import { BalanceItem } from "./balance-item";

type BalanceItemListProps = {
  balances: Record<string, number>;
};

const balanceData = [
  { icon: "/public/icons/icono-usd.png", alt: "usd logo", key: "usd" },
  { icon: "/public/icons/btc.svg", alt: "btc logo", key: "btc" },
  { icon: "/public/icons/usdt.svg", alt: "usdt logo", key: "usdt" },
];

export const BalanceItemList: FC<BalanceItemListProps> = ({ balances }) => (
  <>
    {balanceData.map((balance) => (
      <BalanceItem
        key={balance.key}
        icon={balance.icon}
        alt={balance.alt}
        amount={balances[balance.key]}
      />
    ))}
  </>
);
