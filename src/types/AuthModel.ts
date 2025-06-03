export type UserModel = {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
  accessToken: string;
};

export type AuthState = {
  isLoggedIn: boolean;
  user: UserModel;
};
export type AuthProviderProps = {
  children: React.ReactElement;
};

export interface AuthContext {
  authState: AuthState;
  globalLogInDispatch: (props: UserModel) => void;
  globalLogOutDispatch: () => void;
}

export enum RoleEnum {
  ROOT = "ROOT",
  APP_ADMIN = "ADMIN",
  "" = "",
}

export type LoginForm = {
  username: string;
  password: string;
};

export type LoginFormErrors = {
  errors: {
    username?: string;
    password?: string;
  } | null;
  message?: string | null;
};
