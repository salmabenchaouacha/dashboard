import {
  useMutation,
  UseMutationResult,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import axiosClient from "@/axiosClient";
import { LoginForm, UserModel } from "@/types/AuthModel";

type LoginFormPropsVariables = LoginForm;
type LogoutVariables = null;

type LoginFormPropsResponse = AxiosResponse<UserModel>;

const loginForm = async (
  values: LoginFormPropsVariables
): Promise<LoginFormPropsResponse> => {
  const response = await axiosClient.post("api/auth/login/", values);
  return response;
};

const useLoginForm = (): UseMutationResult<
  LoginFormPropsResponse,
  Error,
  LoginFormPropsVariables,
  unknown
> => {
  const mutationConfig: UseMutationOptions<
    LoginFormPropsResponse,
    Error,
    LoginFormPropsVariables,
    unknown
  > = {
    mutationFn: (values) => loginForm(values),
    onSuccess: () => {},
    onError: () => {},
  };

  return useMutation(mutationConfig);
};

const logout = async (
  values: LogoutVariables
): Promise<LoginFormPropsResponse> => {
  const response = await axiosClient.post("api/auth/logout/", values);
  return response;
};

const useLogout = (): UseMutationResult<
  LoginFormPropsResponse,
  Error,
  LogoutVariables,
  unknown
> => {
  const mutationConfig: UseMutationOptions<
    LoginFormPropsResponse,
    Error,
    LogoutVariables,
    unknown
  > = {
    mutationFn: () => logout(null),
    onSuccess: () => {},
    onError: () => {},
  };

  return useMutation(mutationConfig);
};

export { useLoginForm, useLogout };
