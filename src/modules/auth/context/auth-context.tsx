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
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getLocalStorage = (key: string) => localStorage.getItem(key);

  const [user, setUser] = useState<User | null>(
    getLocalStorage("user")
      ? JSON.parse(getLocalStorage("user") as string)
      : null,
  );
  const [token, setToken] = useState<string | null>(getLocalStorage("token"));
  const [client, setClient] = useState<string | null>(
    getLocalStorage("client"),
  );
  const [uid, setUid] = useState<string | null>(getLocalStorage("uid"));
  const [expiry, setExpiry] = useState<string | null>(
    getLocalStorage("expiry"),
  );

  const updateLocalStorage = (key: string, value: string | null) => {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  };

  const updateUser = (newUser: User | null) => {
    setUser(newUser);
    updateLocalStorage("user", newUser ? JSON.stringify(newUser) : null);
  };

  const updateToken = (newToken: string | null) => {
    setToken(newToken);
    updateLocalStorage("token", newToken);
  };

  const updateClient = (newClient: string | null) => {
    setClient(newClient);
    updateLocalStorage("client", newClient);
  };

  const updateUid = (newUid: string | null) => {
    setUid(newUid);
    updateLocalStorage("uid", newUid);
  };

  const updateExpiry = (newExpiry: string | null) => {
    setExpiry(newExpiry);
    updateLocalStorage("expiry", newExpiry);
  };

  const logout = () => {
    updateUser(null);
    updateToken(null);
    updateClient(null);
    updateUid(null);
    updateExpiry(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        client,
        uid,
        expiry,
        setUser: updateUser,
        setToken: updateToken,
        setClient: updateClient,
        setUid: updateUid,
        setExpiry: updateExpiry,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
