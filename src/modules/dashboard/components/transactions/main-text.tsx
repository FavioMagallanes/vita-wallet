import { FC, ReactNode } from "react";
type MainTextProps = {
  children: ReactNode;
};
export const MainText: FC<MainTextProps> = ({ children }) => (
  <p className="font-medium">{children}</p>
);
