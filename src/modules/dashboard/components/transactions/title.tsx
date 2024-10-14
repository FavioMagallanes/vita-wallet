import { FC, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({ children }) => (
  <h2 className="mb-4 text-xl font-semibold">{children}</h2>
);
