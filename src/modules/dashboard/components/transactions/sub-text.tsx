import { FC, ReactNode } from "react";

type SubTextProps = {
  children: ReactNode;
};

export const SubText: FC<SubTextProps> = ({ children }) => (
  <p className="text-xs text-gray-500 dark:text-gray-400">{children}</p>
);
