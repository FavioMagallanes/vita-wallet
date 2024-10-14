import { useNavigate } from "react-router-dom";
import { useAuth } from "./use-auth";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const { setUser, setToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setToken(null);

    queryClient.clear();

    navigate("/");
  };

  return logout;
};
