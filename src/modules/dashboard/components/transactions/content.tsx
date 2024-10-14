import { FC, ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export const Content: FC<ContentProps> = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
