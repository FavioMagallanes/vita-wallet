import React, { FC } from "react";

export const BalanceItem: FC<{ icon: string; alt: string; amount: number }> =
  React.memo(({ icon, alt, amount }) => (
    <div className="flex items-center space-x-2">
      <img className="h-5 w-5" src={icon} alt={alt} />
      <span className="text-sm font-medium">{amount.toLocaleString()}</span>
    </div>
  ));
