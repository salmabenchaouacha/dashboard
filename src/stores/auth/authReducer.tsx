import { Reducer } from "react";
import { AuthAction } from "./authActions";
import { AuthState, RoleEnum } from "@/types/AuthModel";

export const defaultAuthState: AuthState = {
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    accessToken: "",
    role: RoleEnum[""],
  },
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  if (action.type === "LOG_IN") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      user: {
        ...state.user,
        ...action.payload,
      },
    };
  }

  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return defaultAuthState;
  }

  return state;
};

export default authReducer;
