import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";

import { AuthActionEnum } from "./authActions";
import authReducer, { defaultAuthState } from "./authReducer";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthProviderProps, UserModel } from "@/types/AuthModel";

const authCtx = createContext<AuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData: UserModel = JSON.parse(user);
      authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const globalLogInDispatch = useCallback(
    (props: UserModel) => {
      authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: props,
      });
      navigate("/StatAb");
    },
    [navigate]
  );

  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    navigate("/login");
  }, [navigate]);

  const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };

  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};

export default authCtx;
