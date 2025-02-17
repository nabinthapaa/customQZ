import { PropsWithChildren, useReducer } from "react";
import { AuthContext } from "./useAuth";
import authReducer from "./reducer";

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [auth, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
