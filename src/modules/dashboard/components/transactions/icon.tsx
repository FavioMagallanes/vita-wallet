import { FC, ReactNode } from "react";

type IconProps = {
  children: ReactNode;
};

export const Icon: FC<IconProps> = ({ children }) => (
  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-800">
    {children}
  </div>
);
