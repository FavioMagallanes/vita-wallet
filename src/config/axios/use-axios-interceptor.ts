import { useContext, useEffect } from "react";
import { api } from "./axios-instance";
import { AuthContext } from "@/modules/auth/context/auth-context";

export const useAxiosInterceptors = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (authContext?.token) {
        config.headers["Authorization"] = `Bearer ${authContext.token}`;
        config.headers["access-token"] = authContext.token;
        config.headers["client"] = authContext.client;
        config.headers["uid"] = authContext.uid;
        config.headers["expiry"] = authContext.expiry;
        config.headers["app-name"] = "ANGIE";
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [
    authContext?.token,
    authContext?.client,
    authContext?.uid,
    authContext?.expiry,
  ]);

  return api;
};
