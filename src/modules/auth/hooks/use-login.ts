import {
  LoginServiceResponse,
  signIn,
  SignInData,
} from "@/services/auth/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./use-auth";

export const useLogin = () => {
  const { setUser, setToken, setClient, setUid, setExpiry } = useAuth();

  const mutation = useMutation<LoginServiceResponse, Error, SignInData>({
    mutationFn: async (data: SignInData) => signIn(data),
    onSuccess: (data) => {
      setUser(data.userdata);
      setToken(data.headers["access-token"]);
      setClient(data.headers.client);
      setUid(data.headers.uid);
      setExpiry(data.headers.expiry);
    },
    onError: (error) => {
      console.error("Error en el login:", error);
    },
  });

  return mutation;
};
