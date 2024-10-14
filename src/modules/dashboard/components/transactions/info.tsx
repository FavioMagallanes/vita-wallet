import { FC } from "react";
type InfoProps = {
  children: string;
};
export const Info: FC<InfoProps> = ({ children }) => <div>{children}</div>;
