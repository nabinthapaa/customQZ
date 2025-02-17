import { createContext, useContext } from "react";
import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>(undefined);

export default function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext.Provider not found");
  }

  return authContext;
}
