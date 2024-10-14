import { createContext, useState } from "react";

type User = {
  first_name: string;
};

type AuthContextProps = {
  user: User | null;
  token: string | null;
  client: string | null;
  uid: string | null;
  expiry: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setClient: (client: string | null) => void;
  setUid: (uid: string | null) => void;
  setExpiry: (expiry: string | null) => void;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [client, setClient] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [expiry, setExpiry] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        client,
        uid,
        expiry,
        setUser,
        setToken,
        setClient,
        setUid,
        setExpiry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
