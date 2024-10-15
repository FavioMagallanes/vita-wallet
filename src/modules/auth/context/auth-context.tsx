/**
 * AuthContext define el contexto de autenticación para gestionar los datos de autenticación
 * de usuario en una aplicación React.
 *
 * Este contexto proporciona una interfaz para acceder y actualizar los detalles de
 * autenticación del usuario, como la información del usuario, token, cliente, UID
 * y tiempo de expiración. También incluye métodos para cerrar sesión y actualizar
 * estos detalles en el almacenamiento local.
 *
 * @property {User | null} user - El objeto usuario que contiene los detalles del usuario,
 *                                  o null si no hay un usuario autenticado.
 * @property {string | null} token - El token de autenticación para la sesión del usuario,
 *                                    o null si no está disponible.
 * @property {string | null} client - El identificador del cliente para la sesión del usuario,
 *                                     o null si no está disponible.
 * @property {string | null} uid - El identificador único para el usuario,
 *                                  o null si no está disponible.
 * @property {string | null} expiry - El tiempo de expiración del token de sesión,
 *                                     o null si no está disponible.
 * @property {(user: User | null) => void} setUser - Función para actualizar el estado del usuario
 *                                                    y el almacenamiento local.
 * @property {(token: string | null) => void} setToken - Función para actualizar el estado del token
 *                                                      y el almacenamiento local.
 * @property {(client: string | null) => void} setClient - Función para actualizar el estado del cliente
 *                                                       y el almacenamiento local.
 * @property {(uid: string | null) => void} setUid - Función para actualizar el estado del UID
 *                                                   y el almacenamiento local.
 * @property {(expiry: string | null) => void} setExpiry - Función para actualizar el estado de la expiración
 *                                                       y el almacenamiento local.
 * @property {() => void} logout - Función para cerrar sesión del usuario y borrar todos los detalles
 *                                  de autenticación del estado y del almacenamiento local.
 */

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
