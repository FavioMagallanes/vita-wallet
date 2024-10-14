import { FC, ReactNode } from "react";
type AmountProps = {
  children: ReactNode;
};
export const Amount: FC<AmountProps> = ({ children }) => (
  <div className="text-right">{children}</div>
);
