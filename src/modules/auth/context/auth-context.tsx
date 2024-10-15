import { createContext, useState, useEffect } from "react";

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
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [client, setClient] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [expiry, setExpiry] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedClient = localStorage.getItem("client");
    const storedUid = localStorage.getItem("uid");
    const storedExpiry = localStorage.getItem("expiry");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
    if (storedClient) setClient(storedClient);
    if (storedUid) setUid(storedUid);
    if (storedExpiry) setExpiry(storedExpiry);
  }, []);

  const updateUser = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  const updateToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const updateClient = (newClient: string | null) => {
    setClient(newClient);
    if (newClient) {
      localStorage.setItem("client", newClient);
    } else {
      localStorage.removeItem("client");
    }
  };

  const updateUid = (newUid: string | null) => {
    setUid(newUid);
    if (newUid) {
      localStorage.setItem("uid", newUid);
    } else {
      localStorage.removeItem("uid");
    }
  };

  const updateExpiry = (newExpiry: string | null) => {
    setExpiry(newExpiry);
    if (newExpiry) {
      localStorage.setItem("expiry", newExpiry);
    } else {
      localStorage.removeItem("expiry");
    }
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
