import { UserModel } from "@/types/AuthModel";

export enum AuthActionEnum {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export type AuthAction =
  | {
      type: AuthActionEnum.LOG_IN;
      payload: UserModel;
    }
  | {
      type: AuthActionEnum.LOG_OUT;
      payload: null;
    };
