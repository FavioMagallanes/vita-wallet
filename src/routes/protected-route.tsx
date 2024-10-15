import { FC, ReactNode } from "react";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
};
