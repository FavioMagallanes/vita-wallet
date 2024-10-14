import { FC, ReactNode } from "react";
type DetailsProps = {
  children: ReactNode;
};
export const Details: FC<DetailsProps> = ({ children }) => (
  <div className="flex items-center space-x-4">{children}</div>
);
