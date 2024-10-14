import { FC, ReactNode } from "react";
type MainTextProps = {
  children: ReactNode;
};
export const MainText: FC<MainTextProps> = ({ children }) => (
  <p className="text-sm font-medium">{children}</p>
);
