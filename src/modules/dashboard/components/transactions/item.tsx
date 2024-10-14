import { FC, ReactNode } from "react";

type ItemProps = {
  children: ReactNode;
};
export const Item: FC<ItemProps> = ({ children }) => (
  <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
    {children}
  </div>
);
