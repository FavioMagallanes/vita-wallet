import { FC, ReactNode } from "react";

type TransactionProps = {
  children: ReactNode;
};

export const Transaction: FC<TransactionProps> = ({ children }) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
};
